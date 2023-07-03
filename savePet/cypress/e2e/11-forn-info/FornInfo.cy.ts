

describe('<Forn Infor>', () => {
    context('Quando acessar o informe do fornecedor no cadastro', () => {
        it('Deve exibir uma tag p com título da primeira parte do caminho de cadastro', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('p').should("contain.text", "Tipo de colaboração")
        })

        it('Deve exibir uma tag p com título da segunda parte caminho de cadastro', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('p').should("contain.text", "Informações")
        })

        it('Deve exibir uma tag p com título da terceira parte caminho de cadastro', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('p').should("contain.text", "Localização e Produto")
        })

        it('Deve exibir uma tag p com o título Algum problema?', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('p').should("contain.text", "Algum problema?")
        })

        it('Deve validar Link com o nome de Contatar em FornInfo', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.contains('Contatar').click()
            cy.location('pathname').should('eq', '/Login')
            cy.go('back')
        })

        it('Deve validar Acora com o nome de Voltar em FornInfo', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.contains('voltar').click()
            cy.location('pathname').should('eq', '/FornCreden')
            cy.go('back')
        })

        it('Deve validar ButtonNxt com o title Proximo em FornInfo', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.contains('Próximo').click()
            cy.location('pathname').should('eq', '/Confirmation')
            cy.go('back')
        })

        it('Deve exibir uma tag h1 com o título principal da pagina', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('h1').should("contain.text", "Localização e tipo de produto")
        })

        it('Deve exibir uma tag p com subtitulo título do titulo principal', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('p').should("contain.text", "Informe os dados de Localização e o que será fornecido.")
        })

        it('Deve exibir uma tag p para servivir de titulo para o dropdown', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('p').should("contain.text", "Irei fornecer:")
        })

        it('Deve exibir uma tag a que sirva para voltar a pagina anterior', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('a').should("contain.text", "voltar")
        })

        it('Deve exibir logo da pagina', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('img').should("be.visible")
        })

        it('Deve exibir uma icone da primeira parte do caminho de cadastro', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('[data-testid=checkcircleicon]').should("be.visible")
        })

        it('Deve exibir uma icone da segunda parte do caminho de cadastro', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('[data-testid=Checkcircleicon]').should("be.visible")
        })

        it('Deve exibir uma icone da terceira parte do caminho de cadastro', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('[data-testid=numbercirclethreeicon]').should("be.visible")
        })

        it('Deve exibir uma Input com o placeholder Endereço', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('[placeholder="Endereço"]').should("be.visible")
        })

        it('Deve digitar no Input, Endereço', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('[placeholder="Endereço"]').type('Rua1')
        })

        it('Deve ter um Dropdown dos tipo de servico que o fornecedor vai oferecer', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('[data-testid=click]').click()
            cy.contains('Produto').should("be.visible")
            cy.contains('Mão de obra').should("be.visible")
        })

        it('Deve digitar o Input, Endereço e escolher Produto no dropdown para navegar para a proxima tela', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('[placeholder="Endereço"]').type('Rua1')
            cy.get('[data-testid=click]').click()
            cy.contains('Produto').click()
            cy.contains('Próximo').click()
        })

        it('Deve digitar o Input, Endereço e escolher Mão de obra no dropdown para navegar para a proxima tela', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('[placeholder="Endereço"]').type('Rua1')
            cy.get('[data-testid=click]').click()
            cy.contains('Mão de obra').click()
            cy.contains('Próximo').click()
        })

        it('Deve exibir Space onde exibe Selecionar ', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('[data-testid=space]').should("be.visible")
        })

        it('Deve ter um container na lateral esquerda onde fica o mapa de progresso do cadastro e a logo', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('._lateral_197d6_13').should("be.visible")
        })


        it('Deve ter um container, do lado direito da tela onde envolve todas os elementos da tela', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('._lateral_197d6_13').should("be.visible")
        })

        it('Deve ter um container, envolvendo as Localização e tipo de produto', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('._info_197d6_69').should("be.visible")
        })

        it('Deve ter um container, envolvendo botoes de voltar e proximo', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('._nav_197d6_203').should("be.visible")
        })

        it('Deve ter uma opcao de selecionar', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('[data-testid=click]').should("be.visible")
        })

        it('Deve ter um container, envolvendo a opcao de Selecionar e a tag p Irei fornecer:', () => {
            cy.visit('http://localhost:5173/FornInfo')
            cy.get('._hours_197d6_235').should("be.visible")
        })



    })
})
