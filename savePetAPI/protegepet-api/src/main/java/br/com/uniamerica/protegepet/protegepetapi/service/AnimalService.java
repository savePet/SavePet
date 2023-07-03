package br.com.uniamerica.protegepet.protegepetapi.service;

import br.com.uniamerica.protegepet.protegepetapi.entity.*;
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
        validarCadastroAnimal(animal.getEspecie(), animal.getRaca(), animal.getGenero(), animal.getDescricao(), animal.getPorteFisico(), animal.getCor(), animal.getStatusSaude(), animal.getImagem());
        this.animalRepository.save(animal);
        return animal;
    }

    public void validarCadastroAnimal(Especie especie, Raca raca, Genero genero, String descricao, PorteFisico porteFisico, Cor cor, StatusSaude statusSaude, String imagem) {
        if (especie == null && raca == null && genero == null && descricao == null && porteFisico == null && cor == null && statusSaude == null) {
            throw new RuntimeException("Preencha os campos corretamente por favor");
        } else if (!(especie instanceof Enum<?>) || !(raca instanceof Enum<?>) || !(genero instanceof Enum<?>) || !(descricao instanceof String) || !(porteFisico instanceof Enum<?>) || !(cor instanceof Enum<?>) || !(statusSaude instanceof Enum<?>)) {
            throw new RuntimeException("Preencha os campos de acordo com o tipo por facvor");
        } else if (descricao.length() > 255) {
            throw new RuntimeException("Limite de caracteres excedidos em descricao");
        } else {
            System.out.println("Dados corretos");
        }
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