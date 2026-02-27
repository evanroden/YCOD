import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter';
import MissionStatement from '@/components/home/MissionStatement';
import QuickRegister from '@/components/home/QuickRegister';
import CoverageTeaser from '@/components/home/CoverageTeaser';
import SectionDivider from '@/components/ui/SectionDivider';
import ImpactCalculator from '@/components/ui/ImpactCalculator';
import WaitlistTicker from '@/components/ui/WaitlistTicker';
import JoinCTA from './JoinCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionDivider color="#F5A0B8" />
      <StatsCounter />
      <WaitlistTicker />
      <SectionDivider color="#4A90D9" />
      <MissionStatement />
      <SectionDivider color="#F07070" />
      <ImpactCalculator />
      <SectionDivider color="#00C9A7" />
      <QuickRegister />
      <SectionDivider color="#F7DC6F" />
      <CoverageTeaser />
      <SectionDivider color="#F5A0B8" />
      <JoinCTA />
    </>
  );
}
