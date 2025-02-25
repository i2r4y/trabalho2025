import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";
import Cardapio from "./pages/Cardapio";
import AddProdutos from "./pages/AddProdutos";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/addProdutos" element={<AddProdutos />} />
        <Route path="/endereco" element={<Endereco />} />
      </Routes>
    </div>
  );
}

export default App;
