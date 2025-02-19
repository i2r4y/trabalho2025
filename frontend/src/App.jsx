import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
