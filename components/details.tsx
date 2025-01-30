import { Playwrite_IN } from 'next/font/google';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const playwrite = Playwrite_IN({});

export default function Details() {
  return (
    <div className="flex min-h-80 flex-col items-center justify-around gap-5 bg-secondary p-5 sm:flex-row sm:gap-0 md:p-10">
      <div className="relative aspect-square w-10/12 max-w-60 sm:w-4/12">
        <Image
          src="/tahu-bulat (2).webp"
          layout="fill"
          alt="Tahu Bulat in hero"
          objectFit="cover"
          className="rounded-full"
        />
      </div>

      <div className="flex w-full flex-col gap-5 sm:w-5/12 md:w-4/12">
        <h2 className="text-3xl">
          <span className={playwrite.className}> Details</span>
        </h2>

        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
          obcaecati nesciunt eius rem accusamus voluptatibus? Nesciunt id labore
          minus adipisci quasi. Vitae ut sunt blanditiis!
        </p>

        <p className="text-lg font-bold">Rp10.000, &ndash;</p>

        <div>
          <Button asChild size="sm" variant={'black'}>
            <Link href="#details">Pesan Online</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
