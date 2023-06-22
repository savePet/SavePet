package br.com.uniamerica.protegepet.protegepetapi.service;

import br.com.uniamerica.protegepet.protegepetapi.entity.Animal;
import br.com.uniamerica.protegepet.protegepetapi.entity.DisponibilidadeAcolhimento;
import br.com.uniamerica.protegepet.protegepetapi.entity.Ocorrencia;
import br.com.uniamerica.protegepet.protegepetapi.entity.Protetora;
import br.com.uniamerica.protegepet.protegepetapi.entity.StatusCadastro;
import br.com.uniamerica.protegepet.protegepetapi.repository.ProtetoraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProtetoraService {

    @Autowired
    public ProtetoraRepository protetoraRepository;

    public Protetora findById(Long id) {
        return this.protetoraRepository.findById(id).orElse(new Protetora());
    }

    public List<Protetora> findAll() {
        return this.protetoraRepository.findByProtetorasAtivos();
    }

    @Transactional
    public Protetora save(Protetora protetora) {
        validarCadastroProtetora(protetora.getNome(), protetora.getSenha(), protetora.getEndereco(), protetora.getTelefone(), protetora.getEmail(), protetora.getDisponibilidadeAcolhimento(), protetora.getStatusCadastro(), protetora.getAnimals(), protetora.getOcorrencias());
        return this.protetoraRepository.save(protetora);
    }

    public void validarCadastroProtetora(String nome, String senha, String endereco, String telefone, String email, DisponibilidadeAcolhimento disponibilidadeAcolhimento, StatusCadastro statusCadastro, List<Animal> animals, List<Ocorrencia> ocorrencias) {
        if (nome == null && senha == null && endereco == null && telefone == null && email == null && disponibilidadeAcolhimento == null && statusCadastro == null && animals == null && ocorrencias == null) {
            throw new RuntimeException("Preencha os campos corretamente por favor");
        }
        if (nome.length() > 30 || senha.length() > 15 || endereco.length() > 60 || telefone.length() > 9 || email.length() > 40) {
            throw new RuntimeException("A quantidade de caracteres ultrapassou o limite permitido");
        } else {
            System.out.println("Valores do servico/produto corretos");
        }
        if (!(nome instanceof String) || !(senha instanceof String) || !(endereco instanceof String) || !(telefone instanceof String) || !(email instanceof String) || !(disponibilidadeAcolhimento instanceof DisponibilidadeAcolhimento) || !(statusCadastro instanceof Enum<?>) || !(animals instanceof ArrayList<Animal>) || !(ocorrencias instanceof ArrayList<Ocorrencia>)) {
            throw new RuntimeException("Os valores foram inseridos incorretamente, coloque os valores de acordo com o tipo do campo");
        }
    }

    @Transactional
    public void atualizarObjeto(final Long id, final Protetora protetora) {
        if (id.equals(protetora.getId()) && !this.protetoraRepository.findById(id).isEmpty()) {
            this.protetoraRepository.save(protetora);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }

    @Transactional
    public void VincularAnimalProtetora(Long idProtetora, Animal animal) {// Vincula um animal com uma protetora
        Protetora protetora = this.protetoraRepository.findById(idProtetora).orElseThrow(() -> new RuntimeException("Protetora não encontrada"));
        protetora.getAnimals().add(animal);
        this.protetoraRepository.save(protetora);
    }


    @Transactional
    public void deletarObjeto(final Long id) {
        if (!this.protetoraRepository.findById(id).isEmpty()) {
            this.protetoraRepository.deleteById(id);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }
}