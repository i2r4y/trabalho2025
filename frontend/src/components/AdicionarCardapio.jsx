import { useState } from "react";
import { X } from "lucide-react";
import apiLocal from "../Api/apiLocal";
import { toast } from "react-toastify";

const MODAL_STYLES = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
};

export default function AdicionarCardapio({
  isOpen,
  setIsOpen,
  atualizarProdutos,
}) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  async function cadastrarProduto(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("preco", preco);
    formData.append("descricao", descricao);
    formData.append("image", file);

    try {
      const response = await apiLocal.post("/CadastrarProdutos", formData);
      toast.success("Produto cadastrado com sucesso!", response.data);

      setIsOpen(false);

      atualizarProdutos();
    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar o produto.");
    }
  }

  if (isOpen) {
    return (
      <form
        onSubmit={cadastrarProduto}
        className="fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-50"
      >
        <div style={MODAL_STYLES} className="max-w-[500px] w-full bg-white p-5">
          <div className="flex justify-between items-center">
            <p className="text-[#D99455] text-lg font-semibold">
              Adicionar ao cardápio
            </p>
            <div
              className="cursor-pointer p-2 rounded-full transition ease-in-out hover:bg-black/20"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </div>
          </div>
          <hr />
          <div className="mt-4">
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-[#D99455]"
            />
          </div>
          {preview && (
            <div className="mt-4 flex flex-col items-center">
              <img
                src={preview}
                alt="Preview"
                className="w-[200px] h-auto object-cover rounded-md"
              />
            </div>
          )}
          <hr className="my-4" />
          <div className="mt-10 flex flex-col gap-5">
            <div className="flex flex-col gap-1 w-fit">
              <label>Nome do Produto</label>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="border p-1"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 w-fit">
              <label>Preço do Produto</label>
              <input
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                className="border p-1"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 w-fit">
              <label>Descrição do Produto</label>
              <input
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="border p-1"
                type="text"
              />
            </div>
          </div>
          <hr className="mt-10 mb-4" />
          <button
            type="submit"
            className="bg-[#1F8A4A] hover:bg-[#1f8a4ad0] cursor-pointer text-white p-3 rounded-md w-full"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
  return null;
}
