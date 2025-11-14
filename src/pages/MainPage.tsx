import { SectionAlready } from '@/pages/SectionAlready';
import { SectionUpcoming } from '@/pages/SectionUpcoming';
import ReferralSection from '@/pages/ReferralSection';
import GetStartedSection from '@/pages/GetStartedSection';

export function MainPage() {
  return (
    <div className="w-full p-2">
      <SectionAlready />
      <hr className="hr-line my-8" />
      <SectionUpcoming />
      <hr className="hr-line my-8" />
      <GetStartedSection />
      <ReferralSection />
    </div>
  );
}
