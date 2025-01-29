import { ThemeSwitcher } from '@/components/theme-switcher';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full flex-col items-center justify-center gap-8 border-t bg-primary px-8 py-16 text-center text-xs md:px-16">
      <div className="flex w-4/5 flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
        <Image src="/logo.png" height={150} width={150} alt="Footer Logo" />
        <div className="flex w-full flex-col justify-between gap-6 sm:w-3/5 sm:flex-row sm:gap-0 lg:w-2/5">
          <div className="">
            <p className="text-left text-base font-bold text-primary-foreground">
              Oh My Tofu!
            </p>
            <ul className="group pl-4 text-left text-sm/8 text-primary-foreground hover:[&>*]:underline">
              <li className="">
                <a href="">Dashboard</a>
              </li>
              <li className="">
                <a href="">Pesan</a>
              </li>
              <li className="">
                <a href="">Lokasi</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-left text-base font-bold text-primary-foreground">
              Informasi Lainnya
            </p>
            <ul className="pl-4 text-left text-sm/8 text-primary-foreground">
              <li className="hover:underline">
                <a href="">Email</a>
              </li>
              <li className="hover:underline">
                <a href="">Whatsapp</a>
              </li>
              <li className="hover:underline">
                <a href="">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="w-full border-t border-white pt-5 text-sm text-primary-foreground">
        Oh My Tofu! oleh{' '}
        <a href="https://github.com/nardaiv/" className="hover:underline">
          Narda
        </a>{' '}
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
