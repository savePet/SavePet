describe('<Landing Page>', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5173/Confirmation')
    })

    it('deve exibir a imagem do logo da plataforma', () => {
        cy.get('._logo_nckop_25').should('be.visible')
    })

    it('deve exibir a coluna lateral', () => {
        cy.get('._lateral_nckop_13').should('be.visible')
    })

    it('deve exibir o texto informativo', () => {
        cy.get('._enum_nckop_117').should('be.visible')
    })

    it('deve exibir o link de contato', () => {
        cy.get('._login_nckop_43').should('be.visible')
    })

    it('deve exibir o botao de voltar', () => {
        cy.get('._sectio_rpkom_1').should('be.visible')
    })
})