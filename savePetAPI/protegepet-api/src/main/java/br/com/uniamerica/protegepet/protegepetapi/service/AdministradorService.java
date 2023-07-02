package br.com.uniamerica.protegepet.protegepetapi.service;

import br.com.uniamerica.protegepet.protegepetapi.entity.Administrador;
import br.com.uniamerica.protegepet.protegepetapi.entity.Evento;
import br.com.uniamerica.protegepet.protegepetapi.entity.StatusCadastro;
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
        validarCadastroAdministrador(administrador.getNome(), administrador.getEmail(), administrador.getSenha(), administrador.getTelefone(), administrador.getStatusCadastro(), administrador.getEventos());
        return this.administradorRepository.save(administrador);
    }

    public void validarCadastroAdministrador(String nome, String email, String senha, String telefone, StatusCadastro statusCadastro, List<Evento> eventos) {
        if (nome == null && email == null && senha == null && telefone == null) {
            throw new RuntimeException("Preencha os campos corretamente por favor");
        } else if (!(nome instanceof String) || !(email instanceof String) || !(telefone instanceof String) || !(senha instanceof String)) {
            throw new RuntimeException("Preencha os campos de acordo com o tipo por favor");
        } else if (nome.length() > 30 || email.length() > 40 || senha.length() > 15 || telefone.length() > 9) {
            throw new RuntimeException("Limite de caracteres excedido");
        } else {
            System.out.println("Dados corretos");
        }
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