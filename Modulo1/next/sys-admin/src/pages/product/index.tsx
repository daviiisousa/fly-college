import { AsideFilters } from "@/components/asideFilters";
import { PageWrapper } from "@/components/layout/pageWraper";
import { ProductSection } from "@/components/product/productSection";
import { IconInput } from "@/components/UI/inputs/inputIcons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/UI/select";
import { SelectTrigger } from "@radix-ui/react-select";
import { IoSearch } from "react-icons/io5";

export default function ProductPage() {
  return (
    <PageWrapper.Root>
      <PageWrapper.Header />
      <PageWrapper.Content
        title="Todos os Produtos"
        subTitle="Veja todos os produtos disponíveis na nossa loja"
      >
        <div className="mb-8 space-y-4">
          <div className="flex items-center w-full gap-4">
            <IconInput
              className="!mb-0"
              type="text"
              placeholder="Buscar produto"
              Icon={IoSearch}
            />

            <Select>
              <SelectTrigger className="w-48 py-3 rounded-xl border border-slate-800">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nome A-Z</SelectItem>
                <SelectItem value="price-low">Menor preço</SelectItem>
                <SelectItem value="price-high">Maior preço</SelectItem>
                <SelectItem value="rating">Melhor avaliação</SelectItem>
                <SelectItem value="reviews">Mais avaliados</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-8">
          <AsideFilters />
          <ProductSection />
        </div>
      </PageWrapper.Content>
    </PageWrapper.Root>
  );
}
