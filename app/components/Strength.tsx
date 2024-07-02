'use client';

import { useState } from 'react';

enum Power {
  vWeak = 'vWeak',
  weak = 'weak',
  medium = 'medium',
  strong = 'strong',
}

const title = 'STRENGTH';
const description = {
  vWeak: { title: 'TOO WEAK!', color: 'bg-[#F64A4A]', cover: 1 },
  weak: { title: 'WEAK', color: 'bg-[#FB7C58]', cover: 2 },
  medium: { title: 'MEDIUM', color: 'bg-[#F8CD65]', cover: 3 },
  strong: { title: 'STRONG', color: 'bg-neonGreen', cover: 4 },
};

export default function Strength() {
  const [power, setPower] = useState<Power | undefined>(undefined);
  return (
    <div className="mt-[32px] flex h-[72px] w-full items-center justify-between bg-[#18171F] px-[32px]">
      <span className="text-[18px] font-bold text-[#929292]">{title}</span>
      <div className="flex h-[31px] w-fit items-center justify-between gap-[15.5px]">
        <span className="text-[24px] font-bold text-almostWhite">{power}</span>
        <ul className="flex h-[28px] w-fit items-center justify-between gap-[8px]">
          {Array.from({ length: 4 }).map((_, index) => (
            <li
              key={index}
              className={`h-[28px] w-[10px] ${power && index < description[power].cover ? description[power].color : 'border-2'}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
