package br.com.uniamerica.protegepet.protegepetapi.service;


import br.com.uniamerica.protegepet.protegepetapi.entity.Evento;
import br.com.uniamerica.protegepet.protegepetapi.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class EventoService {

    @Autowired
    public EventoRepository eventoRepository;

    public Evento findById(Long id) {
        return this.eventoRepository.findById(id).orElse(new Evento());
    }

    public List<Evento> findAll() {
        return this.eventoRepository.findByEventosAtivos();
    }

    @Transactional
    public Evento save(Evento evento) {
        this.eventoRepository.save(evento);
        return evento;
    }

    @Transactional
    public void atualizarObjeto(final Long id, final Evento evento) {
        if (id.equals(evento.getId()) && !this.eventoRepository.findById(id).isEmpty()) {
            this.eventoRepository.save(evento);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }

    @Transactional
    public void deletarObjeto(final Long id) {
        if (!this.eventoRepository.findById(id).isEmpty()) {
            this.eventoRepository.deleteById(id);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }
}