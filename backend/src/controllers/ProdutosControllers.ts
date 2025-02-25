import { Request, Response } from "express";
import { ProdutosServices } from "../services/ProdutosServices";

class ProdutosControllers {
  async cadastro_produtos(req: Request, res: Response) {
    try {
      const { nome, descricao, preco } = req.body;

      const image_filename = req.files as Express.Multer.File[];

      const image = image_filename.map((file) => {
        return {
          path: file.filename,
        };
      });
      // console.log(image);

      const produtosServices = new ProdutosServices();
      const produtos = await produtosServices.cadastro_produtos({
        nome,
        descricao,
        preco,
        image,
      });

      res.status(201).json({ message: "Produto cadastrado!", produtos });
    } catch (error) {
      res.status(500).json({ error: "Erro na criação do produto" });
    }
  }

  async listar_produtos(req: Request, res: Response) {
    try {
      const produtosServices = new ProdutosServices();
      const produtos = await produtosServices.listar_produtos();
      res.status(200).json({ message: "Produtos listados!", produtos });
    } catch (error) {
      res.status(500).json({ error: "Erro na listagem de produtos" });
    }
  }

  async deletar_produtos(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const produtosServices = new ProdutosServices();
      const produtos = await produtosServices.deletar_produtos(id);
      res.status(200).json({ message: "Produto deletado!", produtos });
    } catch (error) {
      res.status(500).json({ error: "Erro na deleção de produtos" });
    }
  }
}
export { ProdutosControllers };
