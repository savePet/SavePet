package br.com.uniamerica.protegepet.protegepetapi.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;

@Entity
@Table(name = "tb_animais", schema = "animalsave")
@NoArgsConstructor
public class Animal extends AbstractEntity {

    @Getter
    @Setter
    @Column(name = "especie", nullable = false)
    @Enumerated(EnumType.STRING)
    private Especie especie;

    @Getter
    @Setter
    @Column(name = "raca", nullable = false)
    @Enumerated(EnumType.STRING)
    private Raca raca;

    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "genero", nullable = false)
    private Genero genero;

    @Getter
    @Setter
    @Column(name = "descricao", nullable = false, length = 255)
    private String descricao;

    @Getter
    @Setter
    @Column(name = "imagem", nullable = false)
    private String imagem;

    @Getter
    @Setter
    @Column(name = "porteFisico", nullable = false)
    @Enumerated(EnumType.STRING)
    private PorteFisico porteFisico;

    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "cor", nullable = false)
    private Cor cor;

    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "statusSaude", nullable = false)
    private StatusSaude statusSaude;

     public Animal(Especie especie, Raca raca, Genero genero, String descricao, PorteFisico porteFisico, Cor cor, StatusSaude statusSaude, String imagem) {
        this.especie = especie;
        this.raca = raca;
        this.genero = genero;
        this.descricao = descricao;
        this.porteFisico = porteFisico;
        this.cor = cor;
        this.statusSaude = statusSaude;
        this.imagem = imagem;
    }
}