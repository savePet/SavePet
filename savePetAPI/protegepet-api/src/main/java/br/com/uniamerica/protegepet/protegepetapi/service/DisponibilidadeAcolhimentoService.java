package br.com.uniamerica.protegepet.protegepetapi.service;


import br.com.uniamerica.protegepet.protegepetapi.entity.DisponibilidadeAcolhimento;
import br.com.uniamerica.protegepet.protegepetapi.repository.DisponibilidadeAcolhimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class DisponibilidadeAcolhimentoService {


    @Autowired
    public DisponibilidadeAcolhimentoRepository disponibilidadeAcolhimentoRepository;

    public DisponibilidadeAcolhimento findById(Long id) {
        return this.disponibilidadeAcolhimentoRepository.findById(id).orElse(new DisponibilidadeAcolhimento());
    }

    public List<DisponibilidadeAcolhimento> findAll() {
        return this.disponibilidadeAcolhimentoRepository.findByDisponibilidadeAcolhimentoAtivos();
    }

    @Transactional
    public DisponibilidadeAcolhimento save(DisponibilidadeAcolhimento disponibilidadeAcolhimento) {
        this.disponibilidadeAcolhimentoRepository.save(disponibilidadeAcolhimento);
        return disponibilidadeAcolhimento;
    }

    @Transactional
    public void atualizarObjeto(final Long id, final DisponibilidadeAcolhimento disponibilidadeAcolhimento) {
        if (id.equals(disponibilidadeAcolhimento.getId()) && !this.disponibilidadeAcolhimentoRepository.findById(id).isEmpty()) {
            this.disponibilidadeAcolhimentoRepository.save(disponibilidadeAcolhimento);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }

    @Transactional
    public void deletarObjeto(final Long id) {
        if (!this.disponibilidadeAcolhimentoRepository.findById(id).isEmpty()) {
            this.disponibilidadeAcolhimentoRepository.deleteById(id);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }
}