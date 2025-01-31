import { Playwrite_IN } from 'next/font/google';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { reviewType } from './review/review-type';
import { reviewComments } from './review/review-comments';
import { Quote } from 'lucide-react';

const playwrite = Playwrite_IN({});

export default async function Review() {
  // fetch review profiles
  let data = await fetch('https://randomuser.me/api/?results=10');
  let userReviews = await data.json();

  userReviews.results.map((rev: reviewType, index: number) => {
    Object.defineProperty(rev, 'comment', { value: reviewComments[index] });
    return rev;
  });

  return (
    <div className="p-5 md:p-5" id="review">
      <h2 className="mb-10 text-center text-3xl">
        <span className={playwrite.className}> Testimoni</span>
      </h2>

      <div className="flex w-full justify-center overflow-clip">
        <Carousel
          opts={{
            align: 'start',
          }}
          orientation="horizontal"
          className="w-full max-w-xs md:max-w-3xl"
        >
          <CarouselContent className="-mt-1">
            {userReviews.results.map((review: reviewType) => (
              <CarouselItem
                key={review.login.uuid}
                className="pt-1 md:basis-1/2"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex min-h-60 flex-col items-center justify-between gap-5 p-6">
                      <div className="flex gap-4">
                        <Quote size={35} />
                        <p>{review.comment}</p>
                      </div>
                      <div className="flex w-full flex-row items-center gap-5">
                        <img
                          src={review.picture.medium}
                          alt="pelanggan"
                          className="aspect-square w-12 rounded-full"
                        />
                        <p className="text-sm font-bold">
                          {review.name.first + ' ' + review.name.last}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
