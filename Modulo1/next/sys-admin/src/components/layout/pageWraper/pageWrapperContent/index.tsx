interface PageWrapperContentProps {
  children: React.ReactNode;
  title?: string;
  subTitle?: string;
}

export function PageWrapperContent({
  children,
  title,
  subTitle,
}: PageWrapperContentProps) {
  return (
    <main className="container mx-auto py-5 max-sm:px-5 text-[#F1F2F3]">
      {title && subTitle && (
        <div className="mb-8 my-20">
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p className="text-sm text-gray-400">{subTitle}</p>
        </div>
      )}
      {children}
    </main>
  );
}
