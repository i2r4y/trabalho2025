import ifood from "../assets/ifood.png";

export default function BannerFooter() {
  return (
    <div className="flex px-20 py-10 items-center gap-10">
      <div className="w-[40%]">
        <img className="w-full" src={ifood} alt="" />
      </div>
      <div className="flex flex-col gap-10">
        <p className="text-[#D99455] text-5xl text-center">
          Para comer em casa
        </p>
        <div className="w-[65%] m-auto text-4xl text-justify">
          Quer receber na sua casa? Você pode optar pelo iFood. Não esqueça de
          consultar as taxas e disponibilidade na sua região.
        </div>
      </div>
    </div>
  );
}
