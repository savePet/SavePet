describe('<ProtectorP1 Page>', () => {

    context('Quando acessar a pagina de cadastro ProtectorP1 do projeto', () => {

        it('Deve verificar se a barra laetral esquerda existe', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('._lateral_zyf36_13').should("exist")
        })

        it('Deve verificar se a imd do logo da plataforma existe', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('._logo_zyf36_25').should("exist")
        })

        it('Deve verificar se a imd do logo da plataforma esta visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('._logo_zyf36_25').should("be.visible")
        })

        it('Deve verificar se a barra lateral direta existe', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('._section_zyf36_35').should("exist")
        })

        it('Deve verificar se a ancora de Contar exist', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('[href=""] > a').should("exist")
        })

        it('Deve verificar se a ancora de Contar contem a mesma palavra', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('[href=""] > a').should("contain.text", "Contatar")
        })

        it('Deve verificar se a ancora de Contar contem a mesma palavra visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('[href=""] > a').should("contain.text", "Contatar", "be.visible")
        })

        it('Deve verificar se existe um h1 com o texto Informação da protetora ', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('h1').should("contain.text", "Informação da protetora")
        })

        it('Deve verificar se existe um h1 com o texto Informação da protetora visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('h1').should("contain.text", "Informação da protetora", "be.visible")
        })

        it('Deve verificar se existe uma tag p com o texto Tipo de colaboração existe', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('p').should("contain.text", "Tipo de colaboração", "exist")
        })

        it('Deve verificar se existe uma tag p com o texto Tipo de colaboração esta visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('p').should("contain.text", "Tipo de colaboração", "be.visible")
        })

        it('Deve verificar se existe uma tag p com texto Informações da protetora', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('p').should("contain.text", "Informações da protetora", "exist")
        })

        it('Deve verificar se existe uma tag p com texto Informações da protetora e estar visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('p').should("contain.text", "Informações da protetora", "be.visible")
        })

        it('Deve verificar se existe uma tag p com texto Informe os detalhes', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('p').should("contain.text", "Informe os detalhes", "exist")
        })

        it('Deve verificar se existe uma tag p com texto Informe os detalhes e estar visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('p').should("contain.text", "Informe os detalhes", "be.visible")
        })

        it('Deve verificar se existe o texto abaixo', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('p').should("contain.text", "A senha é usada para entrar na conta junto com o e-mail cadastrado", "exist")
        })

        it('Deve verificar se existe o texto abaixo e está visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('p').should("contain.text", "A senha é usada para entrar na conta junto com o e-mail cadastrado", "be.visible")
        })

        it('Deve verificar se existe uma tag p do texto Localização e disponibilidade visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('p').should("contain.text", "Localização e disponibilidade", "exist")
        })

        it('Deve verificar se existe uma tag p do texto Localização e disponibilidade visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('p').should("contain.text", "Localização e disponibilidade", "be.visible")
        })

        it('Deve verificar se existe uma tag p do texto Algum problema? visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('p').should("contain.text", "Algum problema?", "exist")
        })

        it('Deve verificar se existe uma tag p do texto Algum problema? visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('p').should("contain.text", "Algum problema?", "be.visible")
        })

        it('Deve verificar se existe um campo de input do nome', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('input[placeholder="Nome"]').should("exist")
        })

        it('Deve verificar se existe um campo de input do nome visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('input[placeholder="Nome"]').should("be.visible")
        })

        it('Deve verificar se existe um campo de input da senha', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('input[placeholder="senha"]').should("exist")
        })

        it('Deve verificar se existe um campo de input da senha visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('input[placeholder="senha"]').should("be.visible")
        })

        it('Deve verificar se existe um campo de input de Confirme a senha', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('input[placeholder="Confirme a senha"]').should("exist")
        })

        it('Deve verificar se existe um campo de input de Confirme a senha visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('input[placeholder="Confirme a senha"]').should("be.visible")
        })


        it('Deve verificar se a palavra voltar do botão existe', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('[href="Count"]').should("contain.text", "voltar").should("exist")
        })

        it('Deve verificar se a palavra voltar do botão esta visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('[href="Count"]').should("contain.text", "voltar").should("be.visible")
        })

        it('Deve verificar se o botão de voltar existe', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('[href="Count"]').should("exist")
        })

        it('Deve verificar se o campo de input do nome tem seu placeholder', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('input[placeholder="Nome"]').invoke('attr', 'placeholder').should('eq', 'Nome')
        })

        it('Deve verificar se o campo de input do nome tem seu placeholder visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('input[placeholder="Nome"]').invoke('attr', 'placeholder').should('eq', 'Nome', "be.visible")
        })

        it('Deve verificar se o campo de input da senha tem seu placeholder', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('input[placeholder="senha"]').invoke('attr', 'placeholder').should('eq', 'senha')
        })

        it('Deve verificar se o campo de input da senha tem seu placeholder visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('input[placeholder="senha"]').invoke('attr', 'placeholder').should('eq', 'senha', "be.visible")
        })


        it('Deve verificar se o campo de input de Confirme a senha tem seu placeholder', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('input[placeholder="Confirme a senha"]').invoke('attr', 'placeholder').should('eq', 'Confirme a senha')
        })

        it('Deve verificar se o campo de input de Confirme a senha tem seu placeholder visivel', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('input[placeholder="Confirme a senha"]').invoke('attr', 'placeholder').should('eq', 'Confirme a senha', "be.visible")
        })

        it('Deve verificar se o campo de input do nome armazena o valor', () => {
            cy.visit('http://localhost:5173/ProtectorP1')
            cy.get('input[placeholder="Nome"]').type('Nome01')
            cy.get('input[placeholder="Nome"]').invoke('attr', 'value').should('eq', 'Nome01')
        })

        describe("E clicar no botão de opção de voltar da pagina ProtectorP1", () => {
            it('Deve retornar a pagina de /Count', () => {
                cy.visit('http://localhost:5173/ProtectorP1')
                cy.get('[href="Count"]').click()
                cy.url().should("include", "Count");
            })


        })

        describe("E clicar no botão de opção de Próximo da pagina ProtectorP1", () => {
            it('Deve redirecionar a pagina de ProtectorP2/', () => {
                cy.visit('http://localhost:5173/ProtectorP1')
                cy.get('._sectio_rpkom_1').click()
                cy.url().should("include", "ProtectorP2");
            })
        })
    })
})