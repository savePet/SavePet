package br.com.uniamerica.protegepet.protegepetapi.controller;

import br.com.uniamerica.protegepet.protegepetapi.entity.Fornecedor;
import br.com.uniamerica.protegepet.protegepetapi.entity.Servico;
import br.com.uniamerica.protegepet.protegepetapi.entity.StatusCadastro;
import br.com.uniamerica.protegepet.protegepetapi.repository.FornecedorRepository;
import br.com.uniamerica.protegepet.protegepetapi.service.FornecedorService;
import br.com.uniamerica.protegepet.protegepetapi.service.ServicoService;
import io.swagger.annotations.ApiOperation;

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
    public ServicoService servicoService;

    @Autowired
    public FornecedorService fornecedorService;

    @ApiOperation(value="Retorna todos os fornecedores") 
    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok().body(this.fornecedorService.findAll());
    }

    @ApiOperation(value="Retorna fornecedores com cadastro em pendencia") 
    @GetMapping("/fornecedoresPendentes")
    public ResponseEntity<?> findAllFornecedoresPendentes() {
        return ResponseEntity.ok().body(this.fornecedorRepository.findAllFornecedoresPendentes());
    }

    @ApiOperation(value="Retorna fornecedores com cadastro aceito") 
    @GetMapping("/fornecedoresAceitos")
    public ResponseEntity<?> findAllFornecedoresAceitos() {
        return ResponseEntity.ok().body(this.fornecedorRepository.findAllFornecedoresAceitos());
    }

    @ApiOperation(value="Retorna um fornecedor pelo Id") 
    @GetMapping("/{id}")
    public ResponseEntity<Fornecedor> findById(
            @PathVariable final Long id
    ) {
        return ResponseEntity.ok().body(this.fornecedorService.findById(id));
    }

    @ApiOperation(value="Cadastra um fornecedor")
    @PostMapping
    public ResponseEntity<?> cadastrar(@RequestBody final Fornecedor fornecedor) {
        fornecedor.setStatusCadastro(StatusCadastro.PENDENTE);
        this.fornecedorService.save(fornecedor);
        return ResponseEntity.ok().body("Registro cadastrado com sucesso");
    }

    @ApiOperation(value="Cadastra um servico vinculado a um fornecedor")
    @PostMapping("/VincularServicoFornecedor/{idFornecedor}")
    public ResponseEntity<?> vincularServicoFornecedor(
            @PathVariable Long idFornecedor,
            @RequestBody Servico servico
    ) {
        try {
            this.servicoService.save(servico);
            this.fornecedorService.VincularServicoFornecedor(idFornecedor, servico);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Registro cadastrado com sucesso");
    }

    @ApiOperation(value="Atualiza as informações de um fornecedor") 
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

    @ApiOperation(value="Deleta um fornecedor") 
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