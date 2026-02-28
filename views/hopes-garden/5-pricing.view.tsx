import { PricingCard } from '@/components/pricing-card.component';
import Text from '@/components/text.component';

export default function PricingView() {
  return (
    <>
      <section className="text-center mb-2">
        <Text type="large" className="font-serif mb-4">
          {' '}
          The Investment
        </Text>
        <Text
          type="small"
          className="text-foreground/80 font-display max-w-md mx-auto"
        >
          Commit to the pacing of your own heart.
        </Text>
      </section>
      <section className="flex flex-col md:flex-row gap-12 justify-center px-6 py-32">
        <PricingCard
          label="The Group Cohort"
          price="$797"
          features={[
            'Monthly live group coaching calls',
            'Intimate circle of 6-8 women',
            'Access to full 12-month curriculum',
            'Private community forum',
          ]}
          buttonVariant="primary"
        />

        <PricingCard
          label="1:1 Mentorship"
          price="$2,400"
          features={['Private Guidance', 'Custom Roadmap', 'Deeper Somatics']}
          buttonVariant="secondary"
        />
      </section>
    </>
  );
}
