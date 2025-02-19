import { Request, Response } from 'express'
import { EstoqueServices } from '../services/EstoqueServices'

class EstoqueControllers{
    async cadastro_estoque(req: Request, res: Response){
        const {quantidade} = req.body
        const estoqueServices = new EstoqueServices()
        const resposta = await estoqueServices.cadastro_estoque({
            quantidade
        })
        return res.json(resposta)
    }
}
export{EstoqueControllers}