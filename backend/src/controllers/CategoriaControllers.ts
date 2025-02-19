import { Request, Response } from 'express'
import { CategoriaServices } from '../services/CategoriaServices'

class CategoriaControllers{
    async cadastro_categoria(req: Request, res: Response){
        const {nomeCategoria} = req.body
        const categoriaServices = new CategoriaServices()
        const resposta = await categoriaServices.cadastro_categoria({
            nomeCategoria
        })
        return res.json(resposta)
    }
}
export{CategoriaControllers}