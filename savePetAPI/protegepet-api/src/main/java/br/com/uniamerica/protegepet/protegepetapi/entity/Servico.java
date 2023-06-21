package br.com.uniamerica.protegepet.protegepetapi.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "tb_servicos", schema = "animalsave")
@NoArgsConstructor
public class Servico extends AbstractEntity {

    @Getter
    @Setter
    @Column(name = "nome", nullable = false, length = 40)
    private String nome;

    @Getter
    @Setter
    @Column(name = "descricao", nullable = false, length = 255)
    private String descricao;

    @Getter
    @Setter
    @Column(name = "preco", nullable = false)
    private BigDecimal preco;

    @Getter
    @Setter
    @Column(name = "quantidade")
    private BigDecimal quantidade;

    @Getter
    @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "tipoFornecedor", nullable = false)
    private TipoFornecedor tipoFornecedor;

    public Servico(String nome, String descricao, BigDecimal preco, BigDecimal quantidade, TipoFornecedor tipoFornecedor) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.quantidade = quantidade;
        this.tipoFornecedor = tipoFornecedor;
    }
}