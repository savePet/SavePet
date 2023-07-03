package br.com.uniamerica.protegepet.protegepetapi.repository;

import br.com.uniamerica.protegepet.protegepetapi.entity.Evento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EventoRepository extends JpaRepository<Evento, Long> {

    @Query(value = "select * from animalsave.tb_eventos where id = :id", nativeQuery = true)
    public Optional<Evento> findById(@Param("id") final Long id);

    @Query("SELECT evento FROM Evento evento WHERE evento.ativo = true")
    public List<Evento> findByEventosAtivos();


}
