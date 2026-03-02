import { PricingCard } from '@/components/pricing-card.component';
import Text from '@/components/text.component';

type Props = {
  pricingOptions: {
    title: string;
    price: string;
    features: string[];
  }[];
};

export default function PricingView({ pricingOptions }: Props) {
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
      <section className="flex flex-col md:flex-row items-center gap-12 justify-center py-32">
        {pricingOptions.map((price, index) => (
          <PricingCard
            key={index}
            label={price.title}
            price={price.price}
            features={price.features}
            buttonVariant={index === 0 ? 'primary' : 'secondary'}
          />
        ))}
      </section>
    </>
  );
}
