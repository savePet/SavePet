describe("Home Adm", () => {
  context("Quando acessar a Pagina home Adm", () => {
    it("Deve renderizar a pagina home", () => {
      cy.visit("http://localhost:5173/HomeAdm");
      cy.get("._home_18641_35").should("be.visible");
    });
    it("Deve conter o menu lateral", () => {
      cy.visit("http://localhost:5173/HomeAdm");
      cy.get(
        "._section_container_18641_17 > :nth-child(1) > :nth-child(1) > ._menu_container_1p54b_13"
      ).should("be.visible");
    });
    it("O menu lateral deve expandir e retrarir ao click", () => {
      cy.visit("http://localhost:5173/HomeAdm");
      cy.get("._iconetoggle_1p54b_185").click();
      cy.get("._iconetoggle_1p54b_185").click();
      cy.get("._iconetoggle_1p54b_185")
    });
    it("Deve Conter o container da listagem de ocorrencias", () => {
      cy.visit("http://localhost:5173/HomeAdm");
      cy.get("._relatorio_18641_53").should("be.visible");
    });
    it("Deve Conter o container da listagem de usuarios", () => {
      cy.visit("http://localhost:5173/HomeAdm");
      cy.get("._tabela_18641_107").should("be.visible");
    });
    it("Deve Conter o container da listagem de ocorrencias lateral", () => {
      cy.visit("http://localhost:5173/HomeAdm");
      cy.get("._relatorio_ocorrencia_18641_187").should("be.visible");
    });
  });
});
