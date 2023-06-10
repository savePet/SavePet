package br.com.uniamerica.protegepet.protegepetapi.controller;


import br.com.uniamerica.protegepet.protegepetapi.entity.Animal;
import br.com.uniamerica.protegepet.protegepetapi.entity.DisponibilidadeAcolhimento;
import br.com.uniamerica.protegepet.protegepetapi.entity.Protetora;
import br.com.uniamerica.protegepet.protegepetapi.entity.StatusCadastro;
import br.com.uniamerica.protegepet.protegepetapi.repository.ProtetoraRepository;
import br.com.uniamerica.protegepet.protegepetapi.service.AnimalService;
import br.com.uniamerica.protegepet.protegepetapi.service.DisponibilidadeAcolhimentoService;
import br.com.uniamerica.protegepet.protegepetapi.service.OcorrenciaService;
import br.com.uniamerica.protegepet.protegepetapi.service.ProtetoraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/protetoras")
public class ProtetoraController {

    @Autowired
    public ProtetoraRepository protetoraRepository;

    @Autowired
    public ProtetoraService protetoraService;

    @Autowired
    public OcorrenciaService ocorrenciaService;

    @Autowired
    DisponibilidadeAcolhimentoService disponibilidadeAcolhimentoService;

    @Autowired
    AnimalService animalService;


    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok().body(this.protetoraService.findAll());
    }

    @GetMapping("/protetorasPendentes")
    public ResponseEntity<?> findAllProtetorasPendentes() {
        return ResponseEntity.ok().body(this.protetoraRepository.findAllProtetorasPendentes());
    }

    @GetMapping("/protetorasAceitos")
    public ResponseEntity<?> findAllProtetorasAceitos() {
        return ResponseEntity.ok().body(this.protetoraRepository.findAllProtetorasAceitos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Protetora> findById(
            @PathVariable final Long id
    ) {
        return ResponseEntity.ok().body(this.protetoraService.findById(id));
    }

    @PostMapping
    public ResponseEntity<?> cadastrar(@RequestBody final Protetora protetora) {
        DisponibilidadeAcolhimento disponibilidadeAcolhimento = protetora.getDisponibilidadeAcolhimento();
        this.disponibilidadeAcolhimentoService.save(disponibilidadeAcolhimento);
        protetora.setDisponibilidadeAcolhimento(disponibilidadeAcolhimento);
        protetora.setStatusCadastro(StatusCadastro.PENDENTE);
        this.protetoraService.save(protetora);
        return ResponseEntity.ok().body("Registro cadastrado com sucesso");
    }

    @PostMapping("/VincularAnimalProtetora/{idProtetora}")
    public ResponseEntity<?> vincularAnimalProtetora(
            @PathVariable Long idProtetora,
            @RequestBody Animal animal
    ) {
        try {
            this.animalService.save(animal);
            this.protetoraService.VincularAnimalProtetora(idProtetora, animal);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Registro cadastrado com sucesso");
    }

    @PutMapping("/atualizarObjeto/{id}")
    public ResponseEntity<?> atualizarObjeto(
            @PathVariable final Long id,
            @RequestBody Protetora protetora
    ) {
        try {
            this.protetoraService.atualizarObjeto(id, protetora);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Registro atualizado com sucesso");
    }

    @PostMapping("/VincularOcorrenciaProtetora/{idProtetora}/{idOcorrencia}")
    public ResponseEntity<?> vincularOcorrenciaProtetora(
            @PathVariable final Long idProtetora,
            @PathVariable final Long idOcorrencia
    ) {
        try {
            this.ocorrenciaService.VincularOcorrenciaProtetora(idProtetora, idOcorrencia);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Ocorrencia vinculada com sucesso");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletarObjeto(
            @PathVariable final Long id
    ) {
        try {
            this.protetoraService.deletarObjeto(id);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Registro deletado com sucesso");
    }
}