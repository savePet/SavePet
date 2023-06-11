package br.com.uniamerica.protegepet.protegepetapi.controller;

import br.com.uniamerica.protegepet.protegepetapi.entity.Fornecedor;
import br.com.uniamerica.protegepet.protegepetapi.entity.StatusCadastro;
import br.com.uniamerica.protegepet.protegepetapi.repository.FornecedorRepository;
import br.com.uniamerica.protegepet.protegepetapi.service.FornecedorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/fornecedores")
public class FornecedorController {


    @Autowired
    public FornecedorRepository fornecedorRepository;

    @Autowired
    public FornecedorService fornecedorService;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok().body(this.fornecedorService.findAll());
    }

    @GetMapping("/fornecedoresPendentes")
    public ResponseEntity<?> findAllFornecedoresPendentes() {
        return ResponseEntity.ok().body(this.fornecedorRepository.findAllFornecedoresPendentes());
    }

    @GetMapping("/fornecedoresAceitos")
    public ResponseEntity<?> findAllFornecedoresAceitos() {
        return ResponseEntity.ok().body(this.fornecedorRepository.findAllFornecedoresAceitos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Fornecedor> findById(
            @PathVariable final Long id
    ) {
        return ResponseEntity.ok().body(this.fornecedorService.findById(id));
    }

    @PostMapping
    public ResponseEntity<?> cadastrar(@RequestBody final Fornecedor fornecedor) {
        fornecedor.setStatusCadastro(StatusCadastro.PENDENTE);
        this.fornecedorService.save(fornecedor);
        return ResponseEntity.ok().body("Registro cadastrado com sucesso");
    }

    @PutMapping("/atualizarObjeto/{id}")
    public ResponseEntity<?> atualizarObjeto(
            @PathVariable final Long id,
            @RequestBody Fornecedor fornecedor
    ) {
        try {
            this.fornecedorService.atualizarObjeto(id, fornecedor);
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
            this.fornecedorService.deletarObjeto(id);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Registro deletado com sucesso");
    }
}