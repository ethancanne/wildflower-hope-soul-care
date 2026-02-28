import Button from '@/components/button.component';
import Text from '@/components/text.component';
import { LiaLeafSolid } from 'react-icons/lia';
import { PiSunHorizon } from 'react-icons/pi';

export default function DiscernmentCallView() {
  return (
    <section className="">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <PiSunHorizon className="text-green text-5xl mb-6 text-center flex justify-center m-auto" />

        {/* Heading */}
        <Text type="large" className="font-serif mb-6">
          Begin with a Hope&apos;s Garden Discernment Call
        </Text>

        {/* Subheading */}
        <Text type="medium" className="text-subtle-foreground mb-16">
          Your free 30-minute call is a soft first step — a place to:
        </Text>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-y-10 gap-x-20 text-left max-w-3xl mx-auto mb-16">
          {[
            'Share a bit of your story',
            'Receive prayerful, compassionate listening',
            'Ask questions about soul care coaching',
            'Discern whether working together is right for your season',
          ].map((feature, index) => (
            <div className="flex items-start gap-3" key={index}>
              <LiaLeafSolid className="text-green text-lg mt-1" />
              <Text type="small" className="text-foreground">
                {feature}
              </Text>
            </div>
          ))}
        </div>

        <div className="border-t border-black/10 my-16" />

        {/* Gentle Assurance Copy */}
        <div className="space-y-4 mb-12">
          <Text
            type="small"
            className="italic text-subtle-foreground font-sans font-light"
          >
            There is no pressure.
          </Text>

          <Text
            type="small"
            className="italic text-subtle-foreground font-sans font-light"
          >
            No fixing. No performance required.
          </Text>

          <Text type="medium" className="font-serif font-extralight">
            Just sacred space to breathe and be seen.
          </Text>
        </div>

        {/* CTA */}
        <Button
          link="https://calendly.com/johanna-wildflowerhope/30min"
          type="primary"
        >
          Schedule Your Free Call
        </Button>
      </div>
    </section>
  );
}
