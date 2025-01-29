import { EnvVarWarning } from '@/components/env-var-warning';
import HeaderAuth from '@/components/header-auth';
import { hasEnvVars } from '@/utils/supabase/check-env-vars';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
      <div className="flex w-full max-w-5xl items-center justify-between p-3 px-5 text-sm">
        {/* 
          <div className="flex gap-5 items-center font-semibold">

            <Link href={"/"}>Next.js Supabase Starter</Link>
          </div>

          {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />} */}
        <Link href={'/'}>
          <Image src="/logo.png" height={80} width={80} alt="Footer Logo" />
        </Link>

        <div className="flex items-center gap-3">
          <ul className="group flex gap-5 text-sm hover:[&>*]:text-primary">
            <li>
              <a href=""></a>Detail
            </li>
            <li>
              <a href=""></a>Testimoni
            </li>
          </ul>

          <HeaderAuth />
        </div>
      </div>
    </nav>
  );
}
