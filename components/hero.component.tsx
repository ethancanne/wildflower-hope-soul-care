import Button from './button.component';
import Text from './text.component';

type Props = {
  image: string;
  title: string;
  secondTitle?: string;
  upperTitle?: string;
  subtitle: string;
  description?: string;
  buttons: { text: string; link: string }[];
};

const HeroComponent = (props: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.image})` }}
      className={`shadow-sm h-[100vh] bg-cover bg-center rounded-lg flex items-center justify-center mask-b-from-70% pt-20 `}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-white/80"></div>
      <div className="absolute inset-0  bg-white/70   "></div>

      <div className="md:p-8 text-center flex flex-col items-center justify-center gap-8 w-full z-20">
        <Text className="font-sans text-green uppercase" type="xsmall">
          {props.upperTitle}
        </Text>
        <Text className={`font-serif leading-[1.05]`} type="xlarge">
          {props.title} {props.secondTitle && <br />} {props.secondTitle}
        </Text>

        <Text
          className={`italic font-light font-display text-black md:max-w-full max-w-md`}
          type="medium"
        >
          {props.subtitle}
        </Text>
        <Text
          className={`font-sans leading-relaxed font-extralight md:max-w-2xl max-w-md`}
          type="small"
        >
          {props.description}
        </Text>

        <div className="flex gap-4">
          {props.buttons.map((button, index) => (
            <Button
              key={button.text}
              link={button.link}
              type="primary"
              className={index === 0 ? '' : 'bg-green/80'}
            >
              {button.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
