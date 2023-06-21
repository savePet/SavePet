package br.com.uniamerica.protegepet.protegepetapi.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "tb_eventos", schema = "animalsave")
@NoArgsConstructor
public class Evento extends AbstractEntity {

    @Getter
    @Setter
    @Column(name = "nome", nullable = false, length = 20)
    private String nome;

    @Getter
    @Setter
    @Column(name = "descricao", nullable = false, length = 255)
    private String descricao;

    @Getter
    @Setter
    @Column(name = "endereco", nullable = false, unique = true, length = 60)
    private String endereco;

    @Getter
    @Setter
    @Column(name = "dataInicio", nullable = false)
    private LocalDate dataInicio;

    @Getter
    @Setter
    @Column(name = "dataTermino", nullable = false)
    private LocalDate dataTermino;

    @Getter
    @Setter
    @Column(name = "horarioInicio", nullable = false)
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime horarioInicio;

    @Getter
    @Setter
    @Column(name = "horarioTermino", nullable = false)
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime horarioTermino;

    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "tipoEvento", nullable = false)
    private TipoEvento tipoEvento;

     public Evento(String nome, String descricao, String endereco, LocalDate dataInicio, LocalDate dataTermino, LocalTime horarioInicio, LocalTime horarioTermino, TipoEvento tipoEvento) {
        this.nome = nome;
        this.descricao = descricao;
        this.endereco = endereco;
        this.dataInicio = dataInicio;
        this.dataTermino = dataTermino;
        this.horarioInicio = horarioInicio;
        this.horarioTermino = horarioTermino;
        this.tipoEvento = tipoEvento;
    }
}