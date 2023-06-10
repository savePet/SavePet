package br.com.uniamerica.protegepet.protegepetapi.repository;

import br.com.uniamerica.protegepet.protegepetapi.entity.Fornecedor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FornecedorRepository extends JpaRepository<Fornecedor, Long> {

    @Query(value = "select * from animalsave.tb_fornecedores where id = :id", nativeQuery = true)
    public Optional<Fornecedor> findById(@Param("id") final Long id);

    @Query("SELECT fornecedor FROM Fornecedor fornecedor WHERE fornecedor.ativo = true")
    public List<Fornecedor> findByForncedoresAtivos();

    @Query("SELECT fornecedor FROM Fornecedor fornecedor WHERE fornecedor.statusCadastro = 'PENDENTE'")
    public List<Fornecedor> findAllFornecedoresPendentes();

    @Query("SELECT fornecedor FROM Fornecedor fornecedor WHERE fornecedor.statusCadastro = 'ACEITO'")
    public List<Fornecedor> findAllFornecedoresAceitos();
}