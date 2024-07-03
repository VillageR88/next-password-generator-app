'use client';
import { DataContext } from '@/app/_providers/DataContext';
import { useContext } from 'react';

const title = 'STRENGTH';
const description = {
  vWeak: { title: 'TOO WEAK!', color: 'bg-[#F64A4A]', cover: 1 },
  weak: { title: 'WEAK', color: 'bg-[#FB7C58]', cover: 2 },
  medium: { title: 'MEDIUM', color: 'bg-[#F8CD65]', cover: 3 },
  strong: { title: 'STRONG', color: 'bg-neonGreen', cover: 4 },
};

export default function Strength() {
  const { password } = useContext(DataContext);
  return (
    <div className="mt-[26px] flex w-full flex-wrap items-center justify-between gap-4 bg-[#18171F] px-[16px] py-[12.5px] sm:h-[72px] sm:px-[32px]">
      <span className="text-[18px] font-bold text-[#929292]">{title}</span>
      <div className="flex h-[31px] w-fit items-center justify-between gap-[15.5px]">
        <span className="text-[18px] font-bold text-almostWhite sm:text-[24px]">
          {password.passwordStrength && description[password.passwordStrength as keyof typeof description].title}
        </span>
        <ul className="flex h-[28px] w-fit items-center justify-between gap-[8px]">
          {Array.from({ length: 4 }).map((_, index) => (
            <li
              key={index}
              className={`h-[28px] w-[10px] ${password.passwordStrength && index < description[password.passwordStrength].cover ? description[password.passwordStrength].color : 'border-2'}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
