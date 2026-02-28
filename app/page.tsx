import HeroComponent from '@/components/hero.component';
import { Margin } from '@/layout/margin.layout';
import ReasonsView from '@/views/home/1-reasons.view';
import ScriptureView from '@/views/home/2-scripture.view';
import GentleBridgeView from '@/views/home/3-gentle-bridge.view';
import AboutMeView from '@/views/home/5-about-me';
import InvitationView from '@/views/home/6-invitation.view';

export default function Home() {
  return (
    <>
      <div className="bg-background text-foreground">
        <HeroComponent
          image="/wildflower-field.jpg"
          title="Wildflower Hope"
          secondTitle="Soul Care"
          subtitle="Where broken ground becomes holy ground."
          description="If you are walking through grief, loss, trauma, or spiritual disillusionment, you are not alone. Wildflower Hope is a gentle, Christ-centered space where broken hearts are tended with compassion, nervous systems are honored, and hope is slowly, faithfully cultivated again."
          buttons={[{ text: 'Begin Your Journey', link: '/hopes-garden' }]}
        />
      </div>
      <Margin outerClassName="bg-background text-foreground mt-27 pb-20">
        <ReasonsView />
      </Margin>
      <Margin outerClassName="bg-gradient-to-b from-background-200 to-background text-foreground mb-20 py-20">
        <GentleBridgeView />
      </Margin>
      <Margin outerClassName="bg-background-100 text-foreground border-b border-gray-100">
        <ScriptureView />
      </Margin>
      <Margin outerClassName="bg-background-green text-foreground pt-10">
        <AboutMeView />
      </Margin>
      <Margin outerClassName="bg-background text-foreground mb-20 pt-10">
        <InvitationView />
      </Margin>
    </>
  );
}
