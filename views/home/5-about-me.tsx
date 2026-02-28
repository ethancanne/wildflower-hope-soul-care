import Button from '@/components/button.component';
import Text from '@/components/text.component';
import Image from 'next/image';
const about = {
  upperTitle: 'The Founder',
  title: 'Meet Johanna',
  subtitle: 'Founder, Wildflower Hope Soul Care',
  descriptionItems: [
    ' Board Certified Christian Counselor (NACC)',
    'Trauma-Informed Coach (CTHN Level 1)',
    'Trained in the Immanuel Healing Approach',
    'Host of the Wildflower Hope Soul Care Podcast',
    'Author of Hope’s Garden Song',
    '25+ years of compassionate care and teaching experience',
  ],
  image: '/johanna.png',
};

const AboutMeView = () => {
  return (
    <div className=" mx-auto py-14 md:px-20 rounded-4xl">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2 flex justify-center items-center p-4 border-[0.5] border-gray-200 rounded-full min-w-80 min-h-80">
          <Image
            src={about.image}
            width={400}
            height={400}
            alt={about.title}
            className="rounded-full object-cover shadow-2xl md:w-90 md:h-90"
          />
        </div>
        <div className="md:w-2/3 flex flex-col justify-center items-start gap-3">
          <Text
            type="xsmall"
            className="text-center md:text-left text-green font-light font-sans tracking-[0.2em] uppercase"
          >
            {about.upperTitle}
          </Text>
          <Text
            type="large"
            className="font-serif text-center font-light md:text-left mt-2 mb-3"
          >
            {about.title}
          </Text>
          <Text
            type="xsmall"
            className="md:text-left mb-6 font-semibold font-display tracking-widest"
          >
            {about.subtitle}
          </Text>
          <div className="mb-8 pl-5 mx-auto md:mx-0 font-light border-b-[0.5] border-gray-200 pb-8 flex justify-center md:justify-start items-start md:gap-4 gap-2 w-full flex-col">
            {about.descriptionItems.map((item, index) => (
              <li key={index} className="dot-list">
                <Text type="small" className="text-subtle-foreground font-sans">
                  {item}
                </Text>
              </li>
            ))}
          </div>
          <Text
            className="text-subtle-foreground font-sans font-light"
            type="small"
          >
            Johanna&apos;s approach is gentle, trauma-aware, and deeply rooted
            in the nearness of Christ in suffering.
          </Text>

          <Button link="/about" type="secondary" className="mt-10">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMeView;
