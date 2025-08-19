import { Banner } from "@/components/banner";
import { Category } from "@/components/category";
import PageWrapper from "@/components/layout/pageWraper";
import { ProductCard } from "@/components/productCard";

export default function Home() {
  return (
    <PageWrapper>
      <Banner />
      <Category />
      <ProductCard />
    </PageWrapper>
  );
}
