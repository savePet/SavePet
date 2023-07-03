describe('<Landing Page>', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5173/')
    })

    it('deve exibir a imagem do logo da plataforma', () => {
        cy.get('._logo_xsc0p_33').should('be.visible')
    })

    it('deve exibir o header da página', () => {
        cy.get('._navBar_xsc0p_71').should('be.visible')
    })

    it('deve exibir o texto central', () => {
        cy.get('._content_xsc0p_107 > h1').should('be.visible')
    })

    it('deve exibir o  botao adote', () => {
        cy.get(':nth-child(1) > a > button').should('be.visible')
    })

    it('deve exibir o botao conheça', () => {
        cy.get(':nth-child(2) > a > button').should('be.visible')
    })

    it('deve exibir o botao contato', () => {
        cy.get(':nth-child(3) > a > button').should('be.visible')
    })
    
    it('deve exibir o botao Login', () => {
        cy.get(':nth-child(4) > a > button').should('be.visible')
    })

    it('deve exibir o card protetora', () => {
        cy.get('[style="width: 30%;"] > :nth-child(1) > ._sectio_1c37j_1').should('be.visible')
    })

    it('deve exibir o card animais', () => {
        cy.get('._grid_t8ayd_103 > :nth-child(1) > ._sectio_1c37j_1').should('be.visible')
    })

    it('deve exibir o card fornecedores', () => {
        cy.get('._grid_t8ayd_103 > :nth-child(2) > ._sectio_1c37j_1').should('be.visible')
    })

    it('deve exibir o card voluntario', () => {
        cy.get(':nth-child(3) > ._sectio_1c37j_1').should('be.visible')
    })

    it('deve exibir o card fincanceiro', () => {
        cy.get('[style="width: 30%;"] > :nth-child(2) > ._sectio_1c37j_1').should('be.visible')
    })

    it('deve exibir o card eventos', () => {
        cy.get(':nth-child(4) > ._sectio_1c37j_1').should('be.visible')
    })

    it('deve exibir o card clinicas', () => {
        cy.get(':nth-child(5) > ._sectio_1c37j_1').should('be.visible')
    })

    it('deve exibir o banner conheça', () => {
        cy.get('._render_b7wf4_63').should('be.visible')
    })

    it('deve exibir o item quem somos', () => {
        cy.get('._list_b7wf4_83 > ul > :nth-child(1)').should('be.visible')
    })

    it('deve exibir o item oque fazemos', () => {
        cy.get('._list_b7wf4_83 > ul > :nth-child(2)').should('be.visible')
    })

    it('deve exibir o item como fazemos', () => {
        cy.get('._list_b7wf4_83 > ul > :nth-child(3)').should('be.visible')
    })

    it('deve exibir o item porque fazemos', () => {
        cy.get('._list_b7wf4_83 > ul > :nth-child(4)').should('be.visible')
    })

    it('deve exibir o footer', () => {
        cy.get('._footer_e8hvn_17').should('be.visible')
    })

    it('deve exibir os icones sociais', () => {
        cy.get('._icons_e8hvn_165').should('be.visible')
    })

    it('deve exibir as navegações', () => {
        cy.get('._navigations_e8hvn_149').should('be.visible')
    })
})