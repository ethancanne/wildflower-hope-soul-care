import Text from '@/components/text.component';

type Props = {
  movements: {
    title: string;
    description: string;
  }[];
};

function toRoman(num: number): string {
  const map: [number, string][] = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let result = '';

  for (const [value, symbol] of map) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

export default function JourneyTimelineView({ movements }: Props) {
  return (
    <section className="py-28 bg-background-50">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-24">
          <Text type="large" className="font-serif mb-4">
            The 12-Movement Overview
          </Text>

          <Text type="medium" className="italic text-subtle-foreground">
            A linear path through the landscape of the heart.
          </Text>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-green/30 hidden md:block" />

          <div className="flex flex-col gap-24">
            {movements.map((item, index) => (
              <div
                key={item.title}
                className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 items-start"
              >
                {/* Left content */}
                <div className="text-right md:text-right">
                  <Text
                    type="xsmall"
                    className="uppercase tracking-[0.25em] text-green mb-3"
                  >
                    Movement {toRoman(index + 1)}
                  </Text>

                  <Text type="medium" className="font-serif">
                    {item.title}
                  </Text>
                </div>

                {/* Dot */}
                <div className="hidden md:flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-green" />
                </div>

                {/* Right content */}
                <div className="text-left">
                  <Text
                    type="small"
                    className="text-subtle-foreground leading-relaxed max-w-sm"
                  >
                    {item.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
