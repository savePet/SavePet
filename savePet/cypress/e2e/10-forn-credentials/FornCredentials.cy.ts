

describe('<Forn Credentials>', () => {
    context('Quando acessar a credencial de cadastro do fornecedor', () => {
        it('Deve exibir uma tag p com título da primeira parte do caminho de cadastro', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('p').should("contain.text", "Tipo de colaboração")
        })

        it('Deve exibir uma tag p com título da segunda parte caminho de cadastro', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('p').should("contain.text", "Informações")
        })

        it('Deve exibir uma tag p com título da terceira parte caminho de cadastro', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('p').should("contain.text", "Localização e produto")
        })

        it('Deve exibir uma tag p com o título Algum problema?', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('p').should("contain.text", "Algum problema?")
        })

        it('Deve validar Link com o nome de Contatar em FornCreden', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.contains('Contatar').click()
            cy.location('pathname').should('eq', '/Login')
            cy.go('back')
        })

        it('Deve validar Acora com o nome de Voltar em FornCreden', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.contains('voltar').click()
            cy.location('pathname').should('eq', '/Count')
            cy.go('back')
        })

        it('Deve validar ButtonNxt com o title Proximo em FornCreden ', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.contains('Próximo').click()
            cy.location('pathname').should('eq', '/FornInfo')
            cy.go('back')
        })

        it('Deve exibir uma tag h1 com o título principal da pagina', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('h1').should("contain.text", "Informação do fornecedor")
        })

        it('Deve exibir uma tag p com subtitulo título do titulo principal', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('p').should("contain.text", "Informe os detalhes")
        })

        it('Deve exibir uma tag p com para informar sobre a senha da conta', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('p').should("contain.text", "A senha é usada para entrar na conta junto com o e-mail cadastrado")
        })

        it('Deve exibir uma tag a que sirva para voltar a pagina anterior', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('a').should("contain.text", "voltar")
        })

        it('Deve exibir logo da pagina', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('img').should("be.visible")
        })

        it('Deve exibir uma icone da primeira parte do caminho de cadastro', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('[data-testid=checkcircle-icon]').should("be.visible")
        })

        it('Deve exibir uma icone da segunda parte do caminho de cadastro', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('[data-testid=numbercircletwo-icon]').should("be.visible")
        })

        it('Deve exibir uma icone da terceira parte do caminho de cadastro', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('[data-testid=numbercirclethree-icon]').should("be.visible")
        })

        it('Deve exibir uma Input com o placeholder Nome', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('[placeholder="Nome"]').should("be.visible")
        })

        it('Deve exibir uma Input com o placeholder Cnpj', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('[placeholder="Cnpj"]').should("be.visible")
        })

        it('Deve exibir uma Input com o placeholder senha', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('[placeholder="senha"]').should("be.visible")
        })

        it('Deve exibir uma Input com o placeholder Confirme a senha', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('[placeholder="Confirme a senha"]').should("be.visible")
        })

        it('Deve digitar no Input, Nome', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('[placeholder="Nome"]').type('Joao')
        })

        it('Deve digitar no Input, Cnpj', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('[placeholder="Cnpj"]').type('XX. XXX. XXX/0001-XX')
        })

        it('Deve digitar no Input, senha', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('[placeholder="senha"]').type('123')
        })

        it('Deve digitar no Input, Confirme a senha', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('[placeholder="Confirme a senha"]').type('123')
        })

        it('Deve digitar todos os Input, nome, Cnpj, senha e confirmar senha para navegar para a proxima tela', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('[placeholder="Nome"]').type('Joao')
            cy.get('[placeholder="Cnpj"]').type('XX. XXX. XXX/0001-XX')
            cy.get('[placeholder="senha"]').type('123')
            cy.get('[placeholder="Confirme a senha"]').type('123')
            cy.contains('Próximo').click()
        })

        it('Deve ter um container na lateral onde fica o mapa de progresso do cadastro e a logo', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('._lateral_bslt1_13').should("be.visible")
        })

        it('Deve ter um container, do lado direito da tela onde envolve todas os elementos da tela', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('._section_bslt1_35').should("be.visible")
        })

        it('Deve ter um container, envolvendo as Informação de cadastro do fornecedor', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('._info_bslt1_69').should("be.visible")
        })

        it('Deve ter um container, envolvendo botoes de voltar e proximo', () => {
            cy.visit('http://localhost:5173/FornCreden')
            cy.get('._nav_bslt1_203').should("be.visible")
        })
    })
})
