import fotoinicial from "../assets/fotoinicial.png";
import btnHero from "../assets/btnHero.png";

export default function Hero() {
  return (
    <>
      <hr className="bg-gray-400 h-[1px] border-0" />
      <div className="text-white bg-black gap-5 flex px-20 pt-10  ">
        <div>
          <img className="w-[70%]" src={fotoinicial} alt="" />
        </div>
        <div className="flex flex-col gap-10">
          <div className="w-[50%]">
            <p className="text-5xl">
              Renovamos a tradição de fazer o melhor lanche!
            </p>
          </div>
          <div className="w-[55%]">
            <p>
              Alta qualidade nos ingredientes, tradição no preparo, inovação e
              talento na criação de sabores únicos.
            </p>
          </div>
          <button className="w-[30%] cursor-pointer">
            <img src={btnHero} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
