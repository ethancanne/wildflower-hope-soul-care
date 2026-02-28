type Props = {
  className?: string;
  children: React.ReactNode;
  type?: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
};

const Text = (props: Props) => {
  //sizes for small, medium, large and make them responsive

  let sizeClass = 'text-xs md:text-xs';
  if (props.type === 'xsmall') {
    sizeClass = 'text-sm md:text-md';
  } else if (props.type === 'small') {
    sizeClass = 'text-md md:text-lg';
  } else if (props.type === 'medium') {
    sizeClass = 'text-xl md:text-2xl';
  } else if (props.type === 'large') {
    sizeClass = 'text-3xl md:text-5xl';
  } else if (props.type === 'xlarge') {
    sizeClass = 'text-5xl md:text-7xl lg:text-8xl';
  }

  return (
    <h1 className={`${sizeClass} ${props.className} tracking-[-0.025em]`}>
      {props.children}
    </h1>
  );
};

export default Text;
