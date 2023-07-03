package br.com.uniamerica.protegepet.protegepetapi.controller;

import br.com.uniamerica.protegepet.protegepetapi.entity.Servico;
import br.com.uniamerica.protegepet.protegepetapi.repository.ServicoRepository;
import br.com.uniamerica.protegepet.protegepetapi.service.ServicoService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/servicos")
public class ServicoController {


    @Autowired
    public ServicoRepository servicoRepository;

    @Autowired
    public ServicoService servicoService;

    @ApiOperation(value="Retorna todos os servicos")
    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok().body(this.servicoService.findAll());
    }

    @ApiOperation(value="Retorna um servico pelo Id")
    @GetMapping("/{id}")
    public ResponseEntity<Servico> findById(
            @PathVariable final Long id
    ) {
        return ResponseEntity.ok().body(this.servicoService.findById(id));
    }

    @ApiOperation(value="Retorna um servico pelo nome")
    @GetMapping("/buscarServicoNome/{nome}")//busca os servicos pelo nome
    public ResponseEntity<List<Servico>> findByServicoNome(@PathVariable("nome") String nome) {
        return ResponseEntity.ok().body(this.servicoRepository.findByServicosNomes(nome));
    }

    @ApiOperation(value="Atualiza as informações do servico")
    @PutMapping("/atualizarObjeto/{id}")
    public ResponseEntity<?> atualizarObjeto(
            @PathVariable final Long id,
            @RequestBody Servico servico
    ) {
        try {
            this.servicoService.atualizarObjeto(id, servico);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Registro atualizado com sucesso");
    }

    @ApiOperation(value="Deleta um servico")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletarObjeto(
            @PathVariable final Long id
    ) {
        try {
            this.servicoService.deletarObjeto(id);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Registro deletado com sucesso");
    }
}