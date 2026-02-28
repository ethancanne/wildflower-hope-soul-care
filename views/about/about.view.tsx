import Button from '@/components/button.component';
import Text from '@/components/text.component';

const AboutView = () => {
  return (
    <div className="py-20">
      <Text
        type="xsmall"
        className="text-green tracking-[0.2em] uppercase mb-4"
      >
        Our Shared Story
      </Text>
      <Text type="large" className="font-display mb-8 font-light">
        About Johanna
      </Text>
      <Text type="medium" className="text-subtle-foreground leading-relaxed">
        My story is one of deep love, devastating loss, and a God who has met me
        in the valley.
        <br />
        <br />
        I am a mother who carries the love and loss of a daughter who now lives
        in heaven.
        <br />
        <br />
        Our daughter, Gianna Lilyfaith, was adopted from China at the age of
        two. She was born with half of a heart and lived six beautiful years on
        this earth before moving to heaven. Her life, though far too short,
        displayed God’s miracles, beauty, and glory in profound ways.
        <br />
        <br />
        Losing Gianna broke me in places I didn’t know existed.
        <br />
        <br />
        It also became the soil where God began to gently teach me that healing
        is not about moving on or getting over what was lost.
        <br />
        <br />
        It is about learning how to carry love and loss with Him. It is about
        being met in the valley. It is about discovering, slowly and tenderly,
        that He is still near.
        <br />
        <br />
        And it is about hope. Not the loud, shiny kind. Not the kind that
        bypasses pain. But a quiet, hard-won hope. The kind you cling to when
        everything in you wants to give up. The kind you breathe in one moment
        at a time.
        <br />
        <br />
        There is room here to both honor grief and to believe in God’s goodness.
        To sit in the pain without rushing it. To bear witness to what has been
        lost. To speak the truth about how devastating it is. And also, over
        time, to begin looking for where God is quietly redeeming all things.
        <br />
        <br />
        Not because the loss was good. Not because the pain makes sense. But
        because God is faithful even in wastelands.
        <br />
        <br />
        I believe God is still able to make the desert bloom like a wildflower.
        Sometimes that blooming looks like a deeper compassion. Sometimes it
        looks like a softened heart. Sometimes it looks like a clearer sense of
        identity, purpose, or calling.
        <br />
        <br />
        We don’t force redemption. We don’t assign meaning. We walk gently
        toward it, together.
        <br />
        <br />
        Out of this same soil, Wildflower Hope Soul Care was born. A place where
        the brokenhearted are not rushed. A place where grief is honored. A
        place where stories are held with compassion. A place where Jesus is
        trusted to be the Healer and the Guide.
        <br />
        <br />I walk with brokenhearted women who are carrying grief, trauma,
        and deep heartache and who long for a gentle, Christ-centered path
        toward healing, integration, and post-traumatic growth.
      </Text>
      <hr className="my-10 opacity-10" />
      <Text type="medium" className="font-light mb-2">
        Training & Credentials
      </Text>
      <Text
        type="small"
        className="text-subtle-foreground font-sans leading-loose"
      >
        I am a trauma-informed Christian healing coach, board certified with the
        National Association of Christian Counselors (NACC), a Certified
        Christian Trauma Care Provider – Level 1 (CCTCP-1), and trained in the
        Immanuel Prayer Approach through Dr. Karl Lehman. I practice within a
        trauma-informed, faith-based coaching and spiritual soul care framework
        and do not diagnose or treat mental health disorders.
      </Text>
      <Text type="medium" className="text-center font-extralight mt-20 mb-2">
        If you’re here, you are welcome. You are not alone. There is hope, even
        here.
      </Text>
      <Button
        link="/hopes-garden"
        type="primary"
        className="mt-8 w-fit mx-auto"
      >
        Journey with Johanna
      </Button>
    </div>
  );
};

export default AboutView;
