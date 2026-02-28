import { ReactNode } from 'react';
import Text from '@/components/text.component';
import clsx from 'clsx';

type ReasonCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  subtle?: boolean;
};

export function ReasonCard({
  title,
  description,
  icon,
  subtle = false,
}: ReasonCardProps) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center text-center',
        subtle ? 'gap-6 py-12' : 'bg-background-green rounded-2xl p-9 gap-4'
      )}
    >
      <div
        className={clsx(
          'flex items-center justify-center',
          subtle
            ? 'w-8 h-8 text-muted-foreground opacity-60'
            : 'w-10 h-10 mb-4 text-green bg-white rounded-full p-2 shadow-sm'
        )}
      >
        {icon}
      </div>

      <Text
        type="small"
        className={clsx(
          subtle
            ? 'text-sm tracking-[0.2em] uppercase text-foreground/80'
            : 'text-xl mb-2 font-medium'
        )}
      >
        {title}
      </Text>

      <Text
        type="xsmall"
        className={clsx(
          'font-sans leading-relaxed max-w-md',
          subtle ? 'text-muted-foreground' : 'text-subtle-foreground'
        )}
      >
        {description}
      </Text>
    </div>
  );
}
