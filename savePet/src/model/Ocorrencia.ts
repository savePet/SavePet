import { StatusOcorrencia } from "./enum/StatusOcorrencia";

export interface Ocorrencias {
    id: string,
    nomeUsuario: string,
    regiao: string,
    descricao: string,
    statusOcorrencia: StatusOcorrencia
}
