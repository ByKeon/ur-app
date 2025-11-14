import { SectionAlready } from '@/pages/SectionAlready';
import { SectionUpcoming } from '@/pages/SectionUpcoming';
import { SectionGetStart } from '@/pages/SectionGetStart';
import { SectionReferral } from '@/pages/SectionReferral';
import { SectionAmbassador } from '@/pages/SectionAmbassador';
import { SectionDisclaimer } from './SectionDisclaimer';

export function MainPage() {
  return (
    <div className="w-full px-2">
      <SectionAlready />
      <hr className="hr-line" />
      <SectionUpcoming />
      <hr className="hr-line" />
      <SectionGetStart />
      <hr className="hr-line" />
      <SectionReferral />
      <hr className="hr-line" />
      <SectionAmbassador />
      <SectionDisclaimer />
    </div>
  );
}
