import SideBySide from '@/components/side-by-side.component';

const JourneyDifferenceView = () => {
  return (
    <SideBySide
      imageSrc="/forest.png"
      imageAlt="A forest landscape"
      heading="What Makes This Journey Different"
      intro="Unlike traditional coaching or support groups, we focus on the intersection of trauma-informed care and spiritual contemplative practice."
      items={[
        {
          number: '01',
          title: 'Trauma-Informed & Spirit-Led Care',
          description:
            'Trauma-informed and nervous-system aware, this journey is Holy Spirit–led and gently paced. Rooted in Scripture, prayer, and the presence of God, healing unfolds slowly, without pressure or performance.',
        },
        {
          number: '02',
          title: 'Sacred Integration & Spacious Processing',
          description:
            'Includes one primary Immanuel Prayer session and emphasizes integration and spacious processing. Story, grief, and lament are honored with compassion and gentle guidance.',
        },
        {
          number: '03',
          title: 'Healing in Safe, Sacred Community',
          description:
            'Healing happens in the presence of God and in the presence of safe community (group or 1:1). In the Held Garden and the Soil of Lament especially, we honor the truth that grief was never meant to be carried alone. You don’t perform healing here. You receive companionship.',
        },
      ]}
    />
  );
};

export default JourneyDifferenceView;
