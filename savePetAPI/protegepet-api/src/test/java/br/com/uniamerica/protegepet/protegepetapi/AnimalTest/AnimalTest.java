package br.com.uniamerica.protegepet.protegepetapi.AnimalTest;

import br.com.uniamerica.protegepet.protegepetapi.entity.*;
import br.com.uniamerica.protegepet.protegepetapi.service.AnimalService;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;

public class AnimalTest {
    @Autowired
    public AnimalService animalService;
    private Animal animal;


    //dados definodos para teste
    private static Especie especie;
    private static Especie especieNullo;
    private static Raca raca;
    private static Raca racaNullo;
    private static Genero genero;
    private static Genero generoNullo;
    private static String descricao;
    private static String descricaoNullo;
    private static PorteFisico porteFisico;
    private static PorteFisico porteFisicoNullo;
    private static Cor cor;
    private static Cor corNullo;
    private static StatusSaude statusSaude;
    private static StatusSaude statusSaudeNullo;

    private static String imagem;

    //fim da definição


    @BeforeAll
    public static void definirValoresTest() {
        especieNullo = null;
        especie = Especie.CACHORRO;
        racaNullo = null;
        raca = Raca.BENGAL;
        generoNullo = null;
        genero = Genero.MASCULINO;
        descricaoNullo = null;
        descricao = "Descricao01";
        porteFisicoNullo = null;
        porteFisico = PorteFisico.PEQUENO;
        corNullo = null;
        cor = Cor.BRANCO;
        statusSaudeNullo = null;
        statusSaude = StatusSaude.EMTRATAMENTO;
        imagem = null;
    }

    @BeforeEach
    public void inicializarProtetora() {
        animal = new Animal();
    }

    //Teste Unitario:
    @Test
    @DisplayName("Verifica se todos os campos estão nullos")
    public void VerificaCamposNullos() {
        Assertions.assertThrows(RuntimeException.class, () -> animalService.validarCadastroAnimal(especieNullo, racaNullo, generoNullo, descricaoNullo, porteFisicoNullo, corNullo, statusSaudeNullo, imagem));
    }

    @Test
    @DisplayName("Verifica se especie é diferente do tipo Enum")
    public void VerificaSeEspecieEDiferenteEnum() {
        Assertions.assertThrows(RuntimeException.class, () -> animalService.validarCadastroAnimal(especieNullo, raca, genero, descricao, porteFisico, cor, statusSaude, imagem));
    }

    @Test
    @DisplayName("Verifica se raca é diferente do tipo Enum")
    public void VerificaSeRacaEDiferenteEnum() {
        Assertions.assertThrows(RuntimeException.class, () -> animalService.validarCadastroAnimal(especie, racaNullo, genero, descricao, porteFisico, cor, statusSaude, imagem));
    }

    @Test
    @DisplayName("Verifica se genero é diferente do tipo Enum")
    public void VerificaSeGeneroEDiferenteEnum() {
        Assertions.assertThrows(RuntimeException.class, () -> animalService.validarCadastroAnimal(especie, raca, generoNullo, descricao, porteFisico, cor, statusSaude, imagem));
    }

    @Test
    @DisplayName("Verifica se descricao é diferente do tipo String")
    public void VerificaSeDescricaoEDiferenteString() {
        Assertions.assertThrows(RuntimeException.class, () -> animalService.validarCadastroAnimal(especie, raca, genero, descricaoNullo, porteFisico, cor, statusSaude, imagem));
    }

    @Test
    @DisplayName("Verifica se porteFisico é diferente do tipo Enum")
    public void VerificaSePorteFisicoEDiferenteEnum() {
        Assertions.assertThrows(RuntimeException.class, () -> animalService.validarCadastroAnimal(especie, raca, genero, descricao, porteFisicoNullo, cor, statusSaude, imagem));
    }

    @Test
    @DisplayName("Verifica se cor é diferente do tipo Enum")
    public void VerificaSeCorEDiferenteEnum() {
        Assertions.assertThrows(RuntimeException.class, () -> animalService.validarCadastroAnimal(especie, raca, genero, descricao, porteFisico, corNullo, statusSaude, imagem));
    }

    @Test
    @DisplayName("Verifica se statusSaude é diferente do tipo Enum")
    public void VerificaSeStatusSaudeEDiferenteEnum() {
        Assertions.assertThrows(RuntimeException.class, () -> animalService.validarCadastroAnimal(especie, raca, genero, descricao, porteFisico, cor, statusSaudeNullo, imagem));
    }

    @Test
    @DisplayName("Verifica se a quantidade de caracteres da descricao excedeu o limite")
    public void VerificaQuantidadeCaracteresDescricao() {
        descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum ultricies aliquet. Donec porttitor turpis non odio porta, et feugiat sapien congue. Nullam ultrices vulputate magna, eu malesuada arcu luctus ac. Sed dignissim tellus ac dolor ultricies, a lacinia nunc hendrerit. Suspendisse eu diam sit amet tortor elementum fringilla at sed tortor. Cras ac feugiat justo, sit amet laoreet lorem. Mauris eget justo quis ligula vehicula semper. Nam at lacus non neque aliquet varius.";
        Assertions.assertThrows(RuntimeException.class, () -> animalService.validarCadastroAnimal(especie, raca, genero, descricao, porteFisico, cor, statusSaude, imagem));
    }

