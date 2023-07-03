describe("Protetora Adm", () => {
  context("Quando acessar a Pagina home Adm", () => {
    it("Deve renderizar a pagina home", () => {
      cy.visit("http://localhost:5173/HomeAdm");
      cy.get("._home_18641_35").should("be.visible");
    });
    it("Deve clicar na ancora para a page Protetor", () => {
      cy.visit("http://localhost:5173/HomeAdm");
      cy.get('[title="Protetor"] > a').click();
      cy.url().should("include", "/ListarProtetorAdm");
    });
    it("Deve renderizar a pagina protetor adm", () => {
      cy.visit("http://localhost:5173/ListarProtetorAdm");
      cy.get("._protetoradm_a04q8_23").should("be.visible");
    });
    it("Deve conter o menu lateral", () => {
      cy.visit("http://localhost:5173/ListarProtetorAdm");
      cy.get(
        "._section_container_a04q8_5 > :nth-child(1) > :nth-child(1) > ._menu_container_1p54b_13"
      ).should("be.visible");
    });
    it("O menu lateral deve expandir e retrarir ao click", () => {
      cy.visit("http://localhost:5173/ListarProtetorAdm");
      cy.get("._iconetoggle_1p54b_185").click();
      cy.get("._iconetoggle_1p54b_185").click();
      cy.get("._iconetoggle_1p54b_185");
    });
    it("Deve conter o container de listagem de protetor", () => {
      cy.visit("http://localhost:5173/ListarProtetorAdm");
      cy.get("._tabela_a04q8_43").should("be.visible");
    });
    it("Deve conter o modal de protetor", () => {
      cy.visit("http://localhost:5173/ListarProtetorAdm");
      cy.get(":nth-child(2) > :nth-child(6)").should("be.visible");
      cy.get(":nth-child(2) > :nth-child(6)").click();
      cy.get(".ReactModal__Content").should("be.visible");
    });
  });
});
