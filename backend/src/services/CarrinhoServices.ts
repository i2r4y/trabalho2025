import prismaClient from "../prisma";

interface CarrinhoCliente {
    quantidade: string,
    precoUnitario: string,
    produtosId: string,
    vendasId: string
    clientesId: string
}

class CarrinhoServices {
    async cadastro_carrinho({
        quantidade,
        precoUnitario,
        produtosId,
        vendasId,
        clientesId
    }:CarrinhoCliente){
        const resposta = await prismaClient.carrinho.create({
            data:{
                quantidade,
                precoUnitario,
                produtosId,
                vendasId,
                clientesId
            }
        })
        return { dados: "Cadastro Efetuado Com Sucesso" };
    }
}
export {CarrinhoServices}