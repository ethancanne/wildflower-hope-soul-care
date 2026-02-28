import { Margin } from '@/layout/margin.layout';
import ContactFormView from '@/views/contact/contact-form.view';

const Contact = () => {
  return (
    <Margin outerClassName="py-40 bg-gradient-to-b from-background-200 to-background text-foreground">
      <ContactFormView />
    </Margin>
  );
};

export default Contact;
