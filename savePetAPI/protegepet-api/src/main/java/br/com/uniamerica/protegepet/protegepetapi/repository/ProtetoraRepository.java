package br.com.uniamerica.protegepet.protegepetapi.repository;

import br.com.uniamerica.protegepet.protegepetapi.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProtetoraRepository extends JpaRepository<Protetora, Long> {

    @Query(value = "select * from animalsave.tb_protetoras where id = :id", nativeQuery = true)
    public Optional<Protetora> findById(@Param("id") final Long id);

    @Query("SELECT protetora FROM Protetora protetora WHERE protetora.ativo = true")
    public List<Protetora> findByProtetorasAtivos();

    @Query("SELECT protetora FROM Protetora protetora WHERE protetora.statusCadastro = 'PENDENTE'")
    public List<Protetora> findAllProtetorasPendentes();

    @Query("SELECT protetora FROM Protetora protetora WHERE protetora.statusCadastro = 'ACEITO'")
    public List<Protetora> findAllProtetorasAceitos();
}