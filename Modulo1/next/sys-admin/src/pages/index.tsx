import { Banner } from "@/components/banner";
import { Category } from "@/components/category/category";
import PageWrapper from "@/components/layout/pageWraper";
import { ProductSection } from "@/components/product/productSection";

export default function Home() {
  return (
    <PageWrapper>
      <Banner />
      <Category />
      <ProductSection />
    </PageWrapper>
  );
}
