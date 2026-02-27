import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter';
import MissionStatement from '@/components/home/MissionStatement';
import QuickRegister from '@/components/home/QuickRegister';
import CoverageTeaser from '@/components/home/CoverageTeaser';
import SectionDivider from '@/components/ui/SectionDivider';
import ImpactCalculator from '@/components/ui/ImpactCalculator';
import WaitlistTicker from '@/components/ui/WaitlistTicker';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import JoinCTA from './JoinCTA';

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'YCOD — Youth Coalition for Organ Donation',
  url: 'https://www.ycod.org',
  description:
    'The Youth Coalition for Organ Donation advocates for opt-out organ donation legislation in New York State.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.ycod.org/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HeroSection />
      <SectionDivider color="#F5A0B8" />
      <ErrorBoundary>
        <StatsCounter />
      </ErrorBoundary>
      <WaitlistTicker />
      <SectionDivider color="#4A90D9" />
      <MissionStatement />
      <SectionDivider color="#F07070" />
      <ErrorBoundary>
        <ImpactCalculator />
      </ErrorBoundary>
      <SectionDivider color="#00C9A7" />
      <QuickRegister />
      <SectionDivider color="#F7DC6F" />
      <CoverageTeaser />
      <SectionDivider color="#F5A0B8" />
      <JoinCTA />
    </>
  );
}
