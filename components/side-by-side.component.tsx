import Image from 'next/image';
import Text from '@/components/text.component';

type Item = {
  number: string;
  title: string;
  description: string;
};

type Props = {
  imageSrc: string;
  imageAlt?: string;
  heading: string;
  intro: string;
  items: Item[];
};

export default function SideBySide({
  imageSrc,
  imageAlt = '',
  heading,
  intro,
  items,
}: Props) {
  return (
    <section className="bg-background-50 py-20">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* IMAGE COLUMN */}
        <div className="relative w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-background-200 p-6">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={1000}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* CONTENT COLUMN */}
        <div className="flex flex-col gap-10">
          <div className="max-w-xl">
            <Text type="large" className="font-serif leading-tight mb-6">
              {heading}
            </Text>

            <Text
              type="small"
              className="text-subtle-foreground leading-relaxed"
            >
              {intro}
            </Text>
          </div>

          <div className="flex flex-col gap-10">
            {items.map((item) => (
              <div key={item.number} className="flex gap-6">
                <span className="text-green text-xs font-medium tracking-wide">
                  {item.number}
                </span>

                <div className="max-w-md">
                  <Text
                    type="xsmall"
                    className="uppercase tracking-[0.2em] mb-2"
                  >
                    {item.title}
                  </Text>

                  <Text
                    type="xsmall"
                    className="text-subtle-foreground leading-relaxed"
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
