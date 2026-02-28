import { ReasonCard } from '@/components/reason-card.component';
import Text from '@/components/text.component';
import { FiCloudRain } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';
import { FiHelpCircle } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';

const reasons = [
  {
    title: 'Experiencing Grief That Changed Everything',
    description:
      'Carrying grief that altered your life, leaving you feeling underwater, without vision, clarity, or direction.',
    icon: <FiCloudRain className="w-full h-full" />,
  },
  {
    title: 'Feeling Broken or Disconnected',
    description:
      'Feeling broken in ways you can’t explain, numb or shut down, even while still loving Jesus.',
    icon: <FiHeart className="w-full h-full" />,
  },
  {
    title: 'Experiencing Anger, Confusion, and/or Disillusionment',
    description:
      'Feeling angry at God and guilty about it, unsure what you believe anymore, confused or disillusioned.',
    icon: <FiHelpCircle className="w-full h-full" />,
  },
  {
    title: 'Feeling Alone and Afraid to Hope',
    description:
      'Feeling rejected, forgotten, unseen in your grief, longing for healing but afraid to hope again.',
    icon: <FiUser className="w-full h-full" />,
  },
];

const ReasonsView = () => {
  return (
    <div>
      <Text type="large" className="text-center mb-3 font-medium">
        If You&apos;re Here, You Might Be...
      </Text>
      <Text
        type="small"
        className="text-center mb-8 font-light font-sans text-subtle-foreground"
      >
        We see the quiet strength in your seeking.
      </Text>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 rounded-2xl md:p-10 p-2">
        {reasons.map((reason) => (
          <ReasonCard
            key={reason.title}
            title={reason.title}
            description={reason.description}
            icon={reason.icon}
          />
        ))}
      </div>
      <div className="flex items-center justify-center flex-col">
        <Text
          type="small"
          className="text-center mb-8 font-light font-sans text-subtle-foreground mt-10"
        >
          You do not have to rush your healing. <br /> You do not have to tidy
          your grief. <br />
        </Text>
        <Text type="small" className="font-display text-green">
          You are welcome here.
        </Text>
      </div>
    </div>
  );
};

export default ReasonsView;
