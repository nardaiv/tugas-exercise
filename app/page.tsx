import Hero from '@/components/hero';
import Details from '@/components/details';
import Review from '@/components/review';

export default async function Home() {
  return (
    <>
      <Hero />
      <Details />
      <Review />
    </>
  );
}
