import Button from '@/components/button.component';
import Text from '@/components/text.component';
import { PiLeaf } from 'react-icons/pi';

export default function InvitationView() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center">
      {/* Small leaf icon placeholder */}
      <PiLeaf className="text-green text-4xl mb-6" />

      {/* Headline */}
      <Text type="xlarge" className="font-serif mb-10  font-extralight">
        Friend…
      </Text>

      {/* Poetic copy */}
      <div className="space-y-6 max-w-xl">
        {[
          'If your heart feels fragile',
          'If grief has made the road feel long',
          'If you are quietly wondering where God is in all of this...',
        ].map((line, index) => (
          <Text
            type="medium"
            key={index}
            className="font-display text-gray-600"
          >
            {line}
          </Text>
        ))}
      </div>

      {/* Emphasis statement */}
      <div className="mt-16 space-y-3">
        <Text type="medium" className="font-sans font-light text-green">
          There is still life in the soil.
        </Text>

        <Text type="small" className="text-gray-400">
          And you do not have to walk this wilderness alone.
        </Text>
      </div>

      {/* CTA */}
      <Button
        link="https://calendly.com/johanna-wildflowerhope/30min"
        type="secondary"
        className="mt-16 md:w-[50%]"
      >
        Book your free discernment call
      </Button>
    </main>
  );
}
