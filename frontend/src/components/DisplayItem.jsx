import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import apiLocal from "../Api/apiLocal";

export default function DisplayItem() {
  const [produtos, setProdutos] = useState([]);

  console.log(produtos);

  useEffect(() => {
    async function listarProdutos() {
      const response = await apiLocal.get("/ListarProdutos");
      setProdutos(response.data.produtos.resposta);
    }

    listarProdutos();
  }, []);

  return (
    <div className="flex gap-20 flex-col">
      <div className="flex flex-col mt-10 items-center justify-center">
        <h2 className="text-6xl">Lanche</h2>
        <div className="w-1/6 bg-[#D99455] h-[3px]"></div>
      </div>
      <div>
        {produtos.map((item) => (
          <ProductItem
            key={item.nome}
            nome={item.nome}
            preco={item.preco}
            descricao={item.descricao}
            imagem={item.image[0].path}
          />
        ))}
      </div>
    </div>
  );
}
