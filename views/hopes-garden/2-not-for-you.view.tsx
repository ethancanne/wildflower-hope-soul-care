import Text from '@/components/text.component';

export default function NotForYouView() {
  return (
    <section className="py-20 bg-background-50">
      <div className="mx-auto max-w-3xl text-center">
        <Text
          type="small"
          className="uppercase tracking-[0.25em] text-subtle-foreground mb-6"
        >
          Who This Journey Is Not For
        </Text>

        <div className="flex flex-col gap-4 text-subtle-foreground leading-relaxed">
          <Text type="small">This journey may not be the best fit if you:</Text>

          <ul className="flex flex-col gap-3 list-none italic">
            <li>Are seeking quick fixes or surface-level coaching</li>
            <li>Want a rigid, fast-paced, or highly structured program</li>
            <li>
              Are in immediate crisis and need emergency or intensive clinical
              care
            </li>
          </ul>

          <Text type="xsmall" className="mt-6">
            If you are in fresh loss or crisis, please contact local emergency
            services or a crisis hotline.
          </Text>
        </div>
      </div>
    </section>
  );
}
