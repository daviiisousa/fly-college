import { Banner } from "@/components/banner";
import { Category } from "@/components/category/categorySection";
import PageWrapper from "@/components/layout/pageWraper";
import { NewsLetterSection } from "@/components/newsLetterSection";
import { ProductSection } from "@/components/product/productSection";

export default function Home() {
  return (
    <PageWrapper>
      <Banner />
      <Category />
      <ProductSection />
      <NewsLetterSection />
    </PageWrapper>
  );
}
