package br.com.uniamerica.protegepet.protegepetapi.service;

import br.com.uniamerica.protegepet.protegepetapi.entity.Administrador;
import br.com.uniamerica.protegepet.protegepetapi.entity.Evento;
import br.com.uniamerica.protegepet.protegepetapi.repository.AdministradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class AdministradorService {

    @Autowired
    public AdministradorRepository administradorRepository;

    public Administrador findById(Long id) {
        return this.administradorRepository.findById(id).orElse(new Administrador());
    }

    public List<Administrador> findAll() {
        return this.administradorRepository.findByAdministradoresAtivos();
    }

    @Transactional
    public Administrador save(Administrador administrador) {
        return this.administradorRepository.save(administrador);
    }

    @Transactional
    public void atualizarObjeto(final Long id, final Administrador administrador) {
        if (id.equals(administrador.getId()) && !this.administradorRepository.findById(id).isEmpty()) {
            this.administradorRepository.save(administrador);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }

    @Transactional
    public void VincularEventoAdministrador(Long idAdministrador, Evento evento) {// Vincula um evento com um adm
        Administrador administrador = this.administradorRepository.findById(idAdministrador).orElseThrow(() -> new RuntimeException("Administrador não encontrada"));
        administrador.getEventos().add(evento);
        this.administradorRepository.save(administrador);
    }


    @Transactional
    public void deletarObjeto(final Long id) {
        if (!this.administradorRepository.findById(id).isEmpty()) {
            this.administradorRepository.deleteById(id);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }
}