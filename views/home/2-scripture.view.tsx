import Text from '@/components/text.component';

const scripture = {
  title: 'Psalms 8:12',
  text: '“The Lord is close to the brokenhearted and saves those who are crushed in spirit.”',
};
const ScriptureView = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-col py-14 max-w-3xl mx-auto text-center">
      <Text
        type="medium"
        className="text-green italic font-medium leading-relaxed font-display"
      >
        {scripture.text}
      </Text>
      <Text
        type="xxsmall"
        className="text-2xl uppercase font-medium mb-4 font-sans text-subtle-foreground tracking-[0.2em]"
      >
        — {scripture.title}
      </Text>
    </div>
  );
};

export default ScriptureView;
