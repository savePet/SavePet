describe("Ocorrencia Adm", () => {
  context("Quando acessar a Pagina home Adm", () => {
    it("Deve renderizar a pagina home", () => {
      cy.visit("http://localhost:5173/HomeAdm");
      cy.get("._home_18641_35").should("be.visible");
    });

    it("Deve clicar na ancora para a page ocorrencias", () => {
      cy.visit("http://localhost:5173/HomeAdm");
      cy.get('[title="Ocorrencias"] > a').click();
      cy.url().should("include", "/ListarOcorrenciaAdm");
    });
    it("Deve renderizar a pagina ocorrencias adm", () => {
      cy.visit("http://localhost:5173/ListarOcorrenciaAdm");
      cy.get("._ocorrencia_24jey_23").should("be.visible");
    });
    it("Deve conter o menu lateral", () => {
      cy.visit("http://localhost:5173/ListarOcorrenciaAdm");
      cy.get(
        "._section_container_24jey_5 > :nth-child(1) > :nth-child(1) > ._menu_container_1p54b_13"
      ).should("be.visible");
    });
    it("O menu lateral deve expandir e retrarir ao click", () => {
      cy.visit("http://localhost:5173/ListarOcorrenciaAdm");
      cy.get("._iconetoggle_1p54b_185").click();
      cy.get("._iconetoggle_1p54b_185").click();
      cy.get("._iconetoggle_1p54b_185");
    });
    it("Deve conter o container de listagem de ocorrencias", () => {
      cy.visit("http://localhost:5173/ListarOcorrenciaAdm");
      cy.get("._relatorio_ocorrencia_container_24jey_43").should("be.visible");
    });
    it("Deve conter o container de listagem de ocorrencias", () => {
      cy.visit("http://localhost:5173/ListarOcorrenciaAdm");
      cy.get("._card_container_24jey_135").should("be.visible");
      cy.get("._card_container_24jey_135").click();
      cy.get(".ReactModal__Content").should("be.visible");
    });
  });
});
