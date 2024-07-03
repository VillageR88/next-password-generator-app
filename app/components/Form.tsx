import Length from './Length';
import Password from './Password';
import Options from './Options';
import Strength from './Strength';
import ButtonSubmit from './ButtonSubmit';

export default function Form() {
  return (
    <form className="flex flex-col justify-between gap-[16px] sm:gap-[24px]" action="">
      <Password />
      <div className="w-full bg-[#24232C] p-[16px] pt-[21px] sm:p-[32px] sm:pt-[24px]">
        <Length />
        <Options />
        <Strength />
        <ButtonSubmit />
      </div>
    </form>
  );
}
