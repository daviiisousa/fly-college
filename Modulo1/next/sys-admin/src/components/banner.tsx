import { bgGradient } from "@/utils/util";
import { Button } from "./UI/button";
import { FaArrowRight } from "react-icons/fa6";

export function Banner() {
  return (
    <div
      className={`w-full p-10 mt-[70px] rounded-2xl ${bgGradient} space-y-5 my-5 text-white`}
    >
      <h2 className="font-medium text-3xl">Ofertas Especiais</h2>
      <p>
        Descubra produtos incríveis com até 70% de desconto. Promoções por tempo
        limitado!
      </p>
      <Button
        theme="info"
        className="!w-fit px-5  flex items-center justify-center gap-3 max-md:!w-full"
      >
        Ver Ofertas
        <FaArrowRight />
      </Button>
    </div>
  );
}
