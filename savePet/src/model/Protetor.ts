import { Cor } from "./enum/Cor"
import { Especie } from "./enum/Especie"
import { Genero } from "./enum/Genero"
import { PorteFisico } from "./enum/PorteFisico"
import { Raca } from "./enum/Raca"
import { StatusCadastro } from "./enum/StatusCadastro"
import { StatusSaude } from "./enum/StatusSaude"

export interface Protetor{
    id: string,
    nome: string,
    senha: string,
    endereco: string,
    telefone: string,
    email: string,
    disponibilidadeAcolhimento: {
        id: string,
        apacidadeAcolhimento: number,
        horarioDisponivel: string,
        segunda: boolean,
        terca: boolean,
        quarta: boolean,
        quinta: boolean,
        sexta: boolean,
        sabado: boolean,
        domingo: boolean
    },
    statusCadastro: StatusCadastro,
    animals: [
        {
            id: string,
            especie: Especie,
            raca: Raca,
            genero: Genero,
            descricao: string,
            porteFisico: PorteFisico,
            cor: Cor,
            statusSaude: StatusSaude
        }
    ],
    ocorrencias: []
}