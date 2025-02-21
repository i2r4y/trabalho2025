import prismaClient from "../prisma";

interface ProdutosCliente {
    nome: string,
    descricao: string,
    preco: string,
    banner: string,
}

class ProdutosServices {
    async cadastro_produtos({
        nome,
        descricao,
        preco,
        banner,


    }: ProdutosCliente) {
        const resposta = await prismaClient.produtos.create({
            data: {
                nome,
                descricao,
                preco,
                banner,


            }
        })
        return { dados: "Cadastro Efetuado Com Sucesso" };
    }
}
export { ProdutosServices }