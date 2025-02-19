import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoC from "../assets/logoC.png";
import apiLocal from "../Api/apiLocal";
import { toast } from 'react-toastify'

export default function CreateUser() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  console.log(nome, email, password)


  async function OutroLogin(e) {
    e.preventDefault()
    if (!nome || !email || !password) {
      alert("Preencha todos os campos");
      return;
    }
    try {
      await apiLocal.post('/CadastrarUsuarios', {
        nome,
        email,
        password,
    })
    toast.success('Cadastro Efetuado Com Sucesso', {
        toastId: 'ToastId'
    })
    navigateTo('/')
    } catch (error) {

    }
  }

  return (
    <form onSubmit={OutroLogin} className="flex gap-5 flex-col">
      <div className="flex justify-center py-4 bg-black items-center">
        <p className="text-[#D99455] text-5xl text-center">CRIAR UMA CONTA</p>
      </div>
      <div className="flex justify-center items-center">
        <img className="w-[15%] " src={logoC} alt="" />
      </div>
      <div className="flex justify-center items-center w-2/5 m-auto flex-col gap-5">
        <div className="flex flex-col w-full gap-1">
          <p className="text-2xl">Nome</p>
          <input value={nome} onChange={(e) => setNome(e.target.value)} className="border p-2" type="text" placeholder="E-mail" />
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-2xl">E-mail</p>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2" type="text" placeholder="Senha" />
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-2xl">Senha</p>
          <input value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2" type="password" placeholder="E-mail" />
        </div>
      </div>
      <div className="flex justify-center w-2/5 m-auto flex-col">
        <p className="text-end">Esqueceu a Senha?</p>
      </div>
      <div>
        <button type="submit" className="bg-[#8A1F1F] text-[#D99455] text-2xl w-fit m-auto py-2 px-14 flex justify-center">
          Criar Conta
        </button>
      </div>
    </form>
  );
}
