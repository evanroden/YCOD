import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-posts';
import { CATEGORY_LABELS } from '@/lib/blog-types';
import BlogPostContent from './BlogPostContent';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      section: CATEGORY_LABELS[post.category],
      images: [
        {
          url: '/images/logo.png',
          width: 800,
          height: 800,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

function sanitizeJsonLd(str: string): string {
  return str.replace(/</g, '\\u003c');
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const currentIndex = sortedPosts.findIndex((p) => p.slug === params.slug);
  const prevPost = currentIndex < sortedPosts.length - 1
    ? { slug: sortedPosts[currentIndex + 1].slug, title: sortedPosts[currentIndex + 1].title }
    : null;
  const nextPost = currentIndex > 0
    ? { slug: sortedPosts[currentIndex - 1].slug, title: sortedPosts[currentIndex - 1].title }
    : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: sanitizeJsonLd(post.title),
    description: sanitizeJsonLd(post.excerpt),
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'YCOD — Youth Coalition for Organ Donation',
      url: 'https://www.ycod.org',
    },
    publisher: {
      '@type': 'Organization',
      name: 'YCOD — Youth Coalition for Organ Donation',
      url: 'https://www.ycod.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ycod.org/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.ycod.org/blog/${post.slug}`,
    },
    image: 'https://www.ycod.org/images/logo.png',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.ycod.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'News',
        item: 'https://www.ycod.org/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: sanitizeJsonLd(post.title),
        item: `https://www.ycod.org/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogPostContent post={post} prevPost={prevPost} nextPost={nextPost} />
    </>
  );
}
