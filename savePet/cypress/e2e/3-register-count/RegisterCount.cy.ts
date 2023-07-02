describe('<Count Page>', () => {

    context('Quando acessar a pagina de cadastro Count do projeto', () => {

        it('Deve verificar se a barra laetral esquerda existe', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('._lateral_k5q8r_13').should("exist")
        })

        it('Deve verificar se a barra laetral esquerda esta visivel', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('._lateral_k5q8r_13').should("be.visible")
        })

        it('Deve verificar se a imagem de logo existe', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('img').should("exist")
        })

        it('Deve verificar se a imagem de logo esta visivel', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('img').should("be.visible")
        })

        it('Deve verificar se o container lateral direito existe', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('._section_k5q8r_73').should("exist")
        })

        it('Deve verificar se o container lateral direito esta visivel', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('._section_k5q8r_73').should("be.visible")
        })

        it('Deve verificar se o texto Ja tem conta? existe', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('p').should("contain.text", "Ja tem conta?", "exist")
        })

        it('Deve verificar se o texto Ja tem conta? esta visivel', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('p').should("contain.text", "Ja tem conta?", "be.visible")
        })

        it('Deve verificar se a palavra Entrar existe na ancora', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('[href=""] > a').should("contain.text", "Entrar").should("exist")
        })

        it('Deve verificar se a palavra Entrar existe na ancora e é visivel', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('[href=""] > a').should("contain.text", "Entrar").should("be.visible")
        })

        it('Deve verificar se a ancora existe', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('[href=""] > a').should("exist")
        })

        it('Deve verificar se o texto Escolha a sua forma de ajudar existe', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('h1').should("contain.text", "Escolha a sua forma de ajudar", "exist")
        })

        it('Deve verificar se o texto Escolha a sua forma de ajudar está visivel', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('h1').should("contain.text", "Escolha a sua forma de ajudar", "be.visible")
        })


        it('Deve verificar se o texto abaixo existe', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('h3').should("contain.text", "Selecione o tipo de colaboração para que você fornecera para que possamos proseguir com o processo de cadastro .", "exist")
        })

        it('Deve verificar se o texto abaixo está visivel', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('h3').should("contain.text", "Selecione o tipo de colaboração para que você fornecera para que possamos proseguir com o processo de cadastro .", "be.visible")
        })

        it('Deve verificar se o texto abaixo existe', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('h2').should("contain.text", "Próximo", "exist")
        })

        it('Deve verificar se o texto abaixo está visivel', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('h2').should("contain.text", "Próximo", "be.visible")
        })

        it('Deve verificar se o texto Tipo de colaboração esta visivel', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('p').should("contain.text", "Tipo de colaboração", "be.visible")
        })

        it('Deve verificar se o texto Tipo de colaboração existe', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('p').should("contain.text", "Tipo de colaboração", "exist")
        })

        it('Deve verificar se a palavra voltar do botão existe', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('[href="Auth"]').should("contain.text", "voltar").should("exist")
        })

        it('Deve verificar se a palavra voltar do botão esta visivel', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('[href="Auth"]').should("contain.text", "voltar").should("be.visible")
        })

        it('Deve verificar se o botão de voltar existe', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('[href="Auth"]').should("exist")
        })

        it('Deve verificar se o botão de Próximo existe', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('._sectio_rpkom_1').should("exist")
        })

        it('Deve verificar se o botão de Próximo existe', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('._sectio_rpkom_1').should("be.visible")
        })

        it('Deve verificar se o h3 contendo a descricao do tipo de cadastro existe ', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('[href="/ProtectorP1"] > h3').should("exist")
        })

        it('Deve verificar se o h1 contendo a palavra Protetora existe ', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('[href="/ProtectorP1"] > h1').should("exist")
        })

        it('Deve verificar se a palavra protetora do h1 existe', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('[href="/ProtectorP1"] > h1').should("contain.text", "Protetora", "exist")
        })

        it('Deve verificar se a palavra protetora do h1 esta visivel', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('[href="/ProtectorP1"] > h1').should("contain.text", "Protetora", "be.visible")
        })

        it('Deve verificar se o h3 contendo a descricao do tipo de cadastro esta visivel', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('[href="/ProtectorP1"] > h3').should("be.visible")
        })

        it('Deve verificar se o h3 contendo o texto da descricao do tipo cadastro', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('[href="/ProtectorP1"] > h3').should("contain.text", "Você será encarregado de manter os nossos amigos de quatro patas em abrigo temporário.")
        })

        it('Deve verificar se o h3 contendo o texto da descricao do tipo cadastro esta visivel', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('[href="/ProtectorP1"] > h3').should("contain.text", "Você será encarregado de manter os nossos amigos de quatro patas em abrigo temporário.", "be.visible")
        })
        it('Deve verificar se a img de logo de uma casa no bloco de protetora existe', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('[href="/ProtectorP1"] > img').should("exist")
        })

        it('Deve verificar se a img de logo de uma casa no bloco de protetora esta visivel', () => {
            cy.visit('http://localhost:5173/Count')
            cy.get('[href="/ProtectorP1"] > img').should("be.visible")
        })

        describe("E clicar no botão de Voltar", () => {
            it('Deve retornar a pagina de /Auth', () => {
                cy.visit('http://localhost:5173/Count')
                cy.get('[href="Auth"]').click()
                cy.url().should("include", "Auth");
            })
        })

        describe("E clicar no botão de opção de cadastro da protetora", () => {
            it('Deve retornar a pagina de /Auth', () => {
                cy.visit('http://localhost:5173/Count')
                cy.get('[href="/ProtectorP1"]').click()
                cy.url().should("include", "ProtectorP1");
            })
        })
    })
})