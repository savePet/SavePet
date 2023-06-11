package br.com.uniamerica.protegepet.protegepetapi.controller;

import br.com.uniamerica.protegepet.protegepetapi.entity.Ocorrencia;
import br.com.uniamerica.protegepet.protegepetapi.entity.StatusOcorrencia;
import br.com.uniamerica.protegepet.protegepetapi.repository.OcorrenciaRepository;
import br.com.uniamerica.protegepet.protegepetapi.service.OcorrenciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/ocorrencias")
public class OcorrenciaController {


    @Autowired
    public OcorrenciaRepository ocorrenciaRepository;

    @Autowired
    public OcorrenciaService ocorrenciaService;


    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok().body(this.ocorrenciaService.findAll());
    }

    @GetMapping("/ocorrenciasPendentes")
    public ResponseEntity<?> findAllPendentes() {
        return ResponseEntity.ok().body(this.ocorrenciaRepository.findAllPendentes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ocorrencia> findById(
            @PathVariable final Long id
    ) {
        return ResponseEntity.ok().body(this.ocorrenciaService.findById(id));
    }

    @PostMapping
    public ResponseEntity<?> cadastrar(@RequestBody final Ocorrencia ocorrencia) {
        ocorrencia.setStatusOcorrencia(StatusOcorrencia.PENDENTE);
        this.ocorrenciaService.save(ocorrencia);
        return ResponseEntity.ok().body("Registro cadastrado com sucesso");
    }

    @PutMapping("/atualizarObjeto/{id}")
    public ResponseEntity<?> atualizarObjeto(
            @PathVariable final Long id,
            @RequestBody Ocorrencia ocorrencia
    ) {
        try {
            this.ocorrenciaService.atualizarObjeto(id, ocorrencia);
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
            this.ocorrenciaService.deletarObjeto(id);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Registro deletado com sucesso");
    }
}