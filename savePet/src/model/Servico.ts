import { TipoFornecedor } from "./enum/TipoFornecedor";

export interface Servico {
    id: string;
    nome: string;
    descricao: string ;
    preco: number;
    quantidade: number;
    tipoFornecedor: TipoFornecedor; 
}


export interface Fornecedores {
    id: string;
    nome: string;
    endereco: string,
    cnpj: string,
    telefone: string,
    email: string,
    tipoFornecedor: TipoFornecedor; 
    servicos: 
        {
        id: string,
        nome: string,
        descricao: string,
        preco: number,
        quantidade: number,
        tipoFornecedor: TipoFornecedor  
    }[]
    statusCadastro: string
}