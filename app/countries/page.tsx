import { createClient } from '@/utils/supabase/server';

export default async function Countries() {
  const supabase = await createClient();
  const { data: countries } = await supabase.from("countries").select();

  return <>
    <h1 className="font-bold text-[40px]">Hwello</h1>
    <pre>{JSON.stringify(countries, null, 2)}</pre>
  </>
}