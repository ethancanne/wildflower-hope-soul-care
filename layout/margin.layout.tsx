type Props = {
  children: React.ReactNode;
  innerClassName?: string;
  outerClassName?: string;
};

export const Margin = (props: Props) => {
  return (
    <div className={props.outerClassName}>
      <div className={`max-w-340 mx-auto p-4 ${props.innerClassName || ''}`}>
        {props.children}
      </div>
    </div>
  );
};
