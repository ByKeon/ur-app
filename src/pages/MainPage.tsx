import HeroSection from '@/pages/HeroSection';
import IntroSection from '@/pages/IntroSection';
import FeaturePreview from '@/pages/FeaturePreview';
import GetStartedSection from '@/pages/GetStartedSection';
import FAQSection from '@/pages/FAQSection';
import CTASection from '@/pages/CTASection';

export function MainPage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeaturePreview />
      <GetStartedSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
