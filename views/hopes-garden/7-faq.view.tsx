import { Faq } from '@/components/faq.component';
import Text from '@/components/text.component';

const faqItems = [
  {
    question: 'Is this therapy or counseling?',
    answer:
      'No. Wildflower Hope Soul Care offers Christian coaching and spiritual soul care. This work is trauma-informed and rooted in prayer, Scripture, and the presence of God, but it is not psychotherapy, clinical counseling, or medical treatment. I do not diagnose or treat mental health disorders. If you are currently working with a licensed therapist, this journey can often complement that work.',
  },
  {
    question: 'Who is this program for?',
    answer:
      'Hope’s Garden Healing Pilgrimage™ is for women who are carrying grief, loss, or trauma; love Jesus but feel numb, distant, confused, or disillusioned; long for a gentle, Christ-centered healing path; want to move toward post-traumatic growth without bypassing pain; and are willing to engage weekly in reflection and gentle practices.',
  },
  {
    question: 'Who is this program not for?',
    answer:
      'This journey may not be the best fit if you are seeking quick fixes or surface-level coaching, want a rigid or fast-paced program, or are currently in active crisis, experiencing suicidal ideation, or need immediate stabilization. If you are in fresh crisis, please contact local emergency services or a crisis hotline.',
  },
  {
    question: 'Is this a group or 1:1 program?',
    answer:
      'Both options are available. Healing happens in the presence of God and in the presence of safe community. Some participants choose group, others choose one-on-one. Both formats are held with the same trauma-informed, Christ-centered approach.',
  },
  {
    question: 'Is grief a linear process in this program?',
    answer:
      'No. Grief is not linear. Healing is not a checklist. The twelve movements are not rigid stages but a gentle map. You may recognize yourself in several movements at once or return to earlier movements as new layers surface. We move forward tenderly while honoring your pace.',
  },
  {
    question: 'Will I be forced to share in a group?',
    answer:
      'No. You will always be invited, never pressured. You choose what, when, and how much you share. Listening is participation. Silence is welcome.',
  },
  {
    question: 'What if I don’t feel ready for deep healing work?',
    answer:
      'That’s okay. If you are in the earliest days of grief, First Light Ministry may be a better first step. The Hope’s Garden Healing Pilgrimage™ is for those who sense they are ready to begin tending the soil again, even gently.',
  },
  {
    question: 'Does this program include Immanuel Prayer?',
    answer:
      'Yes. The pilgrimage includes one primary Immanuel Prayer session with spacious integration weeks. Additional Immanuel Prayer sessions may be available by invitation following completion of the program.',
  },
  {
    question: 'What is the Wildflower Circle?',
    answer:
      'The Wildflower Circle is an ongoing community for graduates of the Hope’s Garden Healing Pilgrimage™ who desire continued connection, prayer, and support. Participation is optional.',
  },
  {
    question: 'How long is the program?',
    answer:
      'The program is 12 weeks. Each week includes a 60-minute group or 1:1 session, with optional reflection and journaling between sessions.',
  },
  {
    question: 'What if I miss a session?',
    answer:
      'Group sessions are not recorded to protect confidentiality. If you miss a session, you’ll be offered a brief summary and reflective prompts.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Group Journey: $797. 1:1 Journey: $2,400. Payment plans are available, and a limited number of partial scholarships may be offered.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'Due to the nature of this work and limited group capacity, refunds are not offered once the program begins. If you have concerns, please reach out before enrolling.',
  },
  {
    question: 'How do I know if this is a good fit?',
    answer:
      'Start with a free Discernment Call. We’ll talk gently about what you’re walking through and discern together whether Hope’s Garden Healing Pilgrimage™ is a good next step.',
  },
  {
    question: 'Is this faith-based?',
    answer:
      'Yes. This is a Christ-centered, Scripture-rooted, Holy Spirit-led journey. You do not need to have perfect theology, but openness to spiritual exploration is important.',
  },
  {
    question: 'Can this program replace my therapist?',
    answer:
      'No. This program does not replace licensed mental health care. It can complement therapy but is not a substitute.',
  },
  {
    question: 'What if I’m not sure I’m ready?',
    answer:
      'That’s okay. Curiosity is enough. Book a discernment call and we’ll move slowly.',
  },
  {
    question: 'Still have questions?',
    answer:
      'You’re welcome to reach out through the Contact page or schedule a Discernment Call.',
  },
];

export default function FaqView() {
  return (
    <div>
      <Text type="large" className="font-serif mb-6 text-center font-light">
        Frequently Asked Questions
      </Text>

      <Faq items={faqItems} />
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
