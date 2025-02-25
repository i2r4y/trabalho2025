import { Request, Response } from 'express'
import {CarrinhoServices } from '../services/CarrinhoServices'

class CarrinhoControllers{
    async cadastro_carrinho(req: Request, res: Response){
        const {quantidade, precoUnitario,  produtosId, vendasId, clientesId} = req.body
        const carrinhoServices = new CarrinhoServices()
        const resposta = await carrinhoServices.cadastro_carrinho({
            quantidade, 
            precoUnitario,
            produtosId,
            vendasId,
            clientesId
        })
        return res.json(resposta)
    }
}
export{CarrinhoControllers}
