import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { hasEnvVars } from '@/utils/supabase/check-env-vars';
import './globals.css';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    template: '%s | Oh-My-Tofu!',
    default: 'Oh-My-Tofu!',
  },
  description: 'The fastest way to build apps with Next.js and Supabase',
};

const montserratFont = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // check env variable
  if (!hasEnvVars) {
    return (
      <html>
        <body>Env file failed to process</body>
      </html>
    );
  }

  return (
    <html
      lang="id"
      className={montserratFont.className + ' scroll-smooth'}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex min-h-screen flex-col items-center">
            <div className="flex w-full flex-1 flex-col items-center gap-20 lg:gap-5">
              <Navbar />

              <div className="flex w-full flex-col gap-20">{children}</div>

              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
