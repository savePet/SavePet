package br.com.uniamerica.protegepet.protegepetapi.repository;

import br.com.uniamerica.protegepet.protegepetapi.entity.DisponibilidadeAcolhimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DisponibilidadeAcolhimentoRepository extends JpaRepository<DisponibilidadeAcolhimento, Long> {


    @Query(value = "select * from animalsave.tb_disponibilidades_acolhimentos where id = :id", nativeQuery = true)
    public Optional<DisponibilidadeAcolhimento> findById(@Param("id") final Long id);

    @Query("SELECT disponibilidadeAcolhimento FROM DisponibilidadeAcolhimento disponibilidadeAcolhimento WHERE disponibilidadeAcolhimento.ativo = true")
    public List<DisponibilidadeAcolhimento> findByDisponibilidadeAcolhimentoAtivos();
}