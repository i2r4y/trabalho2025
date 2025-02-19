import logop2 from "../assets/logop2.png";

export default function Footer() {
  return (
    <div className="bg-black flex items-center gap-40 text-white px-10">
      <div className="w-[30%]">
        <img src={logop2} alt="" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-[#D99455] text-5xl text-center">
          <p>Redes Sociais</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Instagram: @fast_burguer</p>
          <p>Facebook: FastBurguer</p>
          <p>TikTok: @fast__burguer</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-[#D99455] text-5xl text-center">
          <p>Contato</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>(14) 99828-9561</p>
          <p>fastburguer@gmail.com</p>
          <p>84051 Fabiano Marginal</p>
        </div>
      </div>
    </div>
  );
}
