import HeaderAuth from '@/components/header-auth';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
      <div className="flex w-full max-w-5xl items-center justify-between p-3 px-5 text-sm">
        <Link href={'/'}>
          <Image src="/logo.png" height={80} width={80} alt="Footer Logo" />
        </Link>

        <div className="flex items-center gap-3">
          <ul className="group hidden gap-5 text-sm sm:flex hover:[&>*]:text-primary">
            <li>
              <Link href={'/#details'}>Detail</Link>
            </li>
            <li>
              <Link href={'/#review'}>Testimoni</Link>
            </li>
          </ul>

          <HeaderAuth />
        </div>
      </div>
    </nav>
  );
}
