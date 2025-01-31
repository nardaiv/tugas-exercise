'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Order() {
  const [numItem, setNumItem] = useState<number>(1);

  const handleChangeItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNum = Number(event.target.value);

    if (newNum >= 1) {
      setNumItem(newNum);
    } else {
      setNumItem(1);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select(); // Select all text when input gets focus
  };

  return (
    <div className="space flex flex-col items-center justify-center gap-20 p-10 sm:flex-row">
      <div className="md relative aspect-square w-full max-w-xs sm:w-8/12">
        <Image
          src="/tahu-bulat (3).webp"
          layout="fill"
          alt="Tahu Bulat in hero"
          objectFit="cover"
          className="rounded-xl border-2 bg-card text-card-foreground shadow-2xl"
        />
      </div>

      <div className="flex h-full w-full flex-col gap-5 sm:w-4/12">
        {/* product name */}
        <p className="text-2xl font-bold">Tahu Bulat Oh-My-Tofu!</p>
        <hr />

        {/* Description */}
        <p className="text-base font-bold">Deskripsi</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, culpa
          sint consectetur, ab aliquam earum voluptas minus, iste ducimus
          officiis cupiditate temporibus nam sed sit?
        </p>

        <div className="flex flex-row items-center gap-2">
          <button
            id="numfield"
            onClick={() => {
              setNumItem((prev) => (typeof prev == 'number' ? (prev -= 1) : 1));
            }}
            disabled={numItem <= 1}
          >
            <Minus size={10} />
          </button>

          <input
            type="number"
            value={numItem}
            className="w-10 appearance-none rounded border-2 bg-card text-center text-card-foreground shadow-2xl [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            onFocus={handleFocus}
            onChange={handleChangeItem}
          />

          <button
            onClick={() => {
              setNumItem((prev) => (typeof prev == 'number' ? (prev += 1) : 1));
            }}
          >
            <Plus size={10} />
          </button>
        </div>

        {/* price */}
        <hr />
        <p className="text-base font-bold">
          {' '}
          Total : Rp{numItem * 10}.000, &ndash;
        </p>
        <hr />

        <Button>Order</Button>
      </div>
    </div>
  );
}
