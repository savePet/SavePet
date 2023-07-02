package br.com.uniamerica.protegepet.protegepetapi.AdministradorTest;

import br.com.uniamerica.protegepet.protegepetapi.entity.*;
import br.com.uniamerica.protegepet.protegepetapi.service.AdministradorService;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class AdministradorTest {
    @Autowired
    public AdministradorService administradorService;
    private Administrador administrador;
    private Evento evento;

    //dados definodos para teste
    private static String nome;
    private static String nomeNullo;
    private static String email;
    private static String emailNullo;
    private static String senha;
    private static String senhaNullo;
    private static String telefone;
    private static String telefoneNullo;
    private static StatusCadastro statusCadastroNullo;
    private static List<Evento> eventosNullo;
    //fim da definição


    @BeforeAll
    public static void definirValoresTest() {
        nomeNullo = null;
        nome = "Maria Clara";
        emailNullo = null;
        email = "Email01@gmail.com";
        senhaNullo = null;
        senha = "senha01";
        telefoneNullo = null;
        telefone = "451119999";
        statusCadastroNullo = null;
        eventosNullo = null;
    }

    @BeforeEach
    public void inicializarProtetora() {
        administrador = new Administrador();
    }

    //Teste Unitario:
    @Test
    @DisplayName("Verifica se todos os campos estão nullos")
    public void VerificaCamposNullos() {
        Assertions.assertThrows(RuntimeException.class, () -> administradorService.validarCadastroAdministrador(nomeNullo, emailNullo, senhaNullo, telefoneNullo, statusCadastroNullo, eventosNullo));
    }

    @Test
    @DisplayName("Verifica se o nome é difrente de String")
    public void VerificaSeNomeEDiferenteString() {
        Assertions.assertThrows(RuntimeException.class, () -> administradorService.validarCadastroAdministrador(nome, email, senha, telefone, statusCadastroNullo, eventosNullo));
    }

    @Test
    @DisplayName("Verifica se o email é difrente de String")
    public void VerificaSeEmailEDiferenteString() {
        Assertions.assertThrows(RuntimeException.class, () -> administradorService.validarCadastroAdministrador(nome, emailNullo, senha, telefone, statusCadastroNullo, eventosNullo));
    }

    @Test
    @DisplayName("Verifica se a senha é difrente de String")
    public void VerificaSeSenhaEDiferenteString() {
        Assertions.assertThrows(RuntimeException.class, () -> administradorService.validarCadastroAdministrador(nome, email, senhaNullo, telefone, statusCadastroNullo, eventosNullo));
    }

    @Test
    @DisplayName("Verifica se o telefone é difrente de String")
    public void VerificaSeTelefoneEDiferenteString() {
        Assertions.assertThrows(RuntimeException.class, () -> administradorService.validarCadastroAdministrador(nome, email, senha, telefoneNullo, statusCadastroNullo, eventosNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres do nome excedeu o limite")
    public void VerificaQuantidadeCaracteresNome() {
        nome = "Lorem Ipsum Dolor Sit Amet Consectetur";
        Assertions.assertThrows(RuntimeException.class, () -> administradorService.validarCadastroAdministrador(nome, emailNullo, senhaNullo, telefoneNullo, statusCadastroNullo, eventosNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres do email excedeu o limite")
    public void VerificaQuantidadeCaracteresEmail() {
        email = "abcdefghijklmnopqrstuvwxy@domain.com";
        Assertions.assertThrows(RuntimeException.class, () -> administradorService.validarCadastroAdministrador(nomeNullo, email, senhaNullo, telefoneNullo, statusCadastroNullo, eventosNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres da senha excedeu o limite")
    public void VerificaQuantidadeCaracteresSenha() {
        senha = "0123456789Silva9876543210";
        Assertions.assertThrows(RuntimeException.class, () -> administradorService.validarCadastroAdministrador(nomeNullo, emailNullo, senha, telefoneNullo, statusCadastroNullo, eventosNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres do telefone excedeu o limite")
    public void VerificaQuantidadeCaracteresTelefone() {
        telefone = "4588888888";
        Assertions.assertThrows(RuntimeException.class, () -> administradorService.validarCadastroAdministrador(nomeNullo, emailNullo, senhaNullo, telefone, statusCadastroNullo, eventosNullo));
    }

    @Test
    @DisplayName("Verifica se o valor do campo nome é atribuido com successo")
    public void VerificaNomeEAtribuidoComSucesso() {
        nome = "Nome01";
        Assertions.assertEquals("Nome01", nome);
    }

    @Test
    @DisplayName("Verifica se o valor do campo email é atribuido com successo")
    public void VerificaEmailEAtribuidoComSucesso() {
        email = "Email01@gmail.com";
        Assertions.assertEquals("Email01@gmail.com", email);
    }

    @Test
    @DisplayName("Verifica se o valor do campo senha é atribuido com successo")
    public void VerificaSenhaEAtribuidoComSucesso() {
        senha = "senha01";
        Assertions.assertEquals("senha01", senha);
    }

    @Test
    @DisplayName("Verifica se o valor do campo telefone é atribuido com successo")
    public void VerificaTelefoneEAtribuidoComSucesso() {
        telefone = "451119999";
        Assertions.assertEquals("451119999", telefone);
    }
    //Teste Integração:
    @Test
    @DisplayName("Deve retonar o nome do administrador")
    public void testeRetornarNomeAdministrador() {
        Administrador administrador1 = new Administrador("Kira", "email@gamil.com", "senha01", "457777777", StatusCadastro.PENDENTE, eventosNullo);
        Assertions.assertEquals("Kira", administrador1.getNome());
    }

    @Test
    @DisplayName("Deve retonar o email do administrador")
    public void testeRetornarEmailAdministrador() {
        Administrador administrador1 = new Administrador("Kira", "email@gamil.com", "senha01", "457777777", StatusCadastro.PENDENTE, eventosNullo);
        Assertions.assertEquals("email@gamil.com", administrador1.getEmail());
    }

    @Test
    @DisplayName("Deve retonar o senha do administrador")
    public void testeRetornarSenhaAdministrador() {
        Administrador administrador1 = new Administrador("Kira", "email@gamil.com", "senha01", "457777777", StatusCadastro.PENDENTE, eventosNullo);
        Assertions.assertEquals("senha01", administrador1.getSenha());
    }

    @Test
    @DisplayName("Deve retonar o telefone do administrador")
    public void testeRetornarTelefoneAdministrador() {
        Administrador administrador1 = new Administrador("Kira", "email@gamil.com", "senha01", "457777777", StatusCadastro.PENDENTE, eventosNullo);
        Assertions.assertEquals("457777777", administrador1.getTelefone());
    }

    @Test
    @DisplayName("Deve retonar o statusCadastro do administrador")
    public void testeRetornarStatusCadastroAdministrador() {
        Administrador administrador1 = new Administrador("Kira", "email@gamil.com", "senha01", "457777777", StatusCadastro.PENDENTE, eventosNullo);
        Assertions.assertEquals(StatusCadastro.PENDENTE, administrador1.getStatusCadastro());
    }
}