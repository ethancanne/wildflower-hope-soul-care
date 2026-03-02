import { Faq } from '@/components/faq.component';
import Text from '@/components/text.component';

type Props = {
  faqs: {
    question: string;
    answer: string;
  }[];
};

export default function FaqView({ faqs }: Props) {
  return (
    <div>
      <Text type="large" className="font-serif mb-6 text-center font-light">
        Frequently Asked Questions
      </Text>

      <Faq items={faqs} />
      <Text
        type="medium"
        className="text-center mt-12 text-subtle-foreground font-sans font-light"
      >
        Still have questions?
      </Text>
      <Text
        type="small"
        className="text-center mt-2 text-green font-serif font-light"
      >
        You’re welcome to reach out through the Contact page or schedule a
        Discernment Call.
      </Text>
    </div>
  );
}
