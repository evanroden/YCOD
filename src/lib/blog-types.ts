export interface BlogPost {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: 'policy' | 'medical' | 'awareness' | 'opinion';
  excerpt: string;
  heroColor: string; // Tailwind bg class like 'bg-ycod-blue'
  content: string; // HTML content
  sources: { label: string; url: string }[];
  svgIcon: string; // inline SVG string for the post illustration
}

export type BlogCategory = BlogPost['category'];

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  policy: 'Policy & Legislation',
  medical: 'Medical Breakthroughs',
  awareness: 'Awareness & Advocacy',
  opinion: 'YCOD Perspective',
};

export const CATEGORY_COLORS: Record<BlogCategory, string> = {
  policy: 'bg-ycod-blue',
  medical: 'bg-ycod-green',
  awareness: 'bg-ycod-pink',
  opinion: 'bg-ycod-coral',
};
