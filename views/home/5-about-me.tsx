import Button from '@/components/button.component';
import Text from '@/components/text.component';
import Image from 'next/image';
import Markdown from 'react-markdown';

type Props = {
  picture: string;
  credentialsList: { title: string }[];
};

const AboutMeView = ({ picture, credentialsList }: Props) => {
  return (
    <div className=" mx-auto py-14 md:px-20 rounded-4xl">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2 flex justify-center items-center p-4 border-[0.5] border-gray-200 rounded-full min-w-80 min-h-80">
          <Image
            src={picture}
            width={400}
            height={400}
            alt={'Johanna, the founder of Wildflower Hope Soul Care'}
            className="rounded-full object-cover shadow-2xl md:w-90 md:h-90"
          />
        </div>
        <div className="md:w-2/3 flex flex-col justify-center items-start gap-3">
          <Text
            type="xsmall"
            className="text-center md:text-left text-green font-light font-sans tracking-[0.2em] uppercase"
          >
            The Founder
          </Text>
          <Text
            type="large"
            className="font-serif text-center font-light md:text-left mt-2 mb-3"
          >
            Meet Johanna
          </Text>
          <Text
            type="xsmall"
            className="md:text-left mb-6 font-semibold font-display tracking-widest"
          >
            Founder, Wildflower Hope Soul Care
          </Text>
          <div className="mb-8 pl-5 mx-auto md:mx-0 font-light border-b-[0.5] border-gray-200 pb-8 flex justify-center md:justify-start items-start md:gap-4 gap-2 w-full flex-col">
            {credentialsList.map((item, index) => (
              <li key={index} className="dot-list">
                <Text type="small" className="text-subtle-foreground font-sans">
                  <Markdown>{item.title}</Markdown>
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
