import Text from '@/components/text.component';

type JourneyItem = {
  label: string; // e.g. "MOVEMENT I"
  title: string; // e.g. "The Winter Garden"
  description: string; // e.g. body copy
};

const journeyItems: JourneyItem[] = [
  {
    label: 'Movement I',
    title: 'The Winter Garden',
    description:
      'Surrendering to the stillness of initial loss and the cold truth of what has passed.',
  },
  {
    label: 'Movement II',
    title: 'Clearing the Debris',
    description: 'Identifying what must be released to allow for new growth.',
  },
  {
    label: 'Movement III',
    title: 'Tending the Soil',
    description:
      'Softening the heart to receive the nutrients of grace and healing.',
  },
  {
    label: 'Movement IV',
    title: 'The Seed of Lament',
    description:
      'Finding the sacred language of grief and naming the deep questions.',
  },
  {
    label: 'Movement V',
    title: 'Watering the Roots',
    description:
      'Nurturing the foundational truths of your identity and belovedness.',
  },
  {
    label: 'Movement VI',
    title: 'The First Sprout',
    description:
      'Witnessing the first signs of resilience emerging through the brokenness.',
  },
  {
    label: 'Movement VII',
    title: 'Pruning the Self',
    description:
      'Refining priorities and setting boundaries for the next season.',
  },
  {
    label: 'Movement VIII',
    title: 'The Trellis of Grace',
    description: 'Building a structure of support to sustain ongoing growth.',
  },
  {
    label: 'Movement IX',
    title: 'Sunlight and Shadows',
    description: 'Learning to hold both joy and sorrow in equal measure.',
  },
  {
    label: 'Movement X',
    title: 'Deep Blooming',
    description:
      'Fully inhabiting your story with newfound strength and vulnerability.',
  },
  {
    label: 'Movement XI',
    title: 'Gathering the Harvest',
    description:
      'Identifying the fruit that has grown from the compost of pain.',
  },
  {
    label: 'Movement XII',
    title: 'The Wildflower Way',
    description: 'Stepping forward with hope as a quiet, beautiful rebellion.',
  },
];

export default function JourneyTimelineView() {
  return (
    <section className="py-28 bg-background-50">
      <div className="mx-auto max-w-5xl px-6">
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
            {journeyItems.map((item, index) => (
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
                    {item.label}
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
