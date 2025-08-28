import { productsDetailsMocks } from "@/mocks/mockProductsDatails";

export function getProductMock({ id }: { id: number }) {
  return productsDetailsMocks.find((product) => product.id === id);
}