    @Test
    @DisplayName("Verifica se o valor atribuido a especie tem exito")
    public void VerificaSeEspecieEAtribuidoComSuccesso() {
        especie = Especie.CACHORRO;
        Assertions.assertEquals(Especie.CACHORRO, especie);
    }

    @Test
    @DisplayName("Verifica se o valor atribuido a raca tem exito")
    public void VerificaSeRacaEAtribuidoComSuccesso() {
        raca = Raca.BENGAL;
        Assertions.assertEquals(Raca.BENGAL, raca);
    }

    @Test
    @DisplayName("Verifica se o valor atribuido a genero tem exito")
    public void VerificaSeGeneroEAtribuidoComSuccesso() {
        genero = Genero.MASCULINO;
        Assertions.assertEquals(Genero.MASCULINO, genero);
    }

    @Test
    @DisplayName("Verifica se o valor atribuido a descricao tem exito")
    public void VerificaSeDescricaoEAtribuidoComSuccesso() {
        descricao = "Descricao01";
        Assertions.assertEquals("Descricao01", descricao);
    }

    @Test
    @DisplayName("Verifica se o valor atribuido a porteFisico tem exito")
    public void VerificaSePorteFisicoEAtribuidoComSuccesso() {
        porteFisico = PorteFisico.PEQUENO;
        Assertions.assertEquals(PorteFisico.PEQUENO, porteFisico);
    }

    @Test
    @DisplayName("Verifica se o valor atribuido a cor tem exito")
    public void VerificaSeCorEAtribuidoComSuccesso() {
        cor = Cor.BRANCO;
        Assertions.assertEquals(Cor.BRANCO, cor);
    }

    @Test
    @DisplayName("Verifica se o valor atribuido a statusSaude tem exito")
    public void VerificaSeStatusSaudeEAtribuidoComSuccesso() {
        statusSaude = StatusSaude.EMTRATAMENTO;
        Assertions.assertEquals(StatusSaude.EMTRATAMENTO, statusSaude);
    }

    //Teste Integração:
    @Test
    @DisplayName("Deve retonar a especie do animal")
    public void testeRetornarEspecieAnimal() {
        Animal animal1 = new Animal(Especie.CACHORRO,Raca.BENGAL, Genero.MASCULINO, "descricao", PorteFisico.PEQUENO, Cor.BRANCO, StatusSaude.CRONICO, imagem);
        Assertions.assertEquals(Especie.CACHORRO, animal1.getEspecie());
    }

    @Test
    @DisplayName("Deve retonar a raca do animal")
    public void testeRetornarRacaAnimal() {
        Animal animal1 = new Animal(Especie.CACHORRO,Raca.BENGAL, Genero.MASCULINO, "descricao", PorteFisico.PEQUENO, Cor.BRANCO, StatusSaude.CRONICO,  imagem);
        Assertions.assertEquals(Raca.BENGAL, animal1.getRaca());
    }

    @Test
    @DisplayName("Deve retonar o genero do animal")
    public void testeRetornarGeneroAnimal() {
        Animal animal1 = new Animal(Especie.CACHORRO,Raca.BENGAL, Genero.MASCULINO, "descricao", PorteFisico.PEQUENO, Cor.BRANCO, StatusSaude.CRONICO, imagem);
        Assertions.assertEquals(Genero.MASCULINO, animal1.getGenero());
    }

    @Test
    @DisplayName("Deve retonar a descricao do animal")
    public void testeRetornarDescricaoAnimal() {
        Animal animal1 = new Animal(Especie.CACHORRO,Raca.BENGAL, Genero.MASCULINO, "descricao", PorteFisico.PEQUENO, Cor.BRANCO, StatusSaude.CRONICO, imagem);
        Assertions.assertEquals("descricao", animal1.getDescricao());
    }

    @Test
    @DisplayName("Deve retonar o porteFisico do animal")
    public void testeRetornarPorteFisicoAnimal() {
        Animal animal1 = new Animal(Especie.CACHORRO,Raca.BENGAL, Genero.MASCULINO, "descricao", PorteFisico.PEQUENO, Cor.BRANCO, StatusSaude.CRONICO, imagem);
        Assertions.assertEquals(PorteFisico.PEQUENO, animal1.getPorteFisico());
    }

    @Test
    @DisplayName("Deve retonar a cor do animal")
    public void testeRetornarCorAnimal() {
        Animal animal1 = new Animal(Especie.CACHORRO,Raca.BENGAL, Genero.MASCULINO, "descricao", PorteFisico.PEQUENO, Cor.BRANCO, StatusSaude.CRONICO, imagem);
        Assertions.assertEquals(Cor.BRANCO, animal1.getCor());
    }

    @Test
    @DisplayName("Deve retonar o statusSaude do animal")
    public void testeRetornarStatusSaudeAnimal() {
        Animal animal1 = new Animal(Especie.CACHORRO,Raca.BENGAL, Genero.MASCULINO, "descricao", PorteFisico.PEQUENO, Cor.BRANCO, StatusSaude.CRONICO, imagem);
        Assertions.assertEquals(StatusSaude.CRONICO, animal1.getStatusSaude());
    }
}