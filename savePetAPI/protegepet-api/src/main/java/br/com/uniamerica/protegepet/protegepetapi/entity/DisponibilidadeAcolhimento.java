package br.com.uniamerica.protegepet.protegepetapi.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_disponibilidadesAcolhimentos", schema = "animalsave")
@NoArgsConstructor
public class DisponibilidadeAcolhimento extends AbstractEntity {


    @Getter
    @Setter
    @Column(name = "capacidadeAcolhimento", nullable = false)
    private int capacidadeAcolhimento;

    @Getter
    @Setter
    @Column(name = "horarioDisponivel", length = 30, nullable = false)
    private String horarioDisponivel;

    @Getter
    @Setter
    @Column(name = "segunda", nullable = false)
    private boolean segunda;

    @Getter
    @Setter
    @Column(name = "terca", nullable = false)
    private boolean terca;

    @Getter
    @Setter
    @Column(name = "quarta", nullable = false)
    private boolean quarta;

    @Getter
    @Setter
    @Column(name = "quinta", nullable = false)
    private boolean quinta;

    @Getter
    @Setter
    @Column(name = "sexta", nullable = false)
    private boolean sexta;

    @Getter
    @Setter
    @Column(name = "sabado", nullable = false)
    private boolean sabado;

    @Getter
    @Setter
    @Column(name = "domingo", nullable = false)
    private boolean domingo;
}