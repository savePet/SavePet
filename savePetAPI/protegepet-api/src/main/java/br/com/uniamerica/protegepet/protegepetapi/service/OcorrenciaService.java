package br.com.uniamerica.protegepet.protegepetapi.service;

import br.com.uniamerica.protegepet.protegepetapi.entity.Ocorrencia;
import br.com.uniamerica.protegepet.protegepetapi.entity.Protetora;
import br.com.uniamerica.protegepet.protegepetapi.entity.StatusOcorrencia;
import br.com.uniamerica.protegepet.protegepetapi.repository.OcorrenciaRepository;
import br.com.uniamerica.protegepet.protegepetapi.repository.ProtetoraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class OcorrenciaService {

    @Autowired
    public OcorrenciaRepository ocorrenciaRepository;

    @Autowired
    public ProtetoraRepository protetoraRepository;

    public Ocorrencia findById(Long id) {
        return this.ocorrenciaRepository.findById(id).orElse(new Ocorrencia());
    }

    public List<Ocorrencia> findAll() {
        return this.ocorrenciaRepository.findByOcorrenciasAtivos();
    }


    @Transactional
    public Ocorrencia save(Ocorrencia ocorrencia) {
        return this.ocorrenciaRepository.save(ocorrencia);
    }

    public void validarCadastroOcorrencia(String nomeUsuario, String regiao, String descricao, StatusOcorrencia statusOcorrencia) {
        if (nomeUsuario == null && regiao == null && descricao == null && statusOcorrencia == null) {
            throw new RuntimeException("Preencha os campos corretamente por favor");
        } else if (statusOcorrencia != null || nomeUsuario.length() > 20 || regiao.length() > 50 || descricao.length() > 255) {
            throw new RuntimeException("Somente a protetora pode decidir o staus da ocorrencia");
        }
        if (!(nomeUsuario instanceof String) || !(regiao instanceof String) || !(descricao instanceof String) || !(statusOcorrencia instanceof StatusOcorrencia)) {
            throw new RuntimeException("Insira os valores corretamente por favor");
        } else {
            System.out.println("Dados corretos");
        }
}


    @Transactional
    public void atualizarObjeto(final Long id, final Ocorrencia ocorrencia) {
        if (id.equals(ocorrencia.getId()) && !this.ocorrenciaRepository.findById(id).isEmpty()) {
            this.ocorrenciaRepository.save(ocorrencia);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }

    @Transactional
    public void VincularOcorrenciaProtetora(Long idProtetora, Long idOcorrencia) {// Vincula uma ocorrencia com uma protetora
        Protetora protetora = this.protetoraRepository.findById(idProtetora).orElseThrow(() -> new RuntimeException("Protetora não encontrada"));
        Ocorrencia ocorrencia = this.ocorrenciaRepository.findById(idOcorrencia).orElseThrow(() -> new RuntimeException("Ocorrência não encontrada"));
        ocorrencia.setStatusOcorrencia(StatusOcorrencia.ACEITA);//atualiza o status da ocorrencia vinculada para ACEITA
        this.ocorrenciaRepository.save(ocorrencia);
        protetora.getOcorrencias().add(ocorrencia);
        this.protetoraRepository.save(protetora);
    }

    @Transactional
    public void deletarObjeto(final Long id) {
        if (!this.ocorrenciaRepository.findById(id).isEmpty()) {
            this.ocorrenciaRepository.deleteById(id);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }
}