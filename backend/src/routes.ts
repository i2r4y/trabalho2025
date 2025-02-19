import { Router } from 'express'

import { UsuariosControllers } from './controllers/UsuarioControllers'
import { LoginUsuariosControllers } from './controllers/LoginControllers'
import { estaAutenticado } from './middleware/estaAutenticado'
import { VendasControllers } from './controllers/VendasControllers'
import { ProdutosControllers } from './controllers/ProdutosControllers'
import { EstoqueControllers } from './controllers/EstoqueControllers'
import { CategoriaControllers } from './controllers/CategoriaControllers'
import { CarrinhoControllers } from './controllers/CarrinhoControllers'


const router = Router()

//end point
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)
router.post('/Login', new LoginUsuariosControllers().loginUsuarios)
router.get('/VerificaToken', estaAutenticado, new LoginUsuariosControllers().verificaToken)

export default router