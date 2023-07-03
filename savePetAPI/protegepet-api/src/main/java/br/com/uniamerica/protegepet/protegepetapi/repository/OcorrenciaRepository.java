package br.com.uniamerica.protegepet.protegepetapi.repository;

import br.com.uniamerica.protegepet.protegepetapi.entity.Ocorrencia;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OcorrenciaRepository extends JpaRepository<Ocorrencia, Long> {

    @Query(value = "select * from animalsave.tb_ocorrencias where id = :id", nativeQuery = true)
    public Optional<Ocorrencia> findById(@Param("id") final Long id);

    @Query("SELECT ocorrencia FROM Ocorrencia ocorrencia WHERE ocorrencia.ativo = true")
    public List<Ocorrencia> findByOcorrenciasAtivos();

    @Query("SELECT ocorrencia FROM Ocorrencia ocorrencia WHERE ocorrencia.statusOcorrencia = 'PENDENTE'")
    public List<Ocorrencia> findAllPendentes();
}