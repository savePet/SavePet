package br.com.uniamerica.protegepet.protegepetapi.OcorrenciaTest;

import br.com.uniamerica.protegepet.protegepetapi.entity.*;
import br.com.uniamerica.protegepet.protegepetapi.service.OcorrenciaService;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;


public class OcorrenciaTest {

    @Autowired
    public OcorrenciaService ocorrenciaService;

    private Ocorrencia ocorrencia;

    //dados definodos para teste
    private static String nomeUsuario;
    private static String nomeUsuarioNullo;
    private static String regiao;
    private static String regiaoNullo;
    private static String descricao;
    private static String descricaoNullo;
    private static StatusOcorrencia statusOcorrencia;
    private static StatusOcorrencia statusOcorrenciaNullo;
    //fim da definição


    @BeforeAll
    public static void definirValoresTest() {
        nomeUsuarioNullo = null;
        regiaoNullo = null;
        descricaoNullo = null;
        statusOcorrenciaNullo = null;
        statusOcorrencia = StatusOcorrencia.ACEITA;
    }

    @BeforeEach
    public void inicializarProtetora() {
        ocorrencia = new Ocorrencia();
    }

    //Teste Unitario:
    @Test
    @DisplayName("Verifica se todos os campos estão nullos")
    public void VerificaCamposNullos() {
        Assertions.assertThrows(RuntimeException.class, () -> ocorrenciaService.validarCadastroOcorrencia(nomeUsuarioNullo, regiaoNullo, descricaoNullo, statusOcorrenciaNullo));
    }

