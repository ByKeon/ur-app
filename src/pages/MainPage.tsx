import { SectionAlready } from '@/pages/SectionAlready';
import { SectionUpcoming } from '@/pages/SectionUpcoming';
import { SectionGetStart } from '@/pages/SectionGetStart';
import { SectionReferral } from '@/pages/SectionReferral';

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
    </div>
  );
}
