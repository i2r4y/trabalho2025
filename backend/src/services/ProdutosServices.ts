import prismaClient from "../prisma";
 
interface ProdutosCliente {
    nome: string,
    descricao: string,
    preco: string,
    dataAdicao: string,
    categoriasId: string,
    estoqueId: string
}

class ProdutosServices{
    async cadastro_produtos({
        nome,
        descricao,
        preco,
        dataAdicao,
        categoriasId,
        estoqueId
    }:ProdutosCliente){
        const resposta = await prismaClient.produtos.create({
            data:{
                nome,
                descricao,
                preco,
                dataAdicao,
                categoriasId,
                estoqueId
            }
        })
        return { dados: "Cadastro Efetuado Com Sucesso" };
    }
}
export {ProdutosServices}