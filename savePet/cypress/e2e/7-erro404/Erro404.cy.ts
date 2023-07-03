describe('<Landing Page>', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5173/Error')
    })

    it('deve exibir a imagem do logo da plataforma', () => {
        cy.get('._logo_npiq9_19').should('be.visible')
    })

    it('deve exibir o titulo da pagina', () => {
        cy.get('._title_npiq9_35').should('be.visible')
    })

    it('deve exibir um mini texto', () => {
        cy.get('._cont_npiq9_51').should('be.visible')
    })

    it('deve exibir o numero do erro', () => {
        cy.get('._number_npiq9_83').should('be.visible')
    })
})