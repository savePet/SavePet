package br.com.uniamerica.protegepet.protegepetapi.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

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
    @Column(name = "preco", nullable = false)
    private BigDecimal preco;

    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "statusCadastro", nullable = false)
    private StatusCadastro statusCadastro;
}