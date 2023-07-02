describe('<Auth Page>', () => {

    context('Quando acessar a pagina de cadastro do projeto', () => {

        it('Deve verificar se o texto Algum problema? existe', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('p').should("contain.text", "Algum problema?").should("exist")
        })

        it('Deve verificar se o texto Algum problema? esta visivel', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('p').should("contain.text", "Algum problema?").should("be.visible")
        })

        it('Deve verificar se o h1 contain o texto', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('h1').should("contain.text", "Seja um colaborador").should("exist")
        })

        it('Deve verificar se o h1 contain o texto visivel', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('h1').should("contain.text", "Seja um colaborador").should("be.visible")
        })


        it('Deve verificar se a ancora de Contatar existe', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('[href=""] > a').should("exist")
        })

        it('Deve verificar se a palavra Contatar existe na ancora', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('[href=""] > a').should("contain.text", "Contatar").should("exist")
        })

        it('Deve verificar se a palavra Contatar esta visivel', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('[href=""] > a').should("contain.text", "Contatar").should("exist")
        })

        it('Deve verificar se a palavra Contatar esta visivel', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.contains('p', 'Conclua o cadastro para poder ser um dos nossos parceiros').should("exist")
        })

        it('Deve verificar se a palavra Contatar esta visivel', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.contains('p', 'Conclua o cadastro para poder ser um dos nossos parceiros').should("be.visible")
        })

        it('Deve verificar se a iamgem do logo da plataforma existe', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('._logo_1b6va_25').should("exist")
        })

        it('Deve verificar se a iamgem do logo da plataforma esta visivel', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('._logo_1b6va_25').should("be.visible")
        })

        it('Deve verificar se o container lateral esquerdo existe', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('._lateral_1b6va_13').should("exist")
        })

        it('Deve verificar se o container lateral esquerdo esta visivel', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('._lateral_1b6va_13').should("be.visible")
        })

        it('Deve verificar se o container lateral direito existe', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('._section_1b6va_35').should("exist")
        })

        it('Deve verificar se o container lateral direito esta visivel', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('._section_1b6va_35').should("be.visible")
        })

        it('Deve verificar se existe um campo de input do email', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('input[placeholder="Digite seu E-mail"]').should("exist")
        })


        it('Deve verificar se existe um campo de input do email visivel', () => {
            cy.visit('http://localhost:5173/auth')
            cy.get('input[placeholder="Digite seu E-mail"]').should("be.visible")
        })

        it('Deve verificar se existe um campo de input do telefone', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('input[placeholder="Digite seu telefone para contato"]').should("exist")
        })

        it('Deve verificar se existe um campo de input do telefone visivel', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('input[placeholder="Digite seu telefone para contato"]').should("be.visible")
        })

        it('Deve verificar se o placeholder no input do telefone existe', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('input[placeholder="Digite seu telefone para contato"]').invoke('attr', 'placeholder').should('eq', 'Digite seu telefone para contato', "exist")
        })

        it('Deve verificar se o placeholder no input do telefone esta visivel', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('input[placeholder="Digite seu telefone para contato"]').invoke('attr', 'placeholder').should('eq', 'Digite seu telefone para contato', "be.visible")
        })

        it('Deve verificar se o placeholder no input do email existe', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('input[placeholder="Digite seu E-mail"]').invoke('attr', 'placeholder').should('eq', 'Digite seu E-mail', "exist")
        })

        it('Deve verificar se o placeholder no input do email esta visivel', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('input[placeholder="Digite seu E-mail"]').invoke('attr', 'placeholder').should('eq', 'Digite seu E-mail', "be.visible")
        })

        it('Deve verificar se existe a palavra Proximo do botão', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.contains('h2', 'Próximo').should("exist")
        })

        it('Deve verificar se a palavra Próximo esta visivel', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.contains('h2', 'Próximo').should("be.visible")
        })


        it('Deve verificar se o valor do campo do input do email esta sendo pegado/armazenado no campo', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('input[placeholder="Digite seu E-mail"]').type('email01@gmail.com')
            cy.get('input[placeholder="Digite seu E-mail"]').invoke('attr', 'value').should('eq', 'email01@gmail.com')
        })

        it('Deve verificar se o valor do campo do input do telefone esta sendo pegado/armazenado no campo', () => {
            cy.visit('http://localhost:5173/Auth')
            cy.get('input[placeholder="Digite seu telefone para contato"]').type('457111111')
            cy.get('input[placeholder="Digite seu telefone para contato"]').invoke('attr', 'value').should('eq', '457111111')
        })

        describe("E clicar no botão de Próximo", () => {
            it('Deve navegar para a listagem de tarefas ', () => {
                cy.visit('http://localhost:5173/Auth')
                cy.get('._sectio_rpkom_1').click()
                cy.url().should("include", "Count");
            })
        })

    })
})