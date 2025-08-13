import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

// Componente para botões sociais
export function SocialButtons({ isLogin = false }){
return (
  <div
    className={`${isLogin ? "grid-cols-2" : "flex-col"} ${
      isLogin ? "grid" : "flex"
    } gap-5 font-bold my-5`}
  >
    <a
      href=""
      className="flex items-center gap-5 bg-black rounded-md p-3 justify-center hover:bg-transparent hover:ring-1 transition-all"
    >
      <FaGithub /> Github
    </a>
    <a
      href=""
      className="flex items-center gap-5 bg-black rounded-md p-3 justify-center hover:bg-transparent hover:ring-1 transition-all"
    >
      <FcGoogle /> Google
    </a>
  </div>
);
}