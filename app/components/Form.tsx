'use client';
import Length from './Length';
import Password from './Password';

export default function Form() {
  return (
    <form className="flex h-[632px] flex-col justify-between" action="">
      <Password />
      <div className="h-[528px] w-full bg-[#24232C] px-[32px] pt-[24px]">
        <Length />
      </div>
    </form>
  );
}
