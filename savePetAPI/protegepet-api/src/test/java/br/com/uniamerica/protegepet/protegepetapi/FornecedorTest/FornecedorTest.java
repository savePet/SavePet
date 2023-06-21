package br.com.uniamerica.protegepet.protegepetapi.FornecedorTest;

import br.com.uniamerica.protegepet.protegepetapi.entity.*;
import br.com.uniamerica.protegepet.protegepetapi.service.FornecedorService;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class FornecedorTest {
    @Autowired
    public FornecedorService fornecedorService;

    private Fornecedor fornecedor;
    private Servico servico;

    //dados definodos para teste
    private static String nome;
    private static String nomeNullo;
    private static String senha;
    private static String senhaNullo;
    private static String endereco;
    private static String enderecoNullo;
    private static String cnpj;
    private static String cnpjNullo;
    private static String telefone;
    private static String telefoneNullo;
    private static String email;
    private static String emailNullo;
    private static TipoFornecedor tipoFornecedor;
    private static TipoFornecedor tipoFornecedorNullo;
    private static List<Servico> servicos;
    private static List<Servico> servicosNullo;
    private static StatusCadastro statusCadastro;
    private static StatusCadastro statusCadastroNullo;
    //fim da definição


    @BeforeAll
    public static void definirValoresTest() {
        nome = "Vitoria Holtt";
        nomeNullo = null;
        senha = "111111111";
        senhaNullo = null;
        enderecoNullo = null;
        endereco = "Rua Natal";
        cnpjNullo = null;
        cnpj = "144949744";
        telefoneNullo = null;
        telefone = "451111111";
        emailNullo = null;
        email = "Email01@gmail.com";
        tipoFornecedorNullo = null;
        tipoFornecedor = TipoFornecedor.PRODUTO;
        servicosNullo = null;
        servicos = new ArrayList<>();
        Servico servico01 = new Servico();
        servico01.setNome("Servico01");
        servico01.setDescricao("Descricao01");
        servico01.setPreco(BigDecimal.valueOf(10));
        servico01.setQuantidade(BigDecimal.valueOf(30));
        servico01.setTipoFornecedor(TipoFornecedor.PRODUTO);
        servicos.add(servico01);
        statusCadastroNullo = null;
        statusCadastro = StatusCadastro.PENDENTE;
    }

    @BeforeEach
    public void inicializarProtetora() {
        fornecedor = new Fornecedor();
    }

    //Teste Unitario:
    @Test
    @DisplayName("Verifica se todos os campos estão nullos")
    public void VerificaCamposNullos() {
        Assertions.assertThrows(RuntimeException.class, () -> fornecedorService.validarCadastroFornecedor(nomeNullo, senhaNullo, enderecoNullo, cnpjNullo, telefoneNullo, emailNullo, tipoFornecedorNullo, servicosNullo, statusCadastroNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres do nome ultrapassou o limite")
    public void VerificaQuantidadeCaracteresNome() {
        nome = "Alexandrina Adalberta Angelina Antonieta Aramintha Belarmina Benedita Benjamina Bernarda Celestina Clarisse Domicília Eduvigis Emiliana Efigênia Eufrosina Felizarda Frederica Genebra Hipólita Honorata Iriana Isolda Juliana Lucrécia Maximiliana Mirabel Narcisa Octaviana Ofélia Perpétua Querubina Roxana Serafina Sibila Teodora Valentina Vitalina Wilhelmina";
        Assertions.assertThrows(RuntimeException.class, () -> fornecedorService.validarCadastroFornecedor(nome, senhaNullo, enderecoNullo, cnpjNullo, telefoneNullo, emailNullo, tipoFornecedorNullo, servicosNullo, statusCadastroNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres da senha ultrapassou o limite")
    public void VerificaQuantidadeCaracteresSenha() {
        senha = "123SilvaDosSantosJunior123Pereira";
        Assertions.assertThrows(RuntimeException.class, () -> fornecedorService.validarCadastroFornecedor(nomeNullo, senha, enderecoNullo, cnpjNullo, telefoneNullo, emailNullo, tipoFornecedorNullo, servicosNullo, statusCadastroNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres do endereco ultrapassou o limite")
    public void VerificaQuantidadeCaracteresEndereco() {
        endereco = "123 Avenida Principal, Bairro Lorem Ipsum, Cidade ABCDEFG, Estado XY";
        Assertions.assertThrows(RuntimeException.class, () -> fornecedorService.validarCadastroFornecedor(nomeNullo, senhaNullo, endereco, cnpjNullo, telefoneNullo, emailNullo, tipoFornecedorNullo, servicosNullo, statusCadastroNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres do cnpj ultrapassou o limite")
    public void VerificaQuantidadeCaracteresCnpj() {
        cnpj = "1234567800019916887";
        Assertions.assertThrows(RuntimeException.class, () -> fornecedorService.validarCadastroFornecedor(nomeNullo, senhaNullo, enderecoNullo, cnpj, telefoneNullo, emailNullo, tipoFornecedorNullo, servicosNullo, statusCadastroNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres do telefone ultrapassou o limite")
    public void VerificaQuantidadeCaracteresTelefone() {
        telefone = "4511111112";
        Assertions.assertThrows(RuntimeException.class, () -> fornecedorService.validarCadastroFornecedor(nomeNullo, senhaNullo, enderecoNullo, cnpjNullo, telefone, emailNullo, tipoFornecedorNullo, servicosNullo, statusCadastroNullo));
    }


    @Test
    @DisplayName("Verifica se a quantidade de caracteres do email ultrapassou o limite")
    public void VerificaQuantidadeCaracteresEmail() {
        email = "abcdefghijklmnopqrstuvwxy@domain.com";
        Assertions.assertThrows(RuntimeException.class, () -> fornecedorService.validarCadastroFornecedor(nomeNullo, senhaNullo, enderecoNullo, cnpjNullo, telefoneNullo, email, tipoFornecedorNullo, servicosNullo, statusCadastroNullo));
    }

    @Test
    @DisplayName("Verifica se o nome é do tipo String")
    public void VerificaSeNomeEString() {
        Assertions.assertThrows(RuntimeException.class, () -> fornecedorService.validarCadastroFornecedor(nomeNullo, senha, endereco, cnpj, telefone, email, tipoFornecedor, servicos, statusCadastro));
    }

    @Test
    @DisplayName("Verifica se o senha é do tipo String")
    public void VerificaSeSenhaEString() {
        Assertions.assertThrows(RuntimeException.class, () -> fornecedorService.validarCadastroFornecedor(nome, senhaNullo, endereco, cnpj, telefone, email, tipoFornecedor, servicos, statusCadastro));
    }

    @Test
    @DisplayName("Verifica se o endereco é do tipo String")
    public void VerificaSeEnderecoEString() {
        Assertions.assertThrows(RuntimeException.class, () -> fornecedorService.validarCadastroFornecedor(nome, senha, enderecoNullo, cnpj, telefone, email, tipoFornecedor, servicos, statusCadastro));
    }

    @Test
    @DisplayName("Verifica se o cnpj é do tipo String")
    public void VerificaSeCnpjEString() {
        Assertions.assertThrows(RuntimeException.class, () -> fornecedorService.validarCadastroFornecedor(nome, senha, endereco, cnpjNullo, telefone, email, tipoFornecedor, servicos, statusCadastro));
    }

    @Test
    @DisplayName("Verifica se o telefone é do tipo String")
    public void VerificaSeTelefoneEString() {
        Assertions.assertThrows(RuntimeException.class, () -> fornecedorService.validarCadastroFornecedor(nome, senha, endereco, cnpj, telefoneNullo, email, tipoFornecedor, servicos, statusCadastro));
    }

    @Test
    @DisplayName("Verifica se o email é do tipo String")
    public void VerificaSeEmailEString() {
        Assertions.assertThrows(RuntimeException.class, () -> fornecedorService.validarCadastroFornecedor(nome, senha, endereco, cnpj, telefone, emailNullo, tipoFornecedor, servicos, statusCadastro));
    }

    @Test
    @DisplayName("Verifica se o tipoFornecedor é do tipo Enum")
    public void VerificaSeTipoFornecedorEEnum() {
        Assertions.assertThrows(RuntimeException.class, () -> fornecedorService.validarCadastroFornecedor(nome, senha, endereco, cnpj, telefone, email, tipoFornecedorNullo, servicos, statusCadastro));
    }

    @Test
    @DisplayName("Verifica se o servicos é do tipo ArrayList")
    public void VerificaSeServicosEArrayList() {
        Assertions.assertThrows(RuntimeException.class, () -> fornecedorService.validarCadastroFornecedor(nome, senha, endereco, cnpj, telefone, email, tipoFornecedor, servicosNullo, statusCadastro));
    }

    @Test
    @DisplayName("Verifica se o statusCadastro é do tipo Enum")
    public void VerificaSeStatusCadastroEEnum() {
        Assertions.assertThrows(RuntimeException.class, () -> fornecedorService.validarCadastroFornecedor(nome, senha, endereco, cnpj, telefone, email, tipoFornecedor, servicos, statusCadastroNullo));
    }
    //Teste Integracão:
    @Test
    @DisplayName("Deve retonar o nome do fornecedor")
    public void testeRetornarNomeFornecedor() {
        Fornecedor fornecedor1 = new Fornecedor("BanhoETosa", "senha01", "endereco01", "1235465656956", "459999999", "email01@gmail.com", TipoFornecedor.MAODEOBRA, servicos, StatusCadastro.PENDENTE);
        Assertions.assertEquals("BanhoETosa", fornecedor1.getNome());
    }

    @Test
    @DisplayName("Deve retonar a senha do fornecedor")
    public void testeRetornarSenhaFornecedor() {
        Fornecedor fornecedor1 = new Fornecedor("BanhoETosa", "senha01", "endereco01", "1235465656956", "459999999", "email01@gmail.com", TipoFornecedor.MAODEOBRA, servicos, StatusCadastro.PENDENTE);
        Assertions.assertEquals("senha01", fornecedor1.getSenha());
    }

    @Test
    @DisplayName("Deve retonar o endereco do fornecedor")
    public void testeRetornarEnderecoFornecedor() {
        Fornecedor fornecedor1 = new Fornecedor("BanhoETosa", "senha01", "endereco01", "1235465656956", "459999999", "email01@gmail.com", TipoFornecedor.MAODEOBRA, servicos, StatusCadastro.PENDENTE);
        Assertions.assertEquals("endereco01", fornecedor1.getEndereco());
    }

    @Test
    @DisplayName("Deve retonar o cnpj do fornecedor")
    public void testeRetornarCnpjFornecedor() {
        Fornecedor fornecedor1 = new Fornecedor("BanhoETosa", "senha01", "endereco01", "1235465656956", "459999999", "email01@gmail.com", TipoFornecedor.MAODEOBRA, servicos, StatusCadastro.PENDENTE);
        Assertions.assertEquals("1235465656956", fornecedor1.getCnpj());
    }

    @Test
    @DisplayName("Deve retonar o telefone do fornecedor")
    public void testeRetornarTelefoneFornecedor() {
        Fornecedor fornecedor1 = new Fornecedor("BanhoETosa", "senha01", "endereco01", "1235465656956", "459999999", "email01@gmail.com", TipoFornecedor.MAODEOBRA, servicos, StatusCadastro.PENDENTE);
        Assertions.assertEquals("459999999", fornecedor1.getTelefone());
    }

    @Test
    @DisplayName("Deve retonar o email do fornecedor")
    public void testeRetornarEmailFornecedor() {
        Fornecedor fornecedor1 = new Fornecedor("BanhoETosa", "senha01", "endereco01", "1235465656956", "459999999", "email01@gmail.com", TipoFornecedor.MAODEOBRA, servicos, StatusCadastro.PENDENTE);
        Assertions.assertEquals("email01@gmail.com", fornecedor1.getEmail());
    }

    @Test
    @DisplayName("Deve retonar o tipoFornecedor do fornecedor")
    public void testeRetornarTipoFornecedorFornecedor() {
        Fornecedor fornecedor1 = new Fornecedor("BanhoETosa", "senha01", "endereco01", "1235465656956", "459999999", "email01@gmail.com", TipoFornecedor.MAODEOBRA, servicos, StatusCadastro.PENDENTE);
        Assertions.assertEquals(TipoFornecedor.MAODEOBRA, fornecedor1.getTipoFornecedor());
    }

    @Test
    @DisplayName("Deve retonar o statusCadastro do fornecedor")
    public void testeRetornarStatusCadastroFornecedor() {
        Fornecedor fornecedor1 = new Fornecedor("BanhoETosa", "senha01", "endereco01", "1235465656956", "459999999", "email01@gmail.com", TipoFornecedor.MAODEOBRA, servicos, StatusCadastro.PENDENTE);
        Assertions.assertEquals(StatusCadastro.PENDENTE, fornecedor1.getStatusCadastro());
    }
}