'use client';
import { DataContext } from '../_providers/DataContext';
import { useContext } from 'react';
import { passwordGenerator } from '@/app/_lib/functionsClient';

const title = 'GENERATE ';

export default function ButtonSubmit() {
  const { setPassword, settings } = useContext(DataContext);

  return (
    <button
      disabled={
        settings.includeLowerCase || settings.includeUpperCase || settings.includeNumbers || settings.includeSymbols
          ? false
          : true
      }
      onClick={() => {
        const generatedPassword = passwordGenerator(settings);
        setPassword((value) => ({
          ...value,
          password: generatedPassword.password,
          passwordStrength: generatedPassword.passwordStrength,
        }));
      }}
      type="button"
      className="mt-[26px] flex h-[56px] w-full items-center justify-center gap-[16px] border-neonGreen bg-neonGreen fill-[#24232C] text-[18px] font-bold text-[#24232C] transition-colors disabled:cursor-not-allowed sm:h-[65px] sm:gap-[24px] hover:[&:not(:disabled)]:border-2 hover:[&:not(:disabled)]:bg-transparent hover:[&:not(:disabled)]:fill-neonGreen hover:[&:not(:disabled)]:text-neonGreen"
    >
      <span className="text-[16px] font-bold md:text-[18px]">{title}</span>
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path fill="inherit" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
      </svg>
    </button>
  );
}
