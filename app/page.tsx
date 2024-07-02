import Header from '@/app/components/Header';
import Form from '@/app/components/Form';

export default function Home() {
  return (
    <div className="mx-auto flex h-[695px] w-full max-w-[540px] flex-col gap-[31px]">
      <Header />
      <Form />
    </div>
  );
}
