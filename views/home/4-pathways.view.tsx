import Text from '@/components/text.component';
import Image from 'next/image';
import Link from 'next/link';

const pathways = [
  {
    title: "Hope's Garden",
    description:
      'A healing pilgrimage for women navigating complex trauma. Through gentle retreats and community, we cultivate safety and restoration.',
    image: '/hero-image.png',
  },
  {
    title: 'First Light Ministry',
    description:
      'Tender support for the earliest, darkest days of grief. We hold the lantern for you until you can begin to see the dawn again.',
    image: '/pathways/first-light.png',
  },
  {
    title: 'Immanuel Prayer',
    description:
      'One-on-one sessions designed to help you connect with the healing presence of Jesus within the landscapes of your memories.',
    image: '/pathways/immanuel-prayer.png',
  },
];

const PathwaysView = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 flex-col py-14 max-w-3xl mx-auto text-center">
        <Text
          type="xxsmall"
          className="uppercase text-green font-semibold font-sans tracking-[0.2em]"
        >
          Healing Journeys
        </Text>
        <Text type="large" className="text-center mt-2 mb-3 font-medium">
          Pathways for Your Heart
        </Text>
        <Text
          type="small"
          className="text-center mb-8 font-light font-sans text-subtle-foreground"
        >
          Choose the space that resonates with the quiet needs of your soul in
          this season.
        </Text>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 rounded-2xl md:p-10 p-2 ">
        {pathways.map((pathway) => (
          <div
            key={pathway.title}
            className="bg-background-200 border-gray-200 border-[0.5] overflow-hidden rounded-4xl"
          >
            <div className="w-full h-60">
              <Image
                src={pathway.image}
                width={400}
                height={250}
                alt={pathway.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div key={pathway.title} className="flex flex-col gap-4 p-10">
              <Text type="medium" className="text-xl mb-2 font-medium">
                {pathway.title}
              </Text>
              <Text
                type="xsmall"
                className="text-subtle-foreground font-sans leading-relaxed"
              >
                {pathway.description}
              </Text>
              <Link
                href="/get-started"
                className="text-green rounded md:text-lg text-sm"
              >
                Get Started <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PathwaysView;
