import Text from '@/components/text.component';
import { RiLeafLine } from 'react-icons/ri';

const GentleBridgeView = () => {
  return (
    <div>
      <div className="flex justify-center items-center rounded-full w-10 h-10 mx-auto mb-4 border-[0.5] border-gray-300">
        <RiLeafLine className="text-green text-md" />
      </div>
      <Text type="large" className="text-center my-9 font-medium">
        A Safe Place to Land
      </Text>

      <Text
        type="small"
        className="text-center my-8 italic text-subtle-foreground leading-relaxed font-display max-w-3xl mx-auto"
      >
        You don’t need fixing. You don’t need quick answers, and you don’t need
        to have it all figured out.{' '}
        <strong>
          What you need is a safe place to land — a reminder that you were never
          meant to carry this alone.
        </strong>{' '}
        <br />
        <br />
        This is a Holy Spirit–led healing pilgrimage, where we move slowly and
        tenderly, one step at a time, making space for God to lead both the pace
        and the process. Rooted in connection, compassion, and gentle guidance,
        this journey is not rushed or forced; it honors the sacred work God is
        doing beneath the surface. Jesus is the Guide here. I am not the healer
        — I am a companion in the valley. <br />
        <br /> I gently walk alongside women through a 12-week healing
        pilgrimage, partnering with God to tend the soil of grief and begin
        growing forward again, trusting that He brings life, restoration, and
        hope in His perfect time.
      </Text>
      <hr className="border-gray-300 w-20 mx-auto" />
    </div>
  );
};

export default GentleBridgeView;
