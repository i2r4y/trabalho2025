import prismaClient from "../prisma";

interface ProdutosCliente {
  nome: string;
  descricao: string;
  preco: string;
  image: { path: string }[];
}

class ProdutosServices {
  async cadastro_produtos({ nome, descricao, preco, image }: ProdutosCliente) {
    const resposta = await prismaClient.produtos.create({
      data: {
        nome,
        descricao,
        preco,
        image: {
          create: image,
        },
      },
    });
    return { dados: "Cadastro Efetuado Com Sucesso", resposta };
  }

  async listar_produtos() {
    const resposta = await prismaClient.produtos.findMany({
      include: {
        image: true,
      },
    });
    return { dados: "Listagem Efetuada Com Sucesso", resposta };
  }

  async deletar_produtos(id: string) {
    const resposta = await prismaClient.produtos.delete({
      where: {
        id,
      },
    });
    return { dados: "Deletado Com Sucesso", resposta };
  }
}
export { ProdutosServices };
