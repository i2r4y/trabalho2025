import { ChevronLeft, Trash2 } from "lucide-react";
import AdicionarCardapio from "./AdicionarCardapio";
import { useEffect, useState } from "react";
import apiLocal from "../Api/apiLocal";

export default function ProdutosCardapio() {
  const [isOpen, setIsOpen] = useState(false);
  const [produtos, setProdutos] = useState([]);

  console.log(produtos);

  const deleteProduto = async (id) => {
    try {
      await apiLocal.delete(`/DeletarProdutos/${id}`);
      setProdutos((prevProdutos) =>
        prevProdutos.filter((produto) => produto.id !== id)
      );
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  };

  async function listarProdutos() {
    const response = await apiLocal.get("/ListarProdutos");
    setProdutos(response.data.produtos.resposta);
  }
  useEffect(() => {
    listarProdutos();
  }, []);

  return (
    <div className="p-4">
      <div className="flex mb-10 justify-between">
        <div className="flex items-center gap-2">
          <ChevronLeft />
          <h2 className="text-[#D99455] text-2xl">Produtos do Cardápio</h2>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#1F8A4A] hover:bg-[#1f8a4ad0] cursor-pointer p-3 text-xl text-white"
        >
          Novo Produto
        </button>
      </div>
      <div>
        <div className="grid grid-cols-[0.5fr_2fr_2fr_1fr_0.5fr] items-center gap-2.5 py-3 px-[15px] border border-solid border-[#cacaca]">
          <b>Imagem</b>
          <b>Nome</b>
          <b>Descrição</b>
          <b>Preço</b>
          <b>Excluir</b>
        </div>
        {produtos.map((produtos) => {
          return (
            <div
              key={produtos.id}
              className="grid grid-cols-[0.5fr_2fr_2fr_1fr_0.5fr] items-center gap-2.5 py-3 px-[15px]"
            >
              <img
                className="w-16 h-16 object-cover"
                src={`http://localhost:3333/images/${produtos.image[0].path}`}
                alt={produtos.nome}
              />

              <p>{produtos.nome}</p>
              <p>{produtos.descricao}</p>
              <p>{produtos.preco}</p>
              <div
                onClick={() => deleteProduto(produtos.id)}
                className="hover:bg-[#cacaca] w-fit p-2 rounded-full cursor-pointer"
              >
                <Trash2 />
              </div>
            </div>
          );
        })}
      </div>
      <AdicionarCardapio
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
        atualizarProdutos={listarProdutos}
      />
    </div>
  );
}
