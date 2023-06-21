package br.com.uniamerica.protegepet.protegepetapi.service;

import br.com.uniamerica.protegepet.protegepetapi.entity.Fornecedor;
import br.com.uniamerica.protegepet.protegepetapi.entity.Servico;
import br.com.uniamerica.protegepet.protegepetapi.entity.StatusCadastro;
import br.com.uniamerica.protegepet.protegepetapi.entity.TipoFornecedor;
import br.com.uniamerica.protegepet.protegepetapi.repository.FornecedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class FornecedorService {

    @Autowired
    public FornecedorRepository fornecedorRepository;


    public Fornecedor findById(Long id) {
        return this.fornecedorRepository.findById(id).orElse(new Fornecedor());
    }

    public List<Fornecedor> findAll() {
        return this.fornecedorRepository.findByForncedoresAtivos();
    }

    @Transactional
    public Fornecedor save(Fornecedor fornecedor) {
        validarCadastroFornecedor(fornecedor.getNome(), fornecedor.getSenha(), fornecedor.getEndereco(), fornecedor.getCnpj(), fornecedor.getTelefone(), fornecedor.getEmail(), fornecedor.getTipoFornecedor(), fornecedor.getServicos(), fornecedor.getStatusCadastro());
        return this.fornecedorRepository.save(fornecedor);
    }

    public void validarCadastroFornecedor(String nome, String senha, String endereco, String cnpj, String telefone, String email, TipoFornecedor tipoFornecedor, List<Servico> servicos, StatusCadastro statusCadastro) {
        if (nome == null && senha == null && endereco == null && cnpj == null && telefone == null && email == null && tipoFornecedor == null && statusCadastro == null) {
            throw new RuntimeException("Preencha os campos por favor");
        } else if (nome.length() > 40 || senha.length() > 15 || endereco.length() > 60 || cnpj.length() > 14 || telefone.length() > 9 || email.length() > 40) {
            throw new RuntimeException("Limite de caracteres ultrapassado");
        }
        if (!(nome instanceof String) || !(senha instanceof String) || !(endereco instanceof String) || !(cnpj instanceof String) || !(telefone instanceof String) || !(email instanceof String) || !(tipoFornecedor instanceof Enum<?>) || !(statusCadastro instanceof Enum<?>)) {
            throw new RuntimeException("Insira os valores corretamente");
        } else {
            System.out.println("Dados corretos");
        }
    }

    @Transactional
    public void atualizarObjeto(final Long id, final Fornecedor fornecedor) {
        if (id.equals(fornecedor.getId()) && !this.fornecedorRepository.findById(id).isEmpty()) {
            this.fornecedorRepository.save(fornecedor);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }

    @Transactional
    public void VincularServicoFornecedor(Long idFornecedor, Servico servico) {// Vincula um servico com um fornecedor
        Fornecedor fornecedor = this.fornecedorRepository.findById(idFornecedor).orElseThrow(() -> new RuntimeException("Fornecedor não encontrada"));
        fornecedor.getServicos().add(servico);
        this.fornecedorRepository.save(fornecedor);
    }

    @Transactional
    public void deletarObjeto(final Long id) {
        if (!this.fornecedorRepository.findById(id).isEmpty()) {
            this.fornecedorRepository.deleteById(id);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }
}