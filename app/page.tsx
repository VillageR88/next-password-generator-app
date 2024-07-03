import Header from '@/app/components/Header';
import Form from '@/app/components/Form';

export default function Home() {
  return (
    <div className="mx-auto flex h-fit w-full max-w-[540px] flex-col gap-[16px] p-[16px] sm:gap-[31px] sm:px-0">
      <Header />
      <Form />
    </div>
  );
}
