import { Request, Response } from 'express'
import { ProdutosServices } from '../services/ProdutosServices'

class ProdutosControllers {
    async cadastro_produtos(req: Request, res: Response) {
        const { nome, descricao, preco } = req.body
        console.log(nome, descricao, preco)
        if (!req.file) {
            throw new Error("Banner não encontrado")
        } else {
            const { originalname, filename: banner } = req.file
            console.log(req.file)
            const produtosServices = new ProdutosServices()
            const resposta = await produtosServices.cadastro_produtos({
                nome,
                descricao,
                preco,
                banner
            })
            return res.json(resposta)
        }
    }
}
export { ProdutosControllers }