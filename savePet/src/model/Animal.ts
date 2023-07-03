import { StatusSaude } from './enum/StatusSaude';
import { PorteFisico } from './enum/PorteFisico';
import { AbstractEntity } from "./AbstractEntity";
import { Especie } from "./enum/Especie";
import { Genero } from "./enum/Genero";
import { Raca } from "./enum/Raca";
import { Cor } from './enum/Cor';


export class Animal extends AbstractEntity {
    [x: string]: any
    
    especie!: Especie
    raca!: Raca
    genero!: Genero
    descricao!: string
    imagem!: string
    porteFisico!: PorteFisico
    cor!: Cor
    statusSaude!: StatusSaude
}