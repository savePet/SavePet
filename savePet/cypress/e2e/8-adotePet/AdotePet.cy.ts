describe('<Landing Page>', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5173/Adotepet')
    })

    it('deve exibir a imagem do logo da plataforma', () => {
        cy.get('._logo_d5ld7_53').should('be.visible')
    })

    it('deve exibir a coluna lateral', () => {
        cy.get('._lateral_d5ld7_33').should('be.visible')
    })

    it('deve exibir os filtros', () => {
        cy.get('._filter_d5ld7_63').should('be.visible')
    })

    it('deve exibir os filtros', () => {
        cy.get('._filter_d5ld7_63').should('be.visible')
    })

    it('deve exibir o texto informativo', () => {
        cy.get('._info_d5ld7_159').should('be.visible')
    })

    it('deve exibir o link de algum problema', () => {
        cy.get('._login_d5ld7_135').should('be.visible')
    })

    it('deve exibir os cards dos pets', () => {
        cy.get('._sectio_a22yr_1').should('be.visible')
    })

    it('deve exibir as informações do pet', () => {
        cy.get('._contentC_a22yr_55').should('be.visible')
    })

    it('deve exibir o botao de aplicar filtros', () => {
        cy.get('._sectio_rpkom_1').should('be.visible')
    })

    it('deve exibir o botao de voltar a home', () => {
        cy.get('._a_d5ld7_117').should('be.visible')
    })

    it('deve exibir o checkbox do filtro', () => {
        cy.get('._a_d5ld7_117').should('be.visible')
    })
})