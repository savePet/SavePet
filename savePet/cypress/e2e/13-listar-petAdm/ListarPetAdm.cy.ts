

describe('<Listar PetAdm>', () => {
    context('Quando acessar a pagian ListarPetAdm', () => {
        it('Deve exibir uma tag th com ID', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('th').should("contain.text", "ID")
        })

        it('Deve exibir uma tag th com RAÇA', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('th').should("contain.text", "RAÇA")
        })

        it('Deve exibir uma tag th com STATUSSAUDE', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('th').should("contain.text", "STATUSSAUDE")
        })

        it('Deve exibir uma tag th com ESPECIE', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('th').should("contain.text", "ESPECIE")
        })

        it('Deve exibir uma tag th com CONTATO PORTEFISICO', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('th').should("contain.text", "PORTEFISICO")
        })

        it('Deve exibir uma tag th com GENERO', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('th').should("contain.text", "GENERO")
        })

       it('Deve exibir uma tag td com ID', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('table > :nth-child(2) > :nth-child(1)').should('be.visible')
        })

        it('Deve exibir uma tag td com RAÇA', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('table > :nth-child(2) > :nth-child(2)').should("be.visible")
        })

        it('Deve exibir uma tag td com STATUSSAUDE', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('table > :nth-child(2) > :nth-child(3)').should("be.visible")
        })

        it('Deve exibir uma tag td com ESPECIE', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('table > :nth-child(2) > :nth-child(4)').should("be.visible")
        })

        it('Deve exibir uma tag td com PORTEFISICO', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get(':nth-child(2) > :nth-child(5)').should("be.visible")
        })

        it('Deve exibir uma tag td com GENERO', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get(':nth-child(2) > :nth-child(5)').should("be.visible")
        })

        it('Deve exibir icone com nome de Scroll', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('[data-testid=icon-scroll]').should("be.visible")
        })

        it('Deve exibir icone de nome close1', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('img').should("be.visible")
        })

        it('Deve exibir uma tag p com Animal', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('p').should("contain.text", "Animal")
        })

        it('Deve exibir uma tag p com ID: no modal', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('p').should("contain.text", "ID:")
        })

        it('Deve exibir uma tag p com Raça: no modal', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('p').should("contain.text", "Raça:")
        })

        it('Deve exibir uma tag p com StatusSaude: no modal', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('p').should("contain.text", "StatusSaude:")
        })

        it('Deve exibir uma tag p com Especie: no modal', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('p').should("contain.text", "Especie:")
        })

        it('Deve exibir uma tag p com PorteFisico: no modal', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('p').should("contain.text", "PorteFisico:")
        })

        it('Deve exibir uma tag p com Genero: no modal', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('p').should("contain.text", "Genero:")
        })

        it('Deve exibir uma tag p com Cor: no modal', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('p').should("contain.text", "Cor:")
        })

        it('Deve exibir uma tag P com informacao ID Modal', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get(':nth-child(2) > ._descricao_info_pga9a_259').should('be.visible')
        })

        it('Deve exibir uma tag P com informacao Raça: Modal', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get(':nth-child(3) > ._descricao_info_pga9a_259').should('be.visible')
        })

      it('Deve exibir uma tag P com informacao StatusSaude: Modal', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get(':nth-child(4) > ._descricao_info_pga9a_259').should('be.visible')
        })

        it('Deve exibir uma tag P com informacao Especie: Modal', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get(':nth-child(5) > ._descricao_info_pga9a_259').should('be.visible')
        })
 
        it('Deve exibir uma tag P com informacao PorteFisico: Modal', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get(':nth-child(6) > ._descricao_info_pga9a_259').should('be.visible')
        })

        it('Deve exibir uma tag P com informacao Genero: Modal', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get(':nth-child(7) > ._descricao_info_pga9a_259').should('be.visible')
        })

        it('Deve exibir o Modal ao clicar no icone Scroll', () => {
            cy.visit('http://localhost:5173/ListarPetAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('.ReactModal__Content').should('be.visible')
        })

    })
})
