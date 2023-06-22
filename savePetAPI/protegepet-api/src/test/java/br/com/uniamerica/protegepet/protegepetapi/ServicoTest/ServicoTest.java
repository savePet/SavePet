package br.com.uniamerica.protegepet.protegepetapi.ServicoTest;

import br.com.uniamerica.protegepet.protegepetapi.entity.*;
import br.com.uniamerica.protegepet.protegepetapi.service.ServicoService;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigDecimal;


public class ServicoTest {
    
    @Autowired
    public ServicoService servicoService;
    private Servico servico;


    //dados definodos para teste
    private static String nomeNullo;
    private static String nome;
    private static String descricaoNullo;
    private static String descricao;
    private static BigDecimal precoNullo;
    private static BigDecimal precoInvalido;
    private static BigDecimal quantidadeNullo;
    private static BigDecimal quantidade;
    private static TipoFornecedor tipoFornecedorNullo;
    private static TipoFornecedor tipoFornecedor;
    //fim da definição


    @BeforeAll
    public static void definirValoresTest() {
        nomeNullo = null;
        nome = "Racao";
        descricaoNullo = null;
        descricao = "Sabor Carne";
        precoNullo = null;
        precoInvalido = BigDecimal.valueOf(0);
        quantidadeNullo = null;
        quantidade = BigDecimal.valueOf(30);
        tipoFornecedorNullo = null;
        tipoFornecedor = TipoFornecedor.PRODUTO;
    }

    @BeforeEach
    public void inicializarServico() {
        servico = new Servico();
    }

    //Teste Unitario:
    @Test
    @DisplayName("Verifica se todos os campos estão nullos")
    public void VerificarCamposNullos() {
        Assertions.assertThrows(RuntimeException.class, () -> servicoService.validarCadastroServico(nomeNullo, descricaoNullo, precoNullo, quantidadeNullo, tipoFornecedorNullo));
    }

    @Test
    @DisplayName("Verifica se o valor do preco do servico é igual a zero(0)")
    public void verificaValorPrecoIgualZero() {
        Assertions.assertThrows(RuntimeException.class, () -> servicoService.validarCadastroServico(nome, descricao, precoInvalido, quantidade, tipoFornecedor));
    }

    @Test
    @DisplayName("Verifica se o valor do preco do servico é menor do que zero(0)")
    public void verificaValorPrecoMenorZero() {
        precoInvalido = BigDecimal.valueOf(-10);
        Assertions.assertThrows(RuntimeException.class, () -> servicoService.validarCadastroServico(nome, descricao, precoInvalido, quantidade, tipoFornecedor));
    }

    @Test
    @DisplayName("Verifica se o valor da quantidade do produto é igual a zero(0)")
    public void verificaValorQuantidadeIgualZero() {
        quantidade = BigDecimal.valueOf(0);
        Assertions.assertThrows(RuntimeException.class, () -> servicoService.validarCadastroServico(nome, descricao, precoInvalido, quantidade, tipoFornecedor));
    }

    @Test
    @DisplayName("Verifica se o valor da quantidade do produto é menor do que zero(0)")
    public void verificaValorQuantidadeMenorZero() {
        quantidade = BigDecimal.valueOf(-10);
        Assertions.assertThrows(RuntimeException.class, () -> servicoService.validarCadastroServico(nome, descricao, precoInvalido, quantidade, tipoFornecedor));
    }

