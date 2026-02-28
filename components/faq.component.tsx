type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items: FaqItem[];
};

export function Faq({ items }: FaqProps) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <details
          key={i}
          className="group  border-b border-gray-200 p-6 transition-all"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span>{item.question}</span>
            <span className="ml-4 transition-transform group-open:rotate-45 text-md">
              +
            </span>
          </summary>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
