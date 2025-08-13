import { AuthForm } from "@/components/authForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url(/images/backGroundImage.jpg)] bg-cover flex justify-center items-center">
      <AuthForm />
    </div>
  );
}