    @Test
    @DisplayName("Verifica se o usuario tentou definir um status para a ocorrencia")
    public void VerificaStatusOcorrenciaDiferenteDeNullo() {
        Assertions.assertThrows(RuntimeException.class, () -> ocorrenciaService.validarCadastroOcorrencia(nomeUsuarioNullo, regiaoNullo, descricaoNullo, statusOcorrencia));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres do campo nome ultrapassou o limite")
    public void VerificaQuantidadeCaracteresNome() {
        nomeUsuario = "Lorem Ipsum Dolor Sit Amet Consectetur";
        Assertions.assertThrows(RuntimeException.class, () -> ocorrenciaService.validarCadastroOcorrencia(nomeUsuario, regiaoNullo, descricaoNullo, statusOcorrenciaNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres do campo regiao ultrapassou o limite")
    public void VerificaQuantidadeCaracteresRegiao() {
        regiao = "123 Avenida Principal, Bairro Lorem Ipsum, Cidade ABCDEFG, Estado XY";
        Assertions.assertThrows(RuntimeException.class, () -> ocorrenciaService.validarCadastroOcorrencia(nomeUsuarioNullo, regiao, descricaoNullo, statusOcorrenciaNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres do campo descricao ultrapassou o limite")
    public void VerificaQuantidadeCaracteresDescricao() {
        descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum ultricies aliquet. Donec porttitor turpis non odio porta, et feugiat sapien congue. Nullam ultrices vulputate magna, eu malesuada arcu luctus ac. Sed dignissim tellus ac dolor ultricies, a lacinia nunc hendrerit. Suspendisse eu diam sit amet tortor elementum fringilla at sed tortor. Cras ac feugiat justo, sit amet laoreet lorem. Mauris eget justo quis ligula vehicula semper. Nam at lacus non neque aliquet varius.";
        Assertions.assertThrows(RuntimeException.class, () -> ocorrenciaService.validarCadastroOcorrencia(nomeUsuarioNullo, regiaoNullo, descricao, statusOcorrenciaNullo));
    }

    @Test
    @DisplayName("Verifica se o  valor do campo nomeUsuario é  do tipo String")
    public void VerificaSeNomeUsuarioEString() {
        nomeUsuario = null;
        Assertions.assertThrows(RuntimeException.class, () -> ocorrenciaService.validarCadastroOcorrencia(nomeUsuario, regiaoNullo, descricaoNullo, statusOcorrenciaNullo));
    }

    @Test
    @DisplayName("Verifica se o  valor do campo regiao é  do tipo String")
    public void VerificaSeRegiaoEString() {
        regiao = null;
        Assertions.assertThrows(RuntimeException.class, () -> ocorrenciaService.validarCadastroOcorrencia(nomeUsuarioNullo, regiao, descricaoNullo, statusOcorrenciaNullo));
    }

    @Test
    @DisplayName("Verifica se o  valor do campo descricao é  do tipo String")
    public void VerificaSeDescricaoEString() {
        descricao = null;
        Assertions.assertThrows(RuntimeException.class, () -> ocorrenciaService.validarCadastroOcorrencia(nomeUsuarioNullo, regiaoNullo, descricao, statusOcorrenciaNullo));
    }

    @Test
    @DisplayName("Verifica se o  valor do campo statusOcorrencia é do tipo StatusOcorrencia/Enum")
    public void VerificaSeStatusOcorrenciaEEnum() {
        statusOcorrencia = null;
        Assertions.assertThrows(RuntimeException.class, () -> ocorrenciaService.validarCadastroOcorrencia(nomeUsuarioNullo, regiaoNullo, descricaoNullo, statusOcorrencia));
    }

    @Test
    @DisplayName("Verifica se o  valor do campo nome é atribuido com sucesso")
    public void VerificaSeAtribuiNomeUsuario() {
        nomeUsuario = "BibiVitona";
        Assertions.assertEquals("BibiVitona", nomeUsuario);
    }

    @Test
    @DisplayName("Verifica se o  valor do campo regiao é atribuido com sucesso")
    public void VerificaSeAtribuiRegiao() {
        regiao = "123 Avenida Principal, Bairro Lorem Ipsum, Cidade ABCDEFG, Estado XY";
        Assertions.assertEquals("123 Avenida Principal, Bairro Lorem Ipsum, Cidade ABCDEFG, Estado XY", regiao);
    }

    @Test
    @DisplayName("Verifica se o  valor do campo descricao é atribuido com sucesso")
    public void VerificaSeAtribuiDescricao() {
        descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum ultricies aliquet. Donec porttitor turpis non odio porta, et feugiat sapien congue. Nullam ultrices vulputate magna, eu malesuada arcu luctus ac. Sed dignissim tellus ac dolor ultricies, a lacinia nunc hendrerit. Suspendisse eu diam sit amet tortor elementum fringilla at sed tortor. Cras ac feugiat justo, sit amet laoreet lorem. Mauris eget justo quis ligula vehicula semper. Nam at lacus non neque aliquet varius.";
        Assertions.assertEquals("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum ultricies aliquet. Donec porttitor turpis non odio porta, et feugiat sapien congue. Nullam ultrices vulputate magna, eu malesuada arcu luctus ac. Sed dignissim tellus ac dolor ultricies, a lacinia nunc hendrerit. Suspendisse eu diam sit amet tortor elementum fringilla at sed tortor. Cras ac feugiat justo, sit amet laoreet lorem. Mauris eget justo quis ligula vehicula semper. Nam at lacus non neque aliquet varius.", descricao);
    }
    //Teste Integração:
    @Test
    @DisplayName("Deve retonar o nomeUsuario da ocorrencia")
    public void testeRetornarNomeUsuarioOcorrencia() {
        Ocorrencia ocorrencia1 = new Ocorrencia("Julia Tecchio", "Vila C Velha", "descricao", StatusOcorrencia.PENDENTE);
        Assertions.assertEquals("Julia Tecchio", ocorrencia1.getNomeUsuario());
    }

    @Test
    @DisplayName("Deve retonar a regiao da ocorrencia")
    public void testeRetornarRegiaoOcorencia() {
        Ocorrencia ocorrencia1 = new Ocorrencia("Julia Tecchio", "Vila C Velha", "descricao", StatusOcorrencia.PENDENTE);
        Assertions.assertEquals("Vila C Velha", ocorrencia1.getRegiao());
    }

    @Test
    @DisplayName("Deve retonar a descricao da ocorrencia")
    public void testeRetornarDescricaoOcorencia() {
        Ocorrencia ocorrencia1 = new Ocorrencia("Julia Tecchio", "Vila C Velha", "descricao", StatusOcorrencia.PENDENTE);
        Assertions.assertEquals("descricao", ocorrencia1.getDescricao());
    }

    @Test
    @DisplayName("Deve retonar o statusOcorrencia da ocorrencia")
    public void testeRetornarStatusOcorrenciaOcorencia() {
        Ocorrencia ocorrencia1 = new Ocorrencia("Julia Tecchio", "Vila C Velha", "descricao", StatusOcorrencia.PENDENTE);
        Assertions.assertEquals(StatusOcorrencia.PENDENTE, ocorrencia1.getStatusOcorrencia());
    }
}