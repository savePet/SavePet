package br.com.uniamerica.protegepet.protegepetapi.controller;


import br.com.uniamerica.protegepet.protegepetapi.entity.DisponibilidadeAcolhimento;

import br.com.uniamerica.protegepet.protegepetapi.service.DisponibilidadeAcolhimentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/disponibilidadesAcolhimentos")
public class DisponibilidadeAcolhimentoController {


    @Autowired
    public DisponibilidadeAcolhimentoService disponibilidadeAcolhimentoService;


    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok().body(this.disponibilidadeAcolhimentoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DisponibilidadeAcolhimento> findById(
            @PathVariable final Long id
    ) {
        return ResponseEntity.ok().body(this.disponibilidadeAcolhimentoService.findById(id));
    }

    @PutMapping("/atualizarObjeto/{id}")
    public ResponseEntity<?> atualizarObjeto(
            @PathVariable final Long id,
            @RequestBody DisponibilidadeAcolhimento disponibilidadeAcolhimento
    ) {
        try {
            this.disponibilidadeAcolhimentoService.atualizarObjeto(id, disponibilidadeAcolhimento);
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
            this.disponibilidadeAcolhimentoService.deletarObjeto(id);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Registro deletado com sucesso");
    }
}