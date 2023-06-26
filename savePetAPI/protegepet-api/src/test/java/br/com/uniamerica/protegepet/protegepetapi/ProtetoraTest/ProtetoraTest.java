package br.com.uniamerica.protegepet.protegepetapi.ProtetoraTest;

import br.com.uniamerica.protegepet.protegepetapi.entity.*;
import br.com.uniamerica.protegepet.protegepetapi.service.ProtetoraService;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;


import java.util.ArrayList;
import java.util.List;

public class ProtetoraTest {
    
    @Autowired
    public ProtetoraService protetoraService;
    private Protetora protetora;
    private Animal animal;
    private Ocorrencia ocorrencia;

    //dados definodos para teste
    private static String nome;
    private static String nomeNullo;
    private static String senha;
    private static String senhaNullo;
    private static String endereco;
    private static String enderecoNullo;
    private static String telefone;
    private static String telefoneNullo;
    private static String email;
    private static String emailNullo;
    private static DisponibilidadeAcolhimento disponibilidadeAcolhimento;
    private static DisponibilidadeAcolhimento disponibilidadeAcolhimentoNullo;
    private static StatusCadastro statusCadastro;
    private static StatusCadastro statusCadastroNullo;
    private static List<Animal> animals;
    private static List<Animal> animalsNullo;
    private static List<Ocorrencia> ocorrencias;
    private static List<Ocorrencia> ocorrenciasNullo;
    //fim da definição


    @BeforeAll
    public static void definirValoresTest() {
        nome = "Maria Clara";
        nomeNullo = null;
        senha = "123";
        senhaNullo = null;
        enderecoNullo = null;
        endereco = "Rua Natal";
        telefone = "451111111";
        telefoneNullo = null;
        email = "Email@01.com";
        emailNullo = null;
        disponibilidadeAcolhimento = new DisponibilidadeAcolhimento();
        disponibilidadeAcolhimento.setCapacidadeAcolhimento(10);
        disponibilidadeAcolhimento.setHorarioDisponivel("Seg a Quinta");
        disponibilidadeAcolhimento.setSegunda(true);
        disponibilidadeAcolhimento.setTerca(true);
        disponibilidadeAcolhimento.setQuarta(true);
        disponibilidadeAcolhimento.setQuinta(true);
        disponibilidadeAcolhimento.setSexta(false);
        disponibilidadeAcolhimento.setSabado(false);
        disponibilidadeAcolhimento.setDomingo(false);
        disponibilidadeAcolhimentoNullo = null;
        statusCadastroNullo = null;
        statusCadastro = statusCadastro.ACEITO;
        ocorrencias = new ArrayList<>();
        Ocorrencia ocorrencia01 = new Ocorrencia();
        ocorrencia01.setNomeUsuario("Claudio");
        ocorrencia01.setRegiao("Rua Pereira");
        ocorrencia01.setDescricao("Descricao01");
        ocorrencia01.setStatusOcorrencia(StatusOcorrencia.PENDENTE);
        ocorrencias.add(ocorrencia01);
        ocorrenciasNullo = null;
        animals = new ArrayList<>();
        Animal animal01 = new Animal();
        animal01.setEspecie(Especie.CACHORRO);
        animal01.setRaca(Raca.BENGAL);
        animal01.setGenero(Genero.MASCULINO);
        animal01.setDescricao("Descricao01");
        animal01.setPorteFisico(PorteFisico.PEQUENO);
        animal01.setCor(Cor.BRANCO);
        animal01.setStatusSaude(StatusSaude.EMTRATAMENTO);
        animals.add(animal01);
        animalsNullo = null;
    }

    @BeforeEach
    public void inicializarProtetora() {
        protetora = new Protetora();
    }

