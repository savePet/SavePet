package br.com.uniamerica.protegepet.protegepetapi.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tb_administradores", schema = "animalsave")
@NoArgsConstructor
public class Administrador extends AbstractEntity {


    @Getter
    @Setter
    @Column(name = "nome", nullable = false, length = 30)
    private String nome;

    @Getter
    @Setter
    @Column(name = "email", unique = true, length = 40, nullable = false)
    private String email;

    @Getter
    @Setter
    @Column(name = "senha", nullable = false, unique = true, length = 15)
    private String senha;

    @Getter
    @Setter
    @Column(name = "telefone", nullable = true, length = 9, unique = true)
    private String telefone;

    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "statusCadastro", nullable = false)
    private StatusCadastro statusCadastro;

    @Getter
    @Setter
    @OneToMany
    @JoinColumn(name = "id_evento")
    private List<Evento> eventos;
}