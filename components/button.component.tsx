import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  link: string;
  type?: 'primary' | 'secondary';
  className?: string;
};

const Button = (props: Props) => {
  const buttonStyles = {
    primary: 'bg-green text-white hover:bg-green/90 transition-colors',
    secondary:
      'bg-off-green text-green border border-gray-100 hover:bg-green/10 transition-colors',
  };
  return (
    <Link
      href={props.link}
      className={`${buttonStyles[props.type || 'primary']} px-6 py-3 flex justify-center items-center rounded-full hover:bg-dark-green transition font-sans uppercase tracking-widest font-light md:text-sm text-xs ${props.className || ''}`}
    >
      {props.children}
    </Link>
  );
};

export default Button;
