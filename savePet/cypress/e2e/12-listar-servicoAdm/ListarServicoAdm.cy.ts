

describe('<Listar Serviços>', () => {
    context('Quando acessar a pagian ServiçoAdm', () => {
        it('Deve exibir uma tag th com ID', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('th').should("contain.text", "ID")
        })

        it('Deve exibir uma tag th com NOME', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('th').should("contain.text", "NOME")
        })

        it('Deve exibir uma tag th com PREÇO', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('th').should("contain.text", "PREÇO")
        })

        it('Deve exibir uma tag th com QUANTIDADE', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('th').should("contain.text", "QUANTIDADE")
        })

        it('Deve exibir uma tag th com CONTATO FORNECEDOR', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('th').should("contain.text", "CONTATO FORNECEDOR")
        })

       it('Deve exibir uma tag td com ID', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('table > :nth-child(2) > :nth-child(1)').should('be.visible')
        })

        it('Deve exibir uma tag td com Nome', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('table > :nth-child(2) > :nth-child(2)').should("be.visible")
        })

        it('Deve exibir uma tag td com Preco', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('table > :nth-child(2) > :nth-child(3)').should("be.visible")
        })

        it('Deve exibir uma tag td com Quantidade', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('table > :nth-child(2) > :nth-child(4)').should("be.visible")
        })

        it('Deve exibir uma tag td com Telefone', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get(':nth-child(2) > :nth-child(5)').should("be.visible")
        })

        it('Deve exibir uma tag td com Email', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get(':nth-child(2) > :nth-child(5)').should("be.visible")
        })

        it('Deve exibir icone com nome de Scroll', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('[data-testid=icon-scroll]').should("be.visible")
        })

        it('Deve exibir icone de nome close1', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('img').should("be.visible")
        })

        it('Deve exibir uma tag p com Serviço do Fornecedor', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('p').should("contain.text", "Serviço do Fornecedor")
        })

        it('Deve exibir uma tag p com ID: no modal', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('p').should("contain.text", "ID:")
        })

        it('Deve exibir uma tag p com Nome: no modal', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('p').should("contain.text", "Nome:")
        })

        it('Deve exibir uma tag p com Preço: no modal', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('p').should("contain.text", "Preço:")
        })

        it('Deve exibir uma tag p com Quantidade: no modal', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('p').should("contain.text", "Quantidade:")
        })

        it('Deve exibir uma tag p com Email: no modal', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('p').should("contain.text", "Email:")
        })

        it('Deve exibir uma tag p com Telefone: no modal', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('p').should("contain.text", "Telefone:")
        })

        it('Deve exibir uma tag p com a informacao do ID no Modal', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('table > :nth-child(2) > :nth-child(2)').should('be.visible')
        })

        it('Deve exibir uma tag p com a informacao do Nome no Modal', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get(':nth-child(3) > ._descricao_info_zoups_251').should('be.visible')
        })

        it('Deve exibir uma tag p com a informacao do Preço no Modal', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get(':nth-child(4) > ._descricao_info_zoups_251').should('be.visible')
        })

        it('Deve exibir uma tag p com a informacao do Quantidade no Modal', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get(':nth-child(5) > ._descricao_info_zoups_251').should('be.visible')
        })

        it('Deve exibir  uma tag p com a informacao do Email no Modal', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get(':nth-child(6) > ._descricao_info_zoups_251').should('be.visible')
        })

        it('Deve exibir  uma tag p com a informacao do Telefone no Modal', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get(':nth-child(7) > ._descricao_info_zoups_251').should('be.visible')
        })

        it('Deve exibir o Modal ao clicar no icone Scroll', () => {
            cy.visit('http://localhost:5173/ServiçoAdm')
            cy.get('[data-testid=icon-scroll]').click()
            cy.get('.ReactModal__Content').should('be.visible')
        })

    })
})
