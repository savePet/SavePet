package br.com.uniamerica.protegepet.protegepetapi.service;

import br.com.uniamerica.protegepet.protegepetapi.entity.Animal;
import br.com.uniamerica.protegepet.protegepetapi.entity.Protetora;
import br.com.uniamerica.protegepet.protegepetapi.repository.ProtetoraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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
        return this.protetoraRepository.save(protetora);
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