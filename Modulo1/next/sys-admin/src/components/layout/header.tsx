import { Button } from "../UI/button";
import { IconInput } from "../UI/Form/inputIcon";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { bgHoverGradient } from "@/utils/util";

import logo from '../../../public/logoEcommerce.png'
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full h-fit px-5 bg-slate-950 text-white ">
      <div className="flex items-center justify-between">
        <Image 
          src={logo.src}
          width={200}
          height={200}
          alt="logo"
        />
        <div className="w-1/2">
          <IconInput 
          className="!mb-0"
          Icon={IoSearchSharp}
          placeholder="Buscar Produtos..."
          id="busca"
          name="busca"
        />  
        </div>
        <div className="flex gap-5 items-center">
          <Button className={bgHoverGradient}>Categorias</Button>
          <HiOutlineShoppingCart className={`${bgHoverGradient} px-2 rounded-md`} size={49} />
          <FaRegUser className={`${bgHoverGradient} px-2 rounded-md`} size={45} />
        </div>
      </div>
    </header>
  );
}
