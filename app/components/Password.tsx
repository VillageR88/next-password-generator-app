'use client';
import { DataContext } from '@/app/_providers/DataContext';
import { useContext, useEffect, useState } from 'react';

export default function Password() {
  const { password } = useContext(DataContext);
  const [clicked, setClicked] = useState<boolean>(false);
  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        setClicked(false);
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [clicked]);
  return (
    <label className="relative" htmlFor="password">
      <input
        value={password.password}
        placeholder="P4$5W0rD!"
        id="password"
        disabled
        title="password"
        name="password"
        className="h-[64px] w-full truncate bg-[#24232C] pl-[16px] pr-[50px] text-[24px] font-bold text-almostWhite placeholder:text-almostWhite/25 sm:h-[80px] sm:pl-[32px] sm:text-[32px]"
        type="text"
      />
      <button
        disabled={!password.password}
        onClick={() => {
          void navigator.clipboard.writeText(password.password);
          setClicked(true);
        }}
        title="copy to clipboard"
        type="button"
        className={`${clicked ? 'scale-[80%]' : ''} absolute right-[16px] top-[20px] fill-neonGreen transition duration-500 disabled:cursor-not-allowed sm:right-[32px] sm:top-[28px] hover:[&:not(:disabled)]:fill-almostWhite`}
      >
        <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
            fill="inherit"
          />
        </svg>
      </button>
    </label>
  );
}
