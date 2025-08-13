import { AuthForm } from "@/components/authForm";

export default function Register() {
  return (
    <div className="min-h-screen bg-[url(/images/backGroundImage.jpg)] bg-cover flex justify-center items-center">
      <AuthForm type="register" className="w-full max-w-md my-5" />
    </div>
  );
}
