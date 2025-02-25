import { Request, Response } from "express";
import { VendasServices } from "../services/VendasServices";

class VendasControllers{
    async cadastro_vendas(req: Request, res: Response){
        const { valorTotal, DataVenda} = req.body
        const vendasServices = new VendasServices()
        const resposta = await vendasServices.cadastrar_vendas({
            valorTotal,
            DataVenda,
           
        })
        return res.json(resposta)
    }
}

export{VendasControllers}