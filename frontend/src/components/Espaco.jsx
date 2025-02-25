import local1 from "../assets/local1.jpg";
import local2 from "../assets/local2.png";
import local3 from "../assets/local3.png";

export default function Espaco() {
  return (
    <div className="flex flex-col gap-10 items-center py-10">
      <div className="text-[#D99455] text-5xl text-center">
        <p>Espaço</p>
      </div>
      <div className="text-3xl text-justify w-[60%] m-auto">
        <p>
          Um ambiente de alto padrão, todo feito para você ter a melhor
          experiência durante seu momento. Preparamos todos seus sentidos para
          uma experiência repleta de aromas e sabores através do nosso clima
          aconchegante, conforto e texturas que só a FastBurguer pode oferecer.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="w-full ">
          <img className="m-auto" src={local1} alt="" />
        </div>
        <div className="flex items-center gap-10 justify-center">
          <div className="w-[25%]">
            <img className="" src={local2} alt="" />
          </div>
          <div className="w-[25%]">
            <img className="" src={local3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
