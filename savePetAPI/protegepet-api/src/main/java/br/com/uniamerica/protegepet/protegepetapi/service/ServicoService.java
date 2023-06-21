package br.com.uniamerica.protegepet.protegepetapi.service;


import br.com.uniamerica.protegepet.protegepetapi.entity.Servico;
import br.com.uniamerica.protegepet.protegepetapi.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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
        this.servicoRepository.save(servico);
        return servico;
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