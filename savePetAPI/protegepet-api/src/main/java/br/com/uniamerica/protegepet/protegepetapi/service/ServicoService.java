package br.com.uniamerica.protegepet.protegepetapi.service;


import br.com.uniamerica.protegepet.protegepetapi.entity.Servico;
import br.com.uniamerica.protegepet.protegepetapi.entity.TipoFornecedor;
import br.com.uniamerica.protegepet.protegepetapi.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.List;

@Service
public class ServicoService {

    @Autowired
    public ServicoRepository servicoRepository;

    public Servico findById(Long id) {
        return this.servicoRepository.findById(id).orElse(new Servico());
    }

    public List<Servico> findAll() {
        return this.servicoRepository.findByServicosAtivos();
    }

    @Transactional
    public Servico save(Servico servico) {
        validarCadastroServico(servico.getNome(), servico.getDescricao(), servico.getPreco(), servico.getQuantidade(), servico.getTipoFornecedor());
        this.servicoRepository.save(servico);
        return servico;
    }

      public void validarCadastroServico(String nome, String descricao, BigDecimal preco, BigDecimal quantidade, TipoFornecedor tipoFornecedor) {
        if (nome == null && descricao == null && preco == null && quantidade == null && tipoFornecedor == null) {
            throw new RuntimeException("Preencha os campos por favor");
        } else if (preco.compareTo(BigDecimal.ZERO) == 0 || preco.compareTo(BigDecimal.ZERO) < 0) {
            throw new RuntimeException("Defina um valor para o servico/produto por favor");
        } else {
            System.out.println("Valores do servico/produto corretos");
        }
        if (quantidade.compareTo(BigDecimal.ZERO) == 0 || quantidade.compareTo(BigDecimal.ZERO) < 0) {
            throw new RuntimeException("Defina um valor correto para a quantidade do produto");
        } else {
            System.out.println("Valor da quantidade correto");
        }
        if (!(tipoFornecedor instanceof Enum<?>)) {
            throw new RuntimeException("Defina um valor correto para o tipoFornecedor");
        } else {
            System.out.println("Valor do tipoFornecedor correto");
        }
        if (nome.length() > 30) {
            throw new RuntimeException("O nome não pode conter mais de 30 caracteres");
        } else {
            System.out.println("Quantidade de caracteres do nome estão corretos");
        }
        if (quantidade.compareTo(BigDecimal.ZERO) == 0 && preco.compareTo(BigDecimal.ZERO) == 0) {
            throw new RuntimeException("Os valores de produto e quantidade não podem ser iguais a zero");
        } else {
            System.out.println("Os valores de preco e quantidade estão corretos");
        }
        if (quantidade.compareTo(BigDecimal.ZERO) < 0 && preco.compareTo(BigDecimal.ZERO) < 0) {
            throw new RuntimeException("Os valores de produto e quantidade não podem ser menores que zero");
        } else {
            System.out.println("Os valores de preco e quantidade estão corretos");
        }
        if (!(nome instanceof String) || !(descricao instanceof String) || !(preco instanceof BigDecimal) || !(quantidade instanceof BigDecimal)) {
            throw new RuntimeException("Os tipos de valores fornecidos não são validos");
        } else {
            System.out.println("Os tipos de valores estão corretos");
        }
    }
    

    @Transactional
    public void atualizarObjeto(final Long id, final Servico servico) {
        if (id.equals(servico.getId()) && !this.servicoRepository.findById(id).isEmpty()) {
            this.servicoRepository.save(servico);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }

    @Transactional
    public void deletarObjeto(final Long id) {
        if (!this.servicoRepository.findById(id).isEmpty()) {
            this.servicoRepository.deleteById(id);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }
}