    @Test
    @DisplayName("Verifica se o tipoFornecedor é invalido")
    public void verificaTipoFornecedorInvalido() {
        Assertions.assertThrows(RuntimeException.class, () -> servicoService.validarCadastroServico(nome, descricao, precoNullo, quantidade, tipoFornecedorNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres do nome é maior que 30")
    public void verificaQuantidadeCaracteresNome() {
        nome = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        Assertions.assertThrows(RuntimeException.class, () -> servicoService.validarCadastroServico(nome, descricao, precoNullo, quantidade, tipoFornecedorNullo));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres do nome é maior que 30")
    public void verificaQuantidadeCaracteres() {
        nome = "RacaoRacaoRacaoRacaoRacaoRacaoRacao";
        Assertions.assertThrows(RuntimeException.class, () -> servicoService.validarCadastroServico(nome, descricao, precoNullo, quantidade, tipoFornecedorNullo));
    }

    @Test
    @DisplayName("Verifica se o valor de preco e quantidade são iguais a zero")
    public void verificaSePrecoEQuantidadeIgualZero() {
        precoInvalido = BigDecimal.valueOf(0);
        quantidade = BigDecimal.valueOf(0);
        Assertions.assertThrows(RuntimeException.class, () -> servicoService.validarCadastroServico(nome, descricao, precoInvalido, quantidade, tipoFornecedorNullo));
    }

    @Test
    @DisplayName("Verifica se o valor de preco e quantidade são menores que zero")
    public void verificaSePrecoEQuantidadeMenorZero() {
        precoInvalido = BigDecimal.valueOf(-10);
        quantidade = BigDecimal.valueOf(-10);
        Assertions.assertThrows(RuntimeException.class, () -> servicoService.validarCadastroServico(nome, descricao, precoInvalido, quantidade, tipoFornecedorNullo));
    }

    @Test
    @DisplayName("Verifica se o valor de nome é diferente de String")
    public void verificaSeNomeEDiferenteString() {
        Assertions.assertThrows(RuntimeException.class, () -> servicoService.validarCadastroServico(nomeNullo, descricao, precoInvalido, quantidade, tipoFornecedor));
    }

    @Test
    @DisplayName("Verifica se o valor de descricao é diferente de String")
    public void verificaSeDescricaoEDiferenteString() {
        Assertions.assertThrows(RuntimeException.class, () -> servicoService.validarCadastroServico(nome, descricaoNullo, precoInvalido, quantidade, tipoFornecedor));
    }

    @Test
    @DisplayName("Verifica se o valor de preco é diferente de BigDecimal")
    public void verificaSePrecoEDiferenteBigDecimal() {
        Assertions.assertThrows(RuntimeException.class, () -> servicoService.validarCadastroServico(nome, descricao, precoNullo, quantidade, tipoFornecedor));
    }

    @Test
    @DisplayName("Verifica se o valor de quantidade é diferente de BigDecimal")
    public void verificaSeQauntidadeEDiferenteBigDecimal() {
        Assertions.assertThrows(RuntimeException.class, () -> servicoService.validarCadastroServico(nome, descricao, precoInvalido, quantidadeNullo, tipoFornecedor));
    }

    //Teste Integração:
    @Test
    @DisplayName("Deve retonar o nome do servico")
    public void testeRetornarNomeServico(){
        Servico servico01 = new Servico("Racao", "Descricao01", BigDecimal.valueOf(500), BigDecimal.valueOf(50), TipoFornecedor.PRODUTO);
        Assertions.assertEquals("Racao", servico01.getNome());
    }

    @Test
    @DisplayName("Deve retonar a descricao do servico")
    public void testeRetornarDescricaoServico(){
        Servico servico01 = new Servico("Racao", "Descricao01", BigDecimal.valueOf(500), BigDecimal.valueOf(50), TipoFornecedor.PRODUTO);
        Assertions.assertEquals("Descricao01", servico01.getDescricao());
    }

    @Test
    @DisplayName("Deve retonar o preco do servico")
    public void testeRetornarPrecoServico(){
        Servico servico01 = new Servico("Racao", "Descricao01", BigDecimal.valueOf(500), BigDecimal.valueOf(50), TipoFornecedor.PRODUTO);
        Assertions.assertEquals(0, servico01.getPreco().compareTo(BigDecimal.valueOf(500)));
    }

    @Test
    @DisplayName("Deve retonar a quantidade do servico")
    public void testeRetornarQuantidadeServico(){
        Servico servico01 = new Servico("Racao", "Descricao01", BigDecimal.valueOf(500), BigDecimal.valueOf(50), TipoFornecedor.PRODUTO);
        Assertions.assertEquals(0, servico01.getQuantidade().compareTo(BigDecimal.valueOf(50)));
    }

    @Test
    @DisplayName("Deve retonar o tipoFornecedor do servico")
    public void testeRetornarTipoFornecedorServico(){
        Servico servico01 = new Servico("Racao", "Descricao01", BigDecimal.valueOf(500), BigDecimal.valueOf(50), TipoFornecedor.PRODUTO);
        Assertions.assertEquals(TipoFornecedor.PRODUTO, servico01.getTipoFornecedor());
    }
}