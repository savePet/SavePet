package br.com.uniamerica.protegepet.protegepetapi.service;

import br.com.uniamerica.protegepet.protegepetapi.entity.Fornecedor;
import br.com.uniamerica.protegepet.protegepetapi.repository.FornecedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class FornecedorService {

    @Autowired
    public FornecedorRepository fornecedorRepository;


    public Fornecedor findById(Long id) {
        return this.fornecedorRepository.findById(id).orElse(new Fornecedor());
    }

    public List<Fornecedor> findAll() {
        return this.fornecedorRepository.findByForncedoresAtivos();
    }

    @Transactional
    public Fornecedor save(Fornecedor fornecedor) {
        return this.fornecedorRepository.save(fornecedor);
    }

    @Transactional
    public void atualizarObjeto(final Long id, final Fornecedor fornecedor) {
        if (id.equals(fornecedor.getId()) && !this.fornecedorRepository.findById(id).isEmpty()) {
            this.fornecedorRepository.save(fornecedor);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }

    @Transactional
    public void deletarObjeto(final Long id) {
        if (!this.fornecedorRepository.findById(id).isEmpty()) {
            this.fornecedorRepository.deleteById(id);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }
}