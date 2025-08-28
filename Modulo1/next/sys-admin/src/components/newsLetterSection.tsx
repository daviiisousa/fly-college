import { Button } from "./UI/button";
import { Input } from "./UI/Form/input";

export function NewsLetterSection() {
  return (
    <section className="my-10">
      <div className="w-full p-10 rounded-2xl space-y-5 flex flex-col justify-center items-center bg-slate-800">
        <h2 className="text-3xl font-bold">Fique por dentro das novidades</h2>
        <p className="text-[18px]">
          Receba ofertas exclusivas, lançamentos e dicas diretamente no seu
          email.
        </p>
        <div className="flex w-1/2 mx-auto gap-5 items-center">
          <Input placeholder="Digite seu email" className="" />
          <Button theme="primary" className="!w-[200px]">
            Inscrever-se
          </Button>
        </div>
      </div>
    </section>
  );
}
