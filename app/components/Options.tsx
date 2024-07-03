'use client';

import { DataContext } from '../_providers/DataContext';
import { useContext } from 'react';

const options = [
  { id: 'includeUpperCase', label: 'Include Uppercase letters' },
  { id: 'includeLowerCase', label: 'Include Lowercase Letters' },
  { id: 'includeNumbers', label: 'Include Numbers' },
  { id: 'includeSymbols', label: 'Include Symbols' },
];

export default function Options() {
  const { setSettings } = useContext(DataContext);
  return (
    <ul className="mt-[40px] flex w-full flex-col justify-between gap-[16px] sm:gap-[20px]">
      {options.map((option) => (
        <li className="group/checkBox" key={option.id}>
          <label
            htmlFor={option.label}
            className="relative z-10 flex w-fit items-center gap-[20px] hover:cursor-pointer sm:gap-[24px]"
          >
            <svg
              className="absolute left-[3px] opacity-0 transition group-has-[input:checked]/checkBox:opacity-100"
              width="14"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8" />
            </svg>
            <input
              onChange={(e) => {
                setSettings((value) => ({ ...value, [option.id]: e.target.checked }));
              }}
              id={option.label}
              name={option.label}
              className="mb-[2px] size-[20px]"
              type="checkbox"
            />
            <span className="text-[16px] font-bold text-almostWhite sm:text-[18px]">{option.label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}
