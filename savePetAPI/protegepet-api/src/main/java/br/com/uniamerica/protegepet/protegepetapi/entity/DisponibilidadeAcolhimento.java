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
    private Integer capacidadeAcolhimento;

    @Getter
    @Setter
    @Column(name = "horarioDisponivel", length = 30, nullable = false)
    private String horarioDisponivel;

    @Getter
    @Setter
    @Column(name = "segunda", nullable = false)
    private Boolean segunda;

    @Getter
    @Setter
    @Column(name = "terca", nullable = false)
    private Boolean terca;

    @Getter
    @Setter
    @Column(name = "quarta", nullable = false)
    private Boolean quarta;

    @Getter
    @Setter
    @Column(name = "quinta", nullable = false)
    private Boolean quinta;

    @Getter
    @Setter
    @Column(name = "sexta", nullable = false)
    private Boolean sexta;

    @Getter
    @Setter
    @Column(name = "sabado", nullable = false)
    private Boolean sabado;

    @Getter
    @Setter
    @Column(name = "domingo", nullable = false)
    private Boolean domingo;

    public DisponibilidadeAcolhimento(Integer capacidadeAcolhimento, String horarioDisponivel, Boolean segunda, Boolean terca, Boolean quarta, Boolean quinta, Boolean sexta, Boolean sabado, Boolean domingo) {
        this.capacidadeAcolhimento = capacidadeAcolhimento;
        this.horarioDisponivel = horarioDisponivel;
        this.segunda = segunda;
        this.terca = terca;
        this.quarta = quarta;
        this.quinta = quinta;
        this.sexta = sexta;
        this.sabado = sabado;
        this.domingo = domingo;
    }
}