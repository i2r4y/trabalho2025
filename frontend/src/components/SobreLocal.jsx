import cardapio from "../assets/cardapio.png";

export default function SobreLocal() {
  return (
    <div className="flex px-15 py-15 items-center gap-15">
      <div className="w-[135%]">
        <img className="w-full" src={cardapio} alt="" />
      </div>
      <div className="flex flex-col gap-10">
        <p className="text-[#D99455] text-5xl text-center">Sobre o local</p>
        <div className="w-[65%] m-auto text-3xl text-justify">
          A FastBurguer destaca-se pelos seus lanches preparados à mão com
          ingredientes frescos e de alta qualidade. Fundada em 2023, oferece uma
          seleção irresistível de hambúrgueres, todos feitos de forma artesanal.
          Cada lanche é uma experiência única, combinando sabores tradicionais
          com toque modernos. Um ambiente acolhedor e com dedicação ao serviço.
        </div>
      </div>
    </div>
  );
}
