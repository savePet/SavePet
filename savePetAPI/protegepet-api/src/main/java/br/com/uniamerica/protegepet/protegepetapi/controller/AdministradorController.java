package br.com.uniamerica.protegepet.protegepetapi.controller;

import br.com.uniamerica.protegepet.protegepetapi.entity.Administrador;
import br.com.uniamerica.protegepet.protegepetapi.entity.Evento;
import br.com.uniamerica.protegepet.protegepetapi.entity.StatusCadastro;
import br.com.uniamerica.protegepet.protegepetapi.service.AdministradorService;
import br.com.uniamerica.protegepet.protegepetapi.service.EventoService;
import io.swagger.annotations.ApiOperation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/administradores")
public class AdministradorController {

    @Autowired
    public AdministradorService administradorService;

    @Autowired
    public EventoService eventoService;

    @ApiOperation(value="Retorna todos os administradores") 
    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok().body(this.administradorService.findAll());
    }

    @ApiOperation(value="Retorna um administrador pelo Id") 
    @GetMapping("/{id}")
    public ResponseEntity<Administrador> findById(
            @PathVariable final Long id
    ) {
        return ResponseEntity.ok().body(this.administradorService.findById(id));
    }

    @ApiOperation(value="Cadastra um administrador") 
    @PostMapping
    public ResponseEntity<?> cadastrar(@RequestBody final Administrador administrador) {
        administrador.setStatusCadastro(StatusCadastro.PENDENTE);
        this.administradorService.save(administrador);
        return ResponseEntity.ok().body("Registro cadastrado com sucesso");
    }

    @ApiOperation(value="Cadastra um Evento ao administrador") 
    @PostMapping("/VincularEventoAdministrador/{idAdministrador}")
    public ResponseEntity<?> vincularEventoAdministrador(
            @PathVariable Long idAdministrador,
            @RequestBody Evento evento
    ) {
        try {
            this.eventoService.save(evento);
            this.administradorService.VincularEventoAdministrador(idAdministrador, evento);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Registro cadastrado com sucesso");
    }

    @ApiOperation(value="Atualiza um informação do administrador")
    @PutMapping("/atualizarObjeto/{id}")
    public ResponseEntity<?> atualizarObjeto(
            @PathVariable final Long id,
            @RequestBody Administrador administrador
    ) {
        try {
            this.administradorService.atualizarObjeto(id, administrador);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Registro atualizado com sucesso");
    }

    @ApiOperation(value="Deleta um administrador")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletarObjeto(
            @PathVariable final Long id
    ) {
        try {
            this.administradorService.deletarObjeto(id);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Registro deletado com sucesso");
    }
}