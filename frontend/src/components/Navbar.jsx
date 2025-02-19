import logoB from "../assets/logoB.png";

export default function Navbar() {
  return (
    <div className="bg-black text-white flex items-center justify-between px-20 py-2">
      <div className="w-14">
        <img src={logoB} alt="" />
      </div>
      <div>
        <ul className="flex gap-4">
          <li>Espaço</li>
          <li>Delivery</li>
          <li>Contato</li>
        </ul>
      </div>
      <a href="/login">
        <button className="bg-white text-black px-10 py-1 rounded-3xl cursor-pointer">
          Login
        </button>
      </a>
    </div>
  );
}
