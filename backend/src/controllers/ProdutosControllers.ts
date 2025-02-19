import { Request, Response } from 'express'
import { ProdutosServices } from '../services/ProdutosServices'

class ProdutosControllers {
    async cadastro_produtos(req: Request, res: Response) {
        const { nome,
            descricao, preco, dataAdicao,categoriasId, estoqueId } = req.body
        const produtosServices = new ProdutosServices()
        const resposta = await produtosServices.cadastro_produtos({
            nome,
            descricao,
            preco,
            dataAdicao,
            categoriasId,
            estoqueId
        })
        return res.json(resposta)
    }
}
export { ProdutosControllers }