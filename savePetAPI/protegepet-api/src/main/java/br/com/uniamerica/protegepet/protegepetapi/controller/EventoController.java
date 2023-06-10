package br.com.uniamerica.protegepet.protegepetapi.controller;

import br.com.uniamerica.protegepet.protegepetapi.entity.Evento;

import br.com.uniamerica.protegepet.protegepetapi.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/eventos")
public class EventoController {

    @Autowired
    public EventoService eventoService;


    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok().body(this.eventoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Evento> findById(
            @PathVariable final Long id
    ) {
        return ResponseEntity.ok().body(this.eventoService.findById(id));
    }

    @PutMapping("/atualizarObjeto/{id}")
    public ResponseEntity<?> atualizarObjeto(
            @PathVariable final Long id,
            @RequestBody Evento evento
    ) {
        try {
            this.eventoService.atualizarObjeto(id, evento);
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
            this.eventoService.deletarObjeto(id);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Registro deletado com sucesso");
    }
}