    //Teste Unitario:
    @Test
    @DisplayName("Verifica se todos os campos estão nullos")
    public void VerificaCamposNullos() {
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nomeNullo, senhaNullo, enderecoNullo, telefoneNullo, emailNullo, disponibilidadeAcolhimentoNullo, statusCadastroNullo, animalsNullo, ocorrenciasNullo));
    }

    @Test
    @DisplayName("Verifica se o statusCadastro tem algum valor atribuido")
    public void VerificaStatusCadastroInvalido() {
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nome, senha, endereco, telefone, email, disponibilidadeAcolhimento, statusCadastro, animalsNullo, ocorrenciasNullo));
    }

    @Test
    @DisplayName("Verifica se a protetora tentou registrar algum animal no momento do cadastro do perfil dela")
    public void VerificaAnimalInvalido() {
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nome, senha, endereco, telefone, email, disponibilidadeAcolhimento, statusCadastroNullo, animals, ocorrenciasNullo));
    }

    @Test
    @DisplayName("Verifica se a protetora tentou registrar alguma ocorrencia no momento do cadastro do perfil dela")
    public void VerificaOcorrenciaInvalido() {
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nome, senha, endereco, telefone, email, disponibilidadeAcolhimento, statusCadastroNullo, animalsNullo, ocorrencias));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres do nome ultrapassou o limite")
    public void VerificaQuantidadeCaracteresNome() {
        nome = "Lorem Ipsum Dolor Sit Amet Consectetur";
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nome, senhaNullo, enderecoNullo, telefoneNullo, emailNullo, disponibilidadeAcolhimentoNullo, statusCadastroNullo, animalsNullo, ocorrenciasNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres da senha ultrapassou o limite")
    public void VerificaQuantidadeCaracteresSenha() {
        senha = "Lorem Ipsum Dolor Sit Amet Consectetur";
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nomeNullo, senha, enderecoNullo, telefoneNullo, emailNullo, disponibilidadeAcolhimentoNullo, statusCadastroNullo, animalsNullo, ocorrenciasNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres da senha ultrapassou o limite")
    public void VerificaQuantidadeCaracteresEndereco() {
        endereco = "123 Avenida Principal, Bairro Lorem Ipsum, Cidade ABCDEFG, Estado XY";
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nomeNullo, senhaNullo, endereco, telefoneNullo, emailNullo, disponibilidadeAcolhimentoNullo, statusCadastroNullo, animalsNullo, ocorrenciasNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres do telefone ultrapassou o limite")
    public void VerificaQuantidadeCaracteresTelefone() {
        telefone = "4511111111";
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nomeNullo, senhaNullo, enderecoNullo, telefone, emailNullo, disponibilidadeAcolhimentoNullo, statusCadastroNullo, animalsNullo, ocorrenciasNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres do email ultrapassou o limite")
    public void VerificaQuantidadeCaracteresEmail() {
        email = "abcdefghijklmnopqrstuvwxy@domain.com";
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nomeNullo, senhaNullo, enderecoNullo, telefoneNullo, email, disponibilidadeAcolhimentoNullo, statusCadastroNullo, animalsNullo, ocorrenciasNullo));
    }

    @Test
    @DisplayName("Verifica se o valor do nome é diferente de String")
    public void VerificaSeNomeEDiferenteString() {
        nome = null;
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nome, senhaNullo, enderecoNullo, telefoneNullo, emailNullo, disponibilidadeAcolhimentoNullo, statusCadastroNullo, animalsNullo, ocorrenciasNullo));
    }

    @Test
    @DisplayName("Verifica se o valor do senha é diferente de String")
    public void VerificaSeSenhaEDiferenteString() {
        senha = null;
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nomeNullo, senha, enderecoNullo, telefoneNullo, emailNullo, disponibilidadeAcolhimentoNullo, statusCadastroNullo, animalsNullo, ocorrenciasNullo));
    }

    @Test
    @DisplayName("Verifica se o valor do endereco é diferente de String")
    public void VerificaSeEnderecoEDiferenteString() {
        endereco = null;
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nomeNullo, senhaNullo, endereco, telefoneNullo, emailNullo, disponibilidadeAcolhimentoNullo, statusCadastroNullo, animalsNullo, ocorrenciasNullo));
    }

    @Test
    @DisplayName("Verifica se o valor do telefone é diferente de String")
    public void VerificaSeTelefoneEDiferenteString() {
        telefone = null;
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nomeNullo, senhaNullo, enderecoNullo, telefone, emailNullo, disponibilidadeAcolhimentoNullo, statusCadastroNullo, animalsNullo, ocorrenciasNullo));
    }

    @Test
    @DisplayName("Verifica se o valor do email é diferente de String")
    public void VerificaSeEmailEDiferenteString() {
        email = null;
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nomeNullo, senhaNullo, enderecoNullo, telefoneNullo, email, disponibilidadeAcolhimentoNullo, statusCadastroNullo, animalsNullo, ocorrenciasNullo));
    }

    @Test
    @DisplayName("Verifica se o valor de disponibilidadeAcolhimento é diferente do tipo da classe que é ela mesma")
    public void VerificaSeDisponibilidadeAcolhimentoEDiferenteDisponibilidadeAcolhimento() {
        disponibilidadeAcolhimento = null;
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nomeNullo, senhaNullo, enderecoNullo, telefoneNullo, emailNullo, disponibilidadeAcolhimento, statusCadastroNullo, animalsNullo, ocorrenciasNullo));
    }

    @Test
    @DisplayName("Verifica se o valor do statusCadastro é diferente de Enum")
    public void VerificaSeStatusCadastroEDiferenteEnum() {
        statusCadastro = null;
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nomeNullo, senhaNullo, enderecoNullo, telefoneNullo, emailNullo, disponibilidadeAcolhimentoNullo, statusCadastro, animalsNullo, ocorrenciasNullo));
    }

    @Test
    @DisplayName("Verifica se o valor de animals é diferente de ArrayListAnimal")
    public void VerificaSeAnimalEDiferenteArrayListAnimal() {
        animals = null;
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nomeNullo, senhaNullo, enderecoNullo, telefoneNullo, emailNullo, disponibilidadeAcolhimentoNullo, statusCadastroNullo, animals, ocorrenciasNullo));
    }

    @Test
    @DisplayName("Verifica se o valor de ocorrenias é diferente de ArrayListOcorrencia")
    public void VerificaSeOcorrenciasEDiferenteArrayListOcorrencia() {
        ocorrencias = null;
        Assertions.assertThrows(RuntimeException.class, () -> protetoraService.validarCadastroProtetora(nomeNullo, senhaNullo, enderecoNullo, telefoneNullo, emailNullo, disponibilidadeAcolhimentoNullo, statusCadastroNullo, animalsNullo, ocorrencias));
    }

    //Teste Integração:
    @Test
    @DisplayName("Deve retonar o nome da protetora")
    public void testeRetornarNomeProtetora() {
        Protetora protetora01 = new Protetora("Julia Tecchio", "senha01", "Endereco01", "456666666", "Email01@gmail.com", disponibilidadeAcolhimento, StatusCadastro.PENDENTE, animals, ocorrencias);
        Assertions.assertEquals("Julia Tecchio", protetora01.getNome());
    }

    @Test
    @DisplayName("Deve retonar a senha da protetora")
    public void testeRetornarSenhaProtetora() {
        Protetora protetora01 = new Protetora("Julia Tecchio", "senha01", "Endereco01", "456666666", "Email01@gmail.com", disponibilidadeAcolhimento, StatusCadastro.PENDENTE, animals, ocorrencias);
        Assertions.assertEquals("senha01", protetora01.getSenha());
    }

    @Test
    @DisplayName("Deve retonar o endereco da protetora")
    public void testeRetornarEnderecoProtetora() {
        Protetora protetora01 = new Protetora("Julia Tecchio", "senha01", "Endereco01", "456666666", "Email01@gmail.com", disponibilidadeAcolhimento, StatusCadastro.PENDENTE, animals, ocorrencias);
        Assertions.assertEquals("Endereco01", protetora01.getEndereco());
    }

    @Test
    @DisplayName("Deve retonar o telefone da protetora")
    public void testeRetornarTelefoneProtetora() {
        Protetora protetora01 = new Protetora("Julia Tecchio", "senha01", "Endereco01", "456666666", "Email01@gmail.com", disponibilidadeAcolhimento, StatusCadastro.PENDENTE, animals, ocorrencias);
        Assertions.assertEquals("456666666", protetora01.getTelefone());
    }

    @Test
    @DisplayName("Deve retonar o email da protetora")
    public void testeRetornarEmailProtetora() {
        Protetora protetora01 = new Protetora("Julia Tecchio", "senha01", "Endereco01", "456666666", "Email01@gmail.com", disponibilidadeAcolhimento, StatusCadastro.PENDENTE, animals, ocorrencias);
        Assertions.assertEquals("Email01@gmail.com", protetora01.getEmail());
    }

    @Test
    @DisplayName("Deve retonar a disponibilidadeAcolhimento da protetora")
    public void testeRetornarDisponibilidadeAcolhimentoProtetora() {
        Protetora protetora01 = new Protetora("Julia Tecchio", "senha01", "Endereco01", "456666666", "Email01@gmail.com", disponibilidadeAcolhimento, StatusCadastro.PENDENTE, animals, ocorrencias);
        Assertions.assertEquals(disponibilidadeAcolhimento, protetora01.getDisponibilidadeAcolhimento());
    }

    @Test
    @DisplayName("Deve retonar o statusCadastro da protetora")
    public void testeRetornarStatusCadastroProtetora() {
        Protetora protetora01 = new Protetora("Julia Tecchio", "senha01", "Endereco01", "456666666", "Email01@gmail.com", disponibilidadeAcolhimento, StatusCadastro.PENDENTE, animals, ocorrencias);
        Assertions.assertEquals(StatusCadastro.PENDENTE, protetora01.getStatusCadastro());
    }

    @Test
    @DisplayName("Deve retonar a quantidade de animals da protetora")
    public void testeRetornarQuantidadeAnimalsProtetora() {
        Protetora protetora02 = new Protetora();
        Animal animal01 = new Animal(Especie.CACHORRO, Raca.BENGAL,Genero.MASCULINO, "defe", PorteFisico.PEQUENO, Cor.BRANCO, StatusSaude.EMTRATAMENTO);
        animals.add(animal01);
        protetora02.setAnimals(animals);
        Assertions.assertEquals(2, protetora02.getAnimals().size());
    }
}