import { bgGradient } from "@/utils/util";
import { Button } from "./UI/button";
import { FaArrowRight } from "react-icons/fa6";

interface BannerProps {
  title: string;
  description?: string;
  buttonText?: string;
  className?: string;
  Input?: React.ReactNode;
}

export function Banner({
  title,
  description,
  buttonText,
  Input,
  className,
}: BannerProps) {
  return (
    <div
      className={`w-full p-10 mt-[70px] rounded-2xl ${bgGradient} space-y-5 my-5 text-white`}
    >
      <h2 className="font-bold text-3xl">{title}</h2>
      <p className="text-[18px]">{description}</p>
      <div className={className}>
        {Input}
        <Button
          theme="info"
          className="!w-fit px-5  flex items-center justify-center gap-3 max-md:!w-full"
        >
          {buttonText}
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}
