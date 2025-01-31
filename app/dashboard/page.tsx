import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/sign-in');
  }

  return (
    <div className="mx-auto flex min-h-[400px] w-full max-w-xl flex-col gap-8 p-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <hr />
      <p>
        Pesan tahu bulatmu sekarang! Pengiriman dapat dilakukan dengan ojek
        online
      </p>
      <Link href={'/dashboard/order'}>
        <Button>Buat Pesanan</Button>
      </Link>
    </div>
  );
}
