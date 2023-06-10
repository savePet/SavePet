package br.com.uniamerica.protegepet.protegepetapi.controller;

import br.com.uniamerica.protegepet.protegepetapi.entity.Animal;
import br.com.uniamerica.protegepet.protegepetapi.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/animais")
public class AnimalController {

    @Autowired
    public AnimalService animalService;


    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok().body(this.animalService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Animal> findById(
            @PathVariable final Long id
    ) {
        return ResponseEntity.ok().body(this.animalService.findById(id));
    }

    @PutMapping("/atualizarObjeto/{id}")
    public ResponseEntity<?> atualizarObjeto(
            @PathVariable final Long id,
            @RequestBody Animal animal
    ) {
        try {
            this.animalService.atualizarObjeto(id, animal);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Registro atualizado com sucesso");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletarObjeto(
            @PathVariable final Long id
    ) {
        try {
            this.animalService.deletarObjeto(id);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Registro deletado com sucesso");
    }
}