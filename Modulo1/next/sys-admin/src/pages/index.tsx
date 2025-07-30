import { FormLogin } from "@/components/formLogin";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url(/images/backGroundImage.jpg)] bg-cover flex justify-center py-5 px-80">
      <FormLogin />
    </div>
  )
}