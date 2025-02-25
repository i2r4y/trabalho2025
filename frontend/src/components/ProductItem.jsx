export default function ProductItem({ nome, preco, descricao, imagem }) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-3 items-center mx-20 my-3">
        <div className="w-40 h-40 flex-shrink-0 relative overflow-hidden">
          <div className="pt-[100%]"></div>
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={`http://localhost:3333/images/${imagem}`}
            alt={nome}
          />
        </div>

        <div className="flex-1">
          <div className="flex gap-2">
            <h2 className="text-2xl text-[#D99455]">{nome}</h2>
            <p className="text-2xl">{preco}</p>
          </div>
          <div className="w-1/2">
            <p className="text-2xl">{descricao}</p>
          </div>
        </div>
      </div>
      <div className="mx-10 bg-[#D99455] h-[3px]"></div>
    </div>
  );
}
