import { Breadcrumb } from "@/components/breadCrumb";
import PageWrapper from "@/components/layout/pageWraper";
import { ProductImages } from "@/components/product/productImages";
import { ProductInfo } from "@/components/product/productInfo";
import { ProductSkeleton } from "@/components/skeletons/productSkeletons";
import { getProductMock } from "@/helpers/getProductMock";
import { ProductDetails } from "@/interfaces/productDeatails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const route = useRouter();
  const { id } = route.query;
  const [product, setProduct] = useState<ProductDetails>({} as ProductDetails);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function fetchProduct() {
      setLoading(true);
      if (id) {
        const response = getProductMock({ id: Number(id) });
        if (response) setProduct(response);
      }
      setLoading(false);
    }

    fetchProduct();
  }, [id]);

  return (
    <PageWrapper>
      {loading ? (
        <ProductSkeleton />
      ) : (
        <>
          <Breadcrumb
            items={[
              { title: product?.category },
              { title: product?.name },
              { title: "Product Details" },
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ProductImages images={product?.images} />
            <ProductInfo product={product} />
          </div>
        </>
      )}
    </PageWrapper>
  );
}
