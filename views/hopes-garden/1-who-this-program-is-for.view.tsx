import Text from '@/components/text.component';
import { ReasonCard } from '@/components/reason-card.component';
import { FiCloudRain, FiBookOpen, FiHeart } from 'react-icons/fi';

const reasons = [
  {
    title: 'The Weary Heart',
    description:
      'For the one who feels her story has been fragmented by loss and is looking for a gentle way to gather the pieces.',
    icon: <FiCloudRain className="w-full h-full" />,
  },
  {
    title: 'The Faithful Seeker',
    description:
      'For those who value Christian foundations but need a space where pain is met with grace rather than easy platitudes.',
    icon: <FiBookOpen className="w-full h-full" />,
  },
  {
    title: 'The Ready Soul',
    description:
      'For the one who senses it is time to tend to the inner garden, moving at a pace that honors her nervous system.',
    icon: <FiHeart className="w-full h-full" />,
  },
];

const WhoThisProgramIsForView = () => {
  return (
    <>
      <Text type="large" className="text-center mb-3 font-medium">
        Who This Program Is For
      </Text>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-8 rounded-2xl md:p-10 p-2">
        {reasons.map((reason) => (
          <ReasonCard
            key={reason.title}
            title={reason.title}
            description={reason.description}
            icon={reason.icon}
            subtle
          />
        ))}
      </div>
    </>
  );
};

export default WhoThisProgramIsForView;
