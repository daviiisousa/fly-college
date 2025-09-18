import { Breadcrumb } from "@/components/breadCrumb";
import PageWrapper from "@/components/layout/pageWraper";
import { ProductImages } from "@/components/product/productImages";
import { ProductInfo } from "@/components/product/productInfo";
import { ProductSkeleton } from "@/components/skeletons/productSkeletons";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/UI/tabs/tabs";
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <ProductImages images={product?.images} />
            <ProductInfo product={product} />
          </div>
          <Tabs defaultValue="description" className="w-full">
            <TabsList>
              <TabsTrigger value="description">Descrição</TabsTrigger>
              <TabsTrigger value="details">Detalhes</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-2">
                <h3 className="text-lg font-semibold mb-4">
                  Características Principais
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-400">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="details">Detalhes do produto</TabsContent>
            <TabsContent value="reviews">Avaliações do produto</TabsContent>
          </Tabs>
        </>
      )}
    </PageWrapper>
  );
}
