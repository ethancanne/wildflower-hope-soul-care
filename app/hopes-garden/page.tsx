import HeroComponent from '@/components/hero.component';
import { Margin } from '@/layout/margin.layout';
import WhoThisProgramIsForView from '@/views/hopes-garden/1-who-this-program-is-for.view';
import NotForYouView from '@/views/hopes-garden/2-not-for-you.view';
import JourneyDifferenceView from '@/views/hopes-garden/3-journey-difference.view';
import JourneyTimelineView from '@/views/hopes-garden/4-journey-timeline.view';
import PricingSection from '@/views/hopes-garden/5-pricing.view';
import DiscernmentCallViewSection from '@/views/hopes-garden/6-discernment-call.view';
import FaqView from '@/views/hopes-garden/7-faq.view';

export default function HopesGarden() {
  return (
    <>
      <div className="bg-background text-foreground">
        <HeroComponent
          image="/forest-2.png"
          title="Hope’s Garden"
          secondTitle="Healing Journey"
          upperTitle="A sanctuary for your heart"
          subtitle="Trauma-informed Christian support for sorrow-soaked hearts in the wilderness."
          buttons={[
            {
              text: 'Apply Now',
              link: 'https://calendly.com/johanna-wildflowerhope/30min',
            },
          ]}
        />
      </div>
      <Margin outerClassName="bg-background text-foreground mt-27 pb-20">
        <WhoThisProgramIsForView />
      </Margin>
      <Margin outerClassName="border-t-[0.5] border-gray-200 text-foreground border-y border-gray-100">
        <NotForYouView />
      </Margin>
      <Margin outerClassName="bg-background-200 text-foreground  pt-10">
        <JourneyDifferenceView />
      </Margin>
      <Margin outerClassName="bg-gradient-to-b from-background-200 to-background text-foreground mb-20 pt-10">
        <JourneyTimelineView />
      </Margin>
      <Margin outerClassName="text-foreground mb-20 pt-20 border-t-[0.5] border-gray-200 bg-gradient-to-b from-background-green to-background">
        <PricingSection />
      </Margin>
      <Margin outerClassName="bg-background text-foreground mb-20 pt-10">
        <DiscernmentCallViewSection />
      </Margin>
      <Margin outerClassName="bg-gradient-to-b from-background-200 to-background text-foreground mb-20 pt-20">
        <FaqView />
      </Margin>
    </>
  );
}
