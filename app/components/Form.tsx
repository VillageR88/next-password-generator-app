import Length from './Length';
import Password from './Password';
import Options from './Options';
import Strength from './Strength';

export default function Form() {
  return (
    <form className="flex h-[632px] flex-col justify-between" action="">
      <Password />
      <div className="h-[528px] w-full bg-[#24232C] px-[32px] pt-[24px]">
        <Length />
        <Options />
        <Strength />
      </div>
    </form>
  );
}
