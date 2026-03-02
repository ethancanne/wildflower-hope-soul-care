import Button from '@/components/button.component';
import Text from '@/components/text.component';
import Markdown from 'react-markdown';

type Props = {
  picture: string;
  description: string;
  credentialsDescription: string;
};
const AboutView = ({ picture, description, credentialsDescription }: Props) => {
  return (
    <div className="py-20">
      <Text
        type="xsmall"
        className="text-green tracking-[0.2em] uppercase mb-4 font-sans"
      >
        Our Shared Story
      </Text>
      <Text type="large" className="font-display mb-8 font-light">
        About Johanna
      </Text>
      <Text type="medium" className="text-subtle-foreground leading-relaxed">
        <Markdown>{description}</Markdown>
      </Text>
      <hr className="my-10 opacity-10" />
      <Text type="medium" className="font-light mb-2">
        Training & Credentials
      </Text>
      <Text
        type="small"
        className="text-subtle-foreground font-sans leading-loose"
      >
        <Markdown>{credentialsDescription}</Markdown>
      </Text>
      <Text type="medium" className="text-center font-extralight mt-20 mb-2">
        If you’re here, you are welcome. You are not alone. There is hope, even
        here.
      </Text>
      <Button
        link="/hopes-garden"
        type="primary"
        className="mt-8 w-fit mx-auto"
      >
        Journey with Johanna
      </Button>
    </div>
  );
};

export default AboutView;
