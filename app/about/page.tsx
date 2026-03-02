import { Margin } from '@/layout/margin.layout';
import { getData } from '@/lib/getData';
import AboutView from '@/views/about/about.view';
const About = async () => {
  const aboutData = (await getData('about')) as {
    picture: string;
    description: string;
    credentialsDescription: string;
  };
  return (
    <Margin outerClassName="py-20 bg-gradient-to-b from-background-200 to-background text-foreground">
      <AboutView {...aboutData} />
    </Margin>
  );
};

export default About;
