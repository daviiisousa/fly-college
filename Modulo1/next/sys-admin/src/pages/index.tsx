import { Banner } from "@/components/banner";
import { Category } from "@/components/category/categorySection";
import { NewsLetterSection } from "@/components/newsLetterSection";
import { ProductSection } from "@/components/product/productSection";
import { PageWrapper } from "../components/layout/pageWraper";

export default function Home() {
  return (
    <PageWrapper.Root>
      <PageWrapper.Header />
      <PageWrapper.Content>
        <Banner />
        <Category />
        <ProductSection />
        <NewsLetterSection />
      </PageWrapper.Content>
    </PageWrapper.Root>
  );
}
