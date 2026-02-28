import { Margin } from '@/layout/margin.layout';
import AboutView from '@/views/about/about.view';
const About = () => {
  return (
    <Margin outerClassName="py-20 bg-gradient-to-b from-background-200 to-background text-foreground">
      <AboutView />
    </Margin>
  );
};

export default About;
