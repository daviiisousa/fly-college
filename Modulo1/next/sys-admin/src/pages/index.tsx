import { Banner } from "@/components/banner";
import { Category } from "@/components/category/categorySection";
import PageWrapper from "@/components/layout/pageWraper";
import { NewsLetterSection } from "@/components/newsLetterSection";
import { ProductSection } from "@/components/product/productSection";

export default function Home() {
  return (
    <PageWrapper>
      <Banner
        title="Ofertas Especiais"
        description="Descubra produtos incríveis com até 70% de desconto. Promoções por tempo limitado!"
        buttonText="Ver Ofertas"
      />
      <Category />
      <ProductSection />
      <NewsLetterSection />
    </PageWrapper>
  );
}
