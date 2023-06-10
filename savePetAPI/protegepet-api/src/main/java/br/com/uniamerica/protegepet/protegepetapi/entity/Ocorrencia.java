package br.com.uniamerica.protegepet.protegepetapi.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "tb_ocorrencias", schema = "animalsave")
@NoArgsConstructor
public class Ocorrencia extends AbstractEntity {

    @Getter
    @Setter
    @Column(name = "nomeUsuario", nullable = false, length = 20)
    private String nomeUsuario;

    @Getter
    @Setter
    @Column(name = "regiao", nullable = false, length = 50)
    private String regiao;

    @Getter
    @Setter
    @Column(name = "descricao", nullable = false, length = 255)
    private String descricao;

    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "statusOcorrencia", nullable = false)
    private StatusOcorrencia statusOcorrencia;
}