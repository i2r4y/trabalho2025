import prismaClient from "../prisma"

interface vendasProps{
    valorTotal: string
    DataVenda : string
    
}

class VendasServices{
    async cadastrar_vendas({
        valorTotal,
        DataVenda,
       
    }:vendasProps){
        const resposta = await prismaClient.vendas.create({
            data:{
              valorTotal,
              DataVenda,
        
            }
        })
        return { dados: "Cadastro Efetuado Com Sucesso" };
    }
}
export{VendasServices}