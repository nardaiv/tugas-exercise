import Hero from '@/components/hero';
import Details from '@/components/details';
import Review from '@/components/review';

export default async function Home() {
  return (
    <>
      <Hero />
      <Details />
      <Review />
      {/* <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
      </main> */}
    </>
  );
}
