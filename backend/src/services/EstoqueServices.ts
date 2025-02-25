import prismaClient from "../prisma";

interface Estoque {
    quantidade: string,
   
}

class EstoqueServices {
    async cadastro_estoque({
        quantidade,
       
    }:Estoque){
        const resposta = await prismaClient.estoque.create({
            data:{
                quantidade,
                
            }
        })
        return { dados: "Cadastro Efetuado Com Sucesso" };
    }
}
export{EstoqueServices}