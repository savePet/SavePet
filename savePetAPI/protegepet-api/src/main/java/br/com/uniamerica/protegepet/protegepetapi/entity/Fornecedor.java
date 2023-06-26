package br.com.uniamerica.protegepet.protegepetapi.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_fornecedores", schema = "animalsave")
@NoArgsConstructor
public class Fornecedor extends AbstractEntity {

    @Getter
    @Setter
    @Column(name = "nome", nullable = false, length = 40)
    private String nome;

    @Getter
    @Setter
    @Column(name = "senha", nullable = false, length = 15, unique = true)
    private String senha;

    @Getter
    @Setter
    @Column(name = "endereco", nullable = false, unique = true, length = 60)
    private String endereco;

    @Getter
    @Setter
    @Column(name = "cnpj", nullable = false, unique = true, length = 14)
    private String cnpj;

    @Getter
    @Setter
    @Column(name = "telefone", nullable = false, length = 9, unique = true)
    private String telefone;

    @Getter
    @Setter
    @Column(name = "email", unique = true, length = 40, nullable = false)
    private String email;

    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "tipoFornecedor", nullable = false)
    private TipoFornecedor tipoFornecedor;

    @Getter
    @Setter
    @JoinColumn(name = "id_servicos")
    @OneToMany
    private List<Servico> servicos;

    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "statusCadastro", nullable = false)
    private StatusCadastro statusCadastro;

    public Fornecedor(String nome,  String senha,  String endereco, String cnpj, String telefone, String email, TipoFornecedor tipoFornecedor, List<Servico> servicos, StatusCadastro statusCadastro) {
        this.nome = nome;
        this.senha = senha;
        this.endereco = endereco;
        this.cnpj = cnpj;
        this.telefone = telefone;
        this.email = email;
        this.tipoFornecedor = tipoFornecedor;
        this.servicos = new ArrayList<>();
        this.statusCadastro = statusCadastro;
    }
}