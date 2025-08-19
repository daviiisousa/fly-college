import { Header } from "../layout/header";

type PageWrapperProps = {
  children: React.ReactNode;
  header?: boolean;
};

export default function PageWrapper({
  children,
  header = true,
}: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      {header && <Header />}
      <main className="container mx-auto py-5 max-sm:px-5 text-[#F1F2F3]">
        {children}
      </main>
    </div>
  );
}
