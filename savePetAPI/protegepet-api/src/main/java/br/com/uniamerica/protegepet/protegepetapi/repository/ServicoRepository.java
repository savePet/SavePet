package br.com.uniamerica.protegepet.protegepetapi.repository;

import br.com.uniamerica.protegepet.protegepetapi.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ServicoRepository extends JpaRepository<Servico, Long> {

    @Query(value = "select * from animalsave.tb_servicos where id = :id", nativeQuery = true)
    public Optional<Servico> findById(@Param("id") final Long id);

    @Query("SELECT servico FROM Servico servico WHERE servico.ativo = true")
    public List<Servico> findByServicosAtivos();

    @Query(value = "select * from animalsave.tb_servicos where nome = :nome", nativeQuery = true)
    public List<Servico> findByServicosNomes(@Param("nome") final String nome);
}