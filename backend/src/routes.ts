import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'

import { UsuariosControllers } from './controllers/UsuarioControllers'
import { LoginUsuariosControllers } from './controllers/LoginControllers'
import { estaAutenticado } from './middleware/estaAutenticado'
import { VendasControllers } from './controllers/VendasControllers'
import { ProdutosControllers } from './controllers/ProdutosControllers'
import { EstoqueControllers } from './controllers/EstoqueControllers'
import { CategoriaControllers } from './controllers/CategoriaControllers'
import { CarrinhoControllers } from './controllers/CarrinhoControllers'


const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))

//end point
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)
router.post('/Login', new LoginUsuariosControllers().loginUsuarios)
router.get('/VerificaToken', estaAutenticado, new LoginUsuariosControllers().verificaToken)
router.post('/CadastrarProdutos', upload.single('file'), new ProdutosControllers().cadastro_produtos)

export default router