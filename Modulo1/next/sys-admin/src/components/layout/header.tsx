import { Button } from "../UI/buttons/button";
import { IconInput } from "../UI/inputs/inputIcons";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

import logo from "../../../public/logoEcommerce.png";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full h-[50px] py-9 px-5 bg-slate-950/70 text-white border-b fixed border-gray-700 backdrop-blur-md z-20">
      <div className="flex items-center justify-between h-full ">
        <Link href="/">
          <Image priority src={logo.src} width={200} height={100} alt="logo" />
        </Link>
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
          <Button
            theme="ghost"
            className="hover:!bg-blue-500 !my-0 transition-all"
          >
            Categorias
          </Button>
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
