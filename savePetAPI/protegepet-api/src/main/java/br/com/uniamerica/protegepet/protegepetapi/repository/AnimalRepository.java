package br.com.uniamerica.protegepet.protegepetapi.repository;

import br.com.uniamerica.protegepet.protegepetapi.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Long> {

    @Query(value = "select * from animalsave.tb_animais where id = :id", nativeQuery = true)
    public Optional<Animal> findById(@Param("id") final Long id);

    @Query("SELECT animal FROM Animal animal WHERE animal.ativo = true")
    public List<Animal> findByAnimalAtivos();
}