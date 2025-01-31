import { Button } from './ui/button';
import Link from 'next/link';
import { Playwrite_IN } from 'next/font/google';
import Image from 'next/image';

const playwrite = Playwrite_IN({});

export default function Header() {
  return (
    <div className="flex w-full flex-col-reverse items-center justify-between gap-20 overflow-x-clip p-5 sm:flex-row sm:gap-0 lg:p-16">
      <div className="flex w-full flex-col items-start gap-5 sm:w-6/12 lg:w-7/12">
        <div className={playwrite.className}>
          <h1 className="text-4xl md:text-5xl">Tahu Bulat Favoritmu</h1>
        </div>

        <p className="text-xs md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{' '}
        </p>

        <Button asChild size="sm" variant={'default'}>
          <Link href="#details">Pesan Sekarang</Link>
        </Button>
      </div>

      <div className="relative aspect-square w-6/12 max-w-36 sm:w-3/12 sm:max-w-sm">
        <Image
          src="/tahu-bulat (3).webp"
          layout="fill"
          alt="Tahu Bulat in hero"
          objectFit="cover"
          className="rounded-[30%]"
        />

        <div className="absolute -top-[25%] right-[20%] -z-10 h-[120%] w-[120%] rounded-full bg-primary"></div>
        <div className="absolute -right-[20%] top-[40%] -z-20 h-[80%] w-[80%] rounded-full bg-secondary"></div>
        <div className="absolute -right-[25%] -top-[25%] -z-30 h-[150%] w-[150%] rounded-full border-2 border-primary"></div>
      </div>
    </div>
  );
}
