describe("Login", () => {  

    it("Login com sucesso", () => { 

      // Entrar no site

      cy.visit('https://www.automationpratice.com.br/login')

      // Inserir e-mail e senha

      cy.get('#user').type('rodrigoteste@gmail.com')
      cy.get('#password').type('teste123')
      cy.get('#btnLogin').click()


      // Validar informações de sucesso

      cy.get('#swal2-title').should('have.text', 'Login realizado') 
  
  })

  
    it("Login com senha inválida", () => { 

      // Entrar no site

      cy.visit('https://www.automationpratice.com.br/login')

      // Inserir e-mail válido e senha incorreta

      cy.get('#user').type('rodrigoteste@gmail.com')
      cy.get('#password').type('teste')
      cy.get('#btnLogin').click()


      // Validar informações de senha inválida

      cy.get('.invalid_input').should('have.text', 'Senha inválida.') 
  
  })

      it("Login com credenciais inválidas", () => { 

      // Entrar no site

      cy.visit('https://www.automationpratice.com.br/login')

      // Inserir e-mail e senha incorreta

      cy.get('#user').type('randomuser@hotmail')
      cy.get('#password').type('123')
      cy.get('#btnLogin').click()


      // Validar informações de sucesso

      cy.get('.invalid_input').should('have.text', 'E-mail inválido.') 
  
  })

    it("Login sem credenciais", () => { 

      // Entrar no site

      cy.visit('https://www.automationpratice.com.br/login')

      // Não inserir credenciais de e-mail e senha e tentar entrar

     
      cy.get('#btnLogin').click()


      // Validar informações de sucesso

      cy.get('.invalid_input').should('have.text', 'E-mail inválido.')

});

});