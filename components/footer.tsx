import { ThemeSwitcher } from "@/components/theme-switcher";
import Image from "next/image";

export default function Footer() {

    return ( 
        <footer className="bg-primary w-full flex flex-col items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16 px-16">
            <div className="w-full flex justify-between items-center">
                <Image
                    src="/favicon.ico"
                    height={100}
                    width={100}
                    alt="Footer Logo"
                />
                <div className="flex w-2/5 justify-between">
                    <div className="">
                        <p className="text-base font-bold  text-primary-foreground">Oh My Tofu!</p>
                        <ul className="pl-4 text-left text-sm/8 text-primary-foreground group hover:[&>*]:underline">
                            <li className=""><a href="">Dashboard</a></li>
                            <li className=""><a href="">Pesan</a></li>
                            <li className=""><a href="">Lokasi</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-base font-bold  text-primary-foreground">Informasi Lainnya</p>
                        <ul className="pl-4 text-left text-sm/8 text-primary-foreground group-hover:underline">
                            <li className="hover:underline"><a href="">Email</a></li>
                            <li className="hover:underline"><a href="">Whatsapp</a></li>
                            <li className="hover:underline"><a href="">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <p className="text-primary-foreground text-sm w-full pt-5 border-t border-white">
                Oh My Tofu! oleh {" "}
                <a href="https://github.com/nardaiv/" className="hover:underline">Narda</a> {" "} 
                &copy; {new Date().getFullYear()}
            </p>

        </footer>
    )

}