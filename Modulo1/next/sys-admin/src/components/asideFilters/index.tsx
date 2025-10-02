import { formatCurrency } from "@/helpers/formatCurrency";
import { Button } from "../UI/buttons/button";
import { Slider } from "../UI/slider";

export function AsideFilters() {
  const categories = [
    { id: 1, name: "Eletrônicos" },
    { id: 2, name: "Roupas" },
    { id: 3, name: "Livros" },
    { id: 4, name: "Móveis" },
    { id: 5, name: "Brinquedos" },
    { id: 6, name: "Esportes" },
    { id: 7, name: "Beleza" },
  ];
  return (
    <aside className="w-80 shrink-0">
      <div className="rounded-lg border p-6 border-slate-800 w-full">
        <div>
          <h3 className="text-lg font-semibold mb-6">Filtros</h3>
        </div>
        <div className="space-y-6 ">
          <div>
            <h3 className="font-semibold mb-2">Categorias</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id}>
                  <Button
                    theme="ghost"
                    className={`!my-0 w-full flex justify-start h-[40px] text-sm pl-6 ${
                      category.id === 1 && "!bg-blue-500"
                    }`}
                    key={category.id}
                  >
                    {category.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-3">Faixa de preço</h3>
            <div className="space-y-4">
              <Slider max={20000} step={100} className="!w-full" />
              <div className="flex justify-between text-sm">
                <span>{formatCurrency(0)}</span>
                <span>{formatCurrency(20000)}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-3">Avaliação Mínima</h3>
            <div className="space-y-2">
              {[0, 3, 4, 4.5].map((rating) => (
                <Button
                  theme="ghost"
                  className={`!my-0 w-full flex justify-start h-[40px] text-sm pl-6 ${
                    rating === 0 ? "!bg-blue-500" : ""
                  }`}
                  key={rating}
                >
                  {rating === 0 ? "Todos" : `${rating} Estrelas`}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
