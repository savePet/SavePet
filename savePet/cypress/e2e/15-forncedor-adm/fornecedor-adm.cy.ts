describe("Fornecedor Adm", () => {
  context("Quando acessar a Pagina home Adm", () => {
    it("Deve renderizar a pagina home", () => {
      cy.visit("http://localhost:5173/HomeAdm");
      cy.get("._home_18641_35").should("be.visible");
    });
    it("Deve clicar na ancora para a page fornecedor", () => {
      cy.visit("http://localhost:5173/HomeAdm");
      cy.get('[title="Fornecedor"] > a').click();
      cy.url().should("include", "/ListarFornecedorAdm");
    });
    it("Deve renderizar a pagina fornecedor adm", () => {
      cy.visit("http://localhost:5173/ListarFornecedorAdm");
      cy.get("._fornecedoradm_bh1ws_23").should("be.visible");
    });
    it("Deve conter o menu lateral", () => {
      cy.visit("http://localhost:5173/ListarFornecedorAdm");
      cy.get(
        "._section_container_bh1ws_5 > :nth-child(1) > :nth-child(1)"
      ).should("be.visible");
    });
    it("O menu lateral deve expandir e retrarir ao click", () => {
      cy.visit("http://localhost:5173/ListarFornecedorAdm");
      cy.get("._iconetoggle_1p54b_185").click();
      cy.get("._iconetoggle_1p54b_185").click();
      cy.get("._iconetoggle_1p54b_185");
    });
    it("Deve conter o container de listagem de fornecedores", () => {
      cy.visit("http://localhost:5173/ListarFornecedorAdm");
      cy.get("._tabela_bh1ws_43").should("be.visible");
    });
    it("Deve conter o modal ao clicar nas informaçoes de fornecedor", () => {
      cy.visit("http://localhost:5173/ListarFornecedorAdm");
      cy.get(":nth-child(2) > :nth-child(8)").should("be.visible");
      cy.get(":nth-child(2) > :nth-child(8)").click();
      cy.get(".ReactModal__Content").should("be.visible");
    });
  });
});
