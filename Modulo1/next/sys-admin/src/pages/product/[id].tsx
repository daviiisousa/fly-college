import { Breadcrumb } from "@/components/breadcrumb";
import PageWrapper from "@/components/layout/pageWraper";
import { getProductMock } from "@/helpers/getProductMock";
import { ProductDetails } from "@/interfaces/productDeatails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const route = useRouter();
  const { id } = route.query;
  const [product, setProduct] = useState<ProductDetails | null>(
    {} as ProductDetails
  );

  useEffect(() => {
    function fetchProduct() {
      const response = getProductMock({ id: Number(id) });
      if (response) setProduct(response);
    }
    fetchProduct();
  }, [id]);

  return (
    <PageWrapper>
      <Breadcrumb
        items={[
          { title: "Home" },
          { title: "Products" },
          { title: "Product Details" },
        ]}
      />
    </PageWrapper>
  );
}
