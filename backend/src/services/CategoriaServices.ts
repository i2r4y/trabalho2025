import prismaClient from "../prisma";

interface CategoriaCliente {

    nomeCategoria: string,
  
}

class CategoriaServices {
    async cadastro_categoria({
        nomeCategoria,
      
    }:CategoriaCliente){
        const resposta = await prismaClient.categorias.create({
            data:{
                nomeCategoria  
            }
        })
        return { dados: "Cadastro Efetuado Com Sucesso" };
    }
}
export {CategoriaServices}