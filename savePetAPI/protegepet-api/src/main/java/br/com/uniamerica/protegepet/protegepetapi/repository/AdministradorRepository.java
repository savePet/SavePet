package br.com.uniamerica.protegepet.protegepetapi.repository;

import br.com.uniamerica.protegepet.protegepetapi.entity.Administrador;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AdministradorRepository extends JpaRepository<Administrador, Long> {

    @Query(value = "select * from animalsave.tb_administradores where id = :id", nativeQuery = true)
    public Optional<Administrador> findById(@Param("id") final Long id);

    @Query("SELECT administrador FROM Administrador administrador WHERE administrador.ativo = true")
    public List<Administrador> findByAdministradoresAtivos();
}