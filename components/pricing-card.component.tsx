import Button from './button.component';
import Text from './text.component';

type PricingCardProps = {
  label: string;
  price: string;
  features: string[];
  buttonLabel?: string;
  buttonVariant?: 'primary' | 'secondary';
};

export function PricingCard({
  label,
  price,
  features,
  buttonLabel = 'Apply',
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

      <Text type="large" className="font-serif mb-10">
        {price}
      </Text>

      <hr className="my-10 opacity-10" />

      {/* Features */}
      <ul className="space-y-4 mb-14">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center justify-start gap-3 text-gray-600"
          >
            <span className="text-[#8FAE95] text-xs">●</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        link="https://calendly.com/johanna-wildflowerhope/30min"
        type={buttonVariant || 'primary'}
        className={`w-full py-3 text-sm font-medium`}
      >
        {buttonLabel}
      </Button>
    </div>
  );
}
