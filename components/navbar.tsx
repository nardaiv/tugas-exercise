import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import Image from "next/image";



export default function Navbar() {

    return ( 
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
          {/* 
          <div className="flex gap-5 items-center font-semibold">

            <Link href={"/"}>Next.js Supabase Starter</Link>
          </div>

          {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />} */}
          <Link  href={"/"} >
            <Image
              src="/logo.png"
              height={80}
              width={80}
              alt="Footer Logo"
            />
          </Link>

          <div className="flex items-center gap-3">
            <ul className="flex gap-5 text-sm group hover:[&>*]:text-primary">
              <li><a href=""></a>Detail</li>
              <li><a href=""></a>Testimoni</li>
            </ul>

            <HeaderAuth />
          </div>

        </div>
      </nav>
    )

}