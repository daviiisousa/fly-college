import { PageWrapper } from "@/components/layout/pageWraper";
import { Input } from "@/components/UI/inputs/input";
import { IconInput } from "@/components/UI/inputs/inputIcons";
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
          <div className="flex flex-col">
            <IconInput
              type="text"
              placeholder="Buscar produto"
              Icon={IoSearch}
            />
          </div>
        </div>
      </PageWrapper.Content>
    </PageWrapper.Root>
  );
}
