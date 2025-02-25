import { useContext, useState } from "react";
import logoC from "../assets/logoC.png";
import { AuthContext } from "../context/authcontext";

export default function Login() {
  const { login, verificaToken, token } = useContext(AuthContext);
  verificaToken();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  async function OutroLogin(e) {
    e.preventDefault()
    if (!email || !password) {
      alert("Preencha todos os campos");
      return;
    }
    try {
      await login( email, password );
    } catch (error) {

    }
  }


  return (
    <form onSubmit={OutroLogin} className="flex gap-5 flex-col">
      <div className="flex justify-center py-4 bg-black items-center">
        <p className="text-[#D99455] text-5xl text-center">LOGIN</p>
      </div>
      <div className="flex justify-center items-center">
        <img className="w-[20%] " src={logoC} alt="" />
      </div>
      <div className="flex justify-center items-center w-2/5 m-auto flex-col gap-5">
        <div className="flex flex-col w-full gap-1">
          <p className="text-2xl">E-mail</p>
          <input className="border p-2" type="text" placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-2xl">Senha</p>
          <input className="border p-2" type="password" placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-center w-2/5 m-auto flex-col">
        <p className="text-end">Esqueceu a Senha?</p>
      </div>
      <div>
        <button type="submit" className="bg-[#8A1F1F] text-[#D99455] text-2xl w-fit m-auto py-2 px-14 flex justify-center">
          Login
        </button>
      </div>
    </form>
  );
}
