package br.com.uniamerica.protegepet.protegepetapi.service;

import br.com.uniamerica.protegepet.protegepetapi.entity.Animal;
import br.com.uniamerica.protegepet.protegepetapi.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class AnimalService {

    @Autowired
    public AnimalRepository animalRepository;

    public Animal findById(Long id) {
        return this.animalRepository.findById(id).orElse(new Animal());
    }

    public List<Animal> findAll() {
        return this.animalRepository.findByAnimalAtivos();
    }

    @Transactional
    public Animal save(Animal animal) {
        this.animalRepository.save(animal);
        return animal;
    }

    @Transactional
    public void atualizarObjeto(final Long id, final Animal animal) {
        if (id.equals(animal.getId()) && !this.animalRepository.findById(id).isEmpty()) {
            this.animalRepository.save(animal);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }

    @Transactional
    public void deletarObjeto(final Long id) {
        if (!this.animalRepository.findById(id).isEmpty()) {
            this.animalRepository.deleteById(id);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }
}