import Button from './button.component';
import Text from './text.component';

type PricingCardProps = {
  label: string;
  price?: string;
  features: { feature: string }[];
  buttonLabel?: string;
  buttonLink?: string;
  buttonVariant?: 'primary' | 'secondary';
};

export function PricingCard({
  label,
  price,
  features,
  buttonLabel = 'Contact Johanna',
  buttonLink = '/contact',
  buttonVariant,
}: PricingCardProps) {
  return (
    <div className="w-full max-w-md border border-gray-100 bg-white px-12 py-16 text-center flex flex-col justify-end shadow-2xs">
      <Text
        type="xsmall"
        className="tracking-widest text-xs text-gray-400 mb-4 font-sans"
      >
        {label.toUpperCase()}
      </Text>

      {price ? (
        <Text type="large" className="font-serif mb-10">
          {price}
        </Text>
      ) : (
        <div className="mb-10">
          <Text type="small" className="text-subtle-foreground font-sans">
            Please reach out to Johanna for pricing options and details.
          </Text>
        </div>
      )}

      <hr className="my-10 opacity-10" />

      {/* Features */}
      <ul className="space-y-4 mb-14 text-left flex flex-col items-start">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center justify-start gap-3 text-gray-600"
          >
            <span className="text-green text-xs font-medium">•</span>
            <span>{feature.feature}</span>
          </li>
        ))}
      </ul>

      <Button
        link={buttonLink}
        type={buttonVariant || 'primary'}
        className={`w-full py-3 text-sm font-medium`}
      >
        {buttonLabel}
      </Button>
    </div>
  );
}
