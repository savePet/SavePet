describe('<ProtectorP2 Page>', () => {

    context('Quando acessar a pagina de cadastro ProtectorP1 do projeto', () => {

        it('Deve verificar se a barra laetral esquerda existe', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('._lateral_nckop_13').should("exist")
        })

        it('Deve verificar se a barra laetral esquerda esta visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('._lateral_nckop_13').should("be.visible")
        })

        it('Deve verificar se a imagem do logo da plataforma existe', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('._logo_nckop_25').should("exist")
        })

        it('Deve verificar se a imagem do logo da plataforma esta visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('._logo_nckop_25').should("be.visible")
        })

        it('Deve verificar se a barra laetral direita existe', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('._section_nckop_35').should("exist")
        })

        it('Deve verificar se a barra laetral direita esta visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('._section_nckop_35').should("be.visible")
        })


        it('Deve verificar se existe um h1 contendo o Localização e Disponibilidade', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('h1').should("contain.text", "Localização e Disponibilidade")
        })

        it('Deve verificar se existe um h1 contendo o Localização e Disponibilidade visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('h1').should("contain.text", "Localização e Disponibilidade", "be.visible")
        })

        it('Deve verificar se existe uma tag p contendo o Tipo de colaboração', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('p').should("contain.text", "Tipo de colaboração")
        })

        it('Deve verificar se existe uma tag p contendo o Tipo de colaboração visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('p').should("contain.text", "Tipo de colaboração", "be.visible")
        })

        it('Deve verificar se existe uma tag p contendo o Informações da protetora', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('p').should("contain.text", "Informações da protetora")
        })

        it('Deve verificar se existe uma tag p contendo o Informações da protetora visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('p').should("contain.text", "Informações da protetora", "be.visible")
        })

        it('Deve verificar se existe uma tag p contendo o Localização e disponibilidade', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('p').should("contain.text", "Localização e disponibilidade")
        })

        it('Deve verificar se existe uma tag p contendo o Localização e disponibilidade visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('p').should("contain.text", "Localização e disponibilidade", "be.visible")
        })


        it('Deve verificar se existe uma tag p contendo o Algum problema?', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('p').should("contain.text", "Algum problema?")
        })

        it('Deve verificar se existe uma tag p contendo o Algum problema? visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('p').should("contain.text", "Algum problema?", "be.visible")
        })

        it('Deve verificar se a ancora de Contar contem a mesma palavra', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('[href=""] > a').should("contain.text", "Contatar")
        })

        it('Deve verificar se a ancora de Contar contem a mesma palavra visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('[href=""] > a').should("contain.text", "Contatar", "be.visible")
        })

        it('Deve verificar se a palavra voltar do botão existe', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('[href="ProtectorP1"]').should("contain.text", "voltar").should("exist")
        })

        it('Deve verificar se a palavra voltar do botão esta visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('[href="ProtectorP1"]').should("contain.text", "voltar").should("be.visible")
        })

        it('Deve verificar se o botão de voltar existe', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('[href="ProtectorP1"]').should("exist")
        })

        it('Deve verificar se o campo de input do Endereço tem seu placeholder', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('input[placeholder="Endereço"]').invoke('attr', 'placeholder').should('eq', 'Endereço')
        })

        it('Deve verificar se o campo de input do Endereço tem seu placeholder visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('input[placeholder="Endereço"]').invoke('attr', 'placeholder').should('eq', 'Endereço', "be.visible")
        })

        it('Deve verificar se o campo de input do Endereço está visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('input[placeholder="Endereço"]').should("be.visible")
        })

        it('Deve verificar se o campo de input do Endereço existe', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('input[placeholder="Endereço"]').should("exist")
        })


        it('Deve verificar se o h2 contendo Próximo existe', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('h2').should("contain.text", "Próximo")
        })

        it('Deve verificar se o h2 contendo Próximo esta visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('h2').should("contain.text", "Próximo", "be.visible")
        })


        it('Deve verificar se o campo de input do Endereço armazena o valor', () => {
            cy.visit('http://localhost:5173/ProtectorP2')
            cy.get('input[placeholder="Endereço"]').type('Endereco01')
            cy.get('input[placeholder="Endereço"]').invoke('attr', 'value').should('eq', 'Endereco01')
        })

       /* describe("E clicar no botão de opção de voltar da pagina ProtectorP1", () => {
            it('Deve retornar a pagina de /ProtectorP1', () => {
                cy.visit('http://localhost:5173/ProtectorP2')
                cy.get('[href="ProtectorP1"]').click()
                cy.url().should("include", "ProtectorP1");
            })
        })*/
    })
})