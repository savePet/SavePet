package br.com.uniamerica.protegepet.protegepetapi.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_protetoras", schema = "animalsave")
@NoArgsConstructor
public class Protetora extends AbstractEntity {


    @Getter
    @Setter
    @Column(name = "nome", nullable = false, length = 30)
    private String nome;

    @Getter
    @Setter
    @Column(name = "senha", nullable = false, unique = true, length = 15)
    private String senha;

    @Getter
    @Setter
    @Column(name = "endereco", nullable = false, unique = true, length = 60)
    private String endereco;

    @Getter
    @Setter
    @Column(name = "telefone", unique = true, nullable = false, length = 9)
    private String telefone;

    @Getter
    @Setter
    @Column(name = "email", unique = true, length = 40, nullable = false)
    private String email;

    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "id_disponibilidadeAcolhimento")
    private DisponibilidadeAcolhimento disponibilidadeAcolhimento;

    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "statusCadastro", nullable = false)
    private StatusCadastro statusCadastro;

    @Getter
    @Setter
    @OneToMany
    @JoinColumn(name = "id_animal")
    private List<Animal> animals;

    @Getter
    @Setter
    @OneToMany
    @JoinColumn(name = "id_ocorrencia")
    private List<Ocorrencia> ocorrencias;

      public Protetora(String nome, String senha, String endereco, String telefone, String email, DisponibilidadeAcolhimento disponibilidadeAcolhimento, StatusCadastro statusCadastro, List<Animal> animals, List<Ocorrencia> ocorrencias) {
        this.nome = nome;
        this.senha = senha;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.disponibilidadeAcolhimento = disponibilidadeAcolhimento;
        this.statusCadastro = statusCadastro;
        this.animals = new ArrayList<>();
        this.ocorrencias = new ArrayList<>();
    }
}