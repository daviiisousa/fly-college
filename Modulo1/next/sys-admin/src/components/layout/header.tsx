import { Button } from "../UI/button";
import { IconInput } from "../UI/Form/inputIcon";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

import logo from "../../../public/logoEcommerce.png";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full h-[50px] py-8 px-5 bg-slate-950 text-white border-b fixed border-gray-700 z-50">
      <div className="flex items-center justify-between h-full ">
        <Image src={logo.src} width={200} height={100} alt="logo" />
        <div className="w-[30%]">
          <IconInput
            className="!mb-0"
            Icon={IoSearchSharp}
            placeholder="Buscar Produtos..."
            id="busca"
            name="busca"
          />
        </div>
        <div className=" gap-5 items-center md:flex hidden">
          <Button className="hover:!bg-blue-500 !my-0">Categorias</Button>
          <HiOutlineShoppingCart
            className={"hover:bg-blue-500 px-2 rounded-md"}
            size={49}
          />
          <FaRegUser
            className={"hover:bg-blue-500 px-2 rounded-md"}
            size={45}
          />
        </div>
        <IoIosMenu
          className={"hover:bg-blue-500 px-2 rounded-md md:hidden"}
          size={45}
        />
      </div>
    </header>
  );
}
