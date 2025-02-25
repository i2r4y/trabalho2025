import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";

import { UsuariosControllers } from "./controllers/UsuarioControllers";
import { LoginUsuariosControllers } from "./controllers/LoginControllers";
import { estaAutenticado } from "./middleware/estaAutenticado";
import { ProdutosControllers } from "./controllers/ProdutosControllers";

const router = Router();
const uploads = multer(uploadConfig);

//end point
router.post("/CadastrarUsuarios", new UsuariosControllers().cadastrarUsuarios);
router.post("/Login", new LoginUsuariosControllers().loginUsuarios);
router.get(
  "/VerificaToken",
  estaAutenticado,
  new LoginUsuariosControllers().verificaToken
);
router.post(
  "/CadastrarProdutos",
  uploads.array("image"),
  new ProdutosControllers().cadastro_produtos
);
router.get("/ListarProdutos", new ProdutosControllers().listar_produtos);
router.delete(
  "/DeletarProdutos/:id",
  new ProdutosControllers().deletar_produtos
);

router.post("/CadastroEndereco", new UsuariosControllers().enderecoUsuarios);
export default router;
