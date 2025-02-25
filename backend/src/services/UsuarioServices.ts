import prismaClient from "../prisma";
import { hash } from 'bcryptjs'

interface cadUsuarios {
    nome: string,
    email: string,
    password: string
}

interface AlterarUsuarios {
    id: string,
    nome: string,
    email: string
}

interface enderecoUsuarios {
    rua: string
    telefone: string
    numero: string
    bairro: string
    cidade: string
    cep: string
    complemento?: string
}


class UsuariosServices {
    async cadastrarUsuarios({ nome, email, password }: cadUsuarios) {

        const senhaCrypt = await hash(password, 8)
        await prismaClient.cadastrarUsuarios.create({
            data: {
                nome: nome,
                email: email,
                password: senhaCrypt,

            }
        })
        return ({ dados: 'Cadastro Efetuado Com Sucesso' })
    }

    async consultarUsuarios() {
        const resposta = await prismaClient.cadastrarUsuarios.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
            }
        })
        return resposta
    }

    async consultarUsuariosUnico(id: string) {
        const resposta = await prismaClient.cadastrarUsuarios.findFirst({
            where: {
                id: id
            },
            select: {
                nome: true,
                email: true,
                password: true
            }
        })
        return resposta
    }

    async alterarDadosUsuarios({ id, nome, email }: AlterarUsuarios) {
        await prismaClient.cadastrarUsuarios.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                email: email,

            }
        })
        return ({ dados: 'Cadastro Alterado Com Sucesso' })
    }

    async apagarUsuarios(id: string) {
        await prismaClient.cadastrarUsuarios.delete({
            where: {
                id: id
            }
        })
        return ({ dados: 'Registro Apagado com Sucesso' })
    }

    async enderecoUsuarios({ rua, telefone, bairro, cep, numero, cidade, complemento }:enderecoUsuarios ) {

        await prismaClient.endereco.create({
            data: {
                rua,
                telefone,
                bairro,
                cep,
                numero,
                cidade,
                complemento

            }
        })
        return ({ dados: 'Cadastro Efetuado Com Sucesso' })
    }
}

export { UsuariosServices }