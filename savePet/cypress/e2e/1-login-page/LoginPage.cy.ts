describe('<Login Page>', () => {

  context('Quando acessar a pagina de login do projeto', () => {

      it('Deve verificar se a imagem de logo da plataforma existe', () => {
          cy.visit(' http://localhost:5173/Login')
          cy.get('._logo_1ycg5_39').should("exist")
      })

      it('Deve verificar se imagem do logo está visivel', () => {
          cy.visit(' http://localhost:5173/Login')
          cy.get('._logo_1ycg5_39').should("be.visible")
      })

      it('Deve conter o container de fundo da imagem de fundo', () => {
          cy.visit(' http://localhost:5173/Login')
          cy.get('._view_1ycg5_1').should("exist")
      })

      it('Deve verificar se o texto Entrar no campo de login existe', () => {
          cy.visit(' http://localhost:5173/Login')
          cy.get('._credentials_1ycg5_49 > h1').should("exist")
      })

      it('Deve verificar se o texto Entrar no campo de login está visivel', () => {
          cy.visit(' http://localhost:5173/Login')
          cy.get('._credentials_1ycg5_49 > h1').should("be.visible")
      })

      it('Deve verificar se o container lateral esquerdo contendo os campos dos valores para login existe', () => {
          cy.visit(' http://localhost:5173/Login')
          cy.get('._credentials_1ycg5_49').should("exist")
      })

      it('Deve verificar se o container lateral esquerdo contendo os campos dos valores para login está visivel', () => {
          cy.visit(' http://localhost:5173/Login')
          cy.get('._credentials_1ycg5_49').should("be.visible")
      })

      it('Deve verificar se contem o texto da label do campo email', () => {
          cy.visit(' http://localhost:5173/Login')
          cy.get('label').should("contain.text", "E-mail de cadastro")
      })

      it('Deve verificar se o texto da label do campo email está visivel', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('label').should("contain.text", "E-mail de cadastro").should("be.visible")
      })

      it('Deve verificar se o input existe', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('input[placeholder="Digite seu E-mail"]').should("exist")
      })

      it('Deve verificar se o input está visivel', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('input[placeholder="Digite seu E-mail"]').should("be.visible")
      })

      it('Deve verificar se o texto da label do campo senha existe', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('label').should("contain.text", "Senha").should("exist")
      })

      it('Deve verificar se o texto da label do campo senha esta visivel', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('label').should("contain.text", "Senha").should("be.visible")
      })

      it('Deve conter um texto como placeholder no input do email', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('input[placeholder="Digite seu E-mail"]').invoke('attr', 'placeholder').should('eq', 'Digite seu E-mail')
      })

      it('Deve verificar se o placeholder no input do email está visivel', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('input[placeholder="Digite seu E-mail"]').invoke('attr', 'placeholder').should('eq', 'Digite seu E-mail', "be.visible")
      })

      it('Deve conter um texto como placeholder no input da senha', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('input[placeholder="Digite sua senha"]').invoke('attr', 'placeholder').should('eq', 'Digite sua senha')
      })

      it('Deve verificar se o placeholder no input da senha está visivel', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('input[placeholder="Digite sua senha"]').invoke('attr', 'placeholder').should('eq', 'Digite sua senha', "be.visible")
      })

      it('Deve verificar se existe um campo de input da senha', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('input[placeholder="Digite sua senha"]').should("exist")
      })

      it('Deve verificar se o campo de input da senha está visivel', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('input[placeholder="Digite sua senha"]').should("be.visible")
      })

      it('Deve conter o texto esqueci minha senha', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('p').should("contain.text", "Esqueci minha senha").should("exist")
      })

      it('Deve estar visivel o texto esqueci minha senha', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('p').should("contain.text", "Esqueci minha senha").should("be.visible")
      })

      it('Deve conter um botão de Entar', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('._sectio_rpkom_1').should("exist")
      })

      it('Deve conter um botão de Entar visivel', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('._sectio_rpkom_1').should("be.visible")
      })

      it('Deve conter um botão de Entar com o texto Entrar', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('._sectio_rpkom_1').should("contain.text", "Entrar").should("exist")
      })

      it('Deve conter um botão de Entar com o texto Entrar visivel', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('._sectio_rpkom_1').should("contain.text", "Entrar").should("be.visible")
      })

      it('Deve conter o texto Não tem uma conta', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('p').should("contain.text", "Não tem uma conta?").should("exist")
      })

      it('Deve conter o texto Não tem uma conta visivel', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('p').should("contain.text", "Não tem uma conta?").should("be.visible")
      })

      it('Deve conter o texto Cadastre-se', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('p').should("contain.text", " Cadastre-se").should("exist")
      })

      it('Deve conter o texto Cadastre-se visivel', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('p').should("contain.text", " Cadastre-se").should("be.visible")
      })

      it('Deve conter um container lateral direto dos campos de input contendo irformações da plataforma', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('._info_1ycg5_147').should("exist")
      })

      it('Deve conter um h1 no caontainer lateral direto com o nome da paltaforma', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('._info_1ycg5_147 > h1').should("exist")
      })

      it('Deve conter um h3 na barra lateral dreita dos campos de input', () => {
          cy.visit('http://localhost:5173/Login')
          cy.contains('h3', 'Nós da Animal Save somos bons em organização e arrecadação de recursos. Nosso objetivo é prestar ajuda qualificada a quem já ajuda os animais.').should("exist")
      })

      it('Deve conter o texto Saiba mais', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('p').should("contain.text", "Saiba mais").should("exist")
      })    
      
      it('Deve conter o texto Saiba mais visivel', () => {
          cy.visit('http://localhost:5173/Login')
          cy.get('p').should("contain.text", "Saiba mais").should("be.visible")
      }) 
  })
})