describe("Cadastro", () => {  

    it("Cadastro com sucesso", () => { 

      // Entrar no site em cadastro

      cy.visit('https://www.automationpratice.com.br/register')

      // Preencher todos os campos obrigatórios com dados válidos (nome, e-mail, senha)

      cy.get('#user').type('Test Project')
      cy.get('#email').type('testproject@gmail.com')
      cy.get('#password').type('testproject123')
      cy.get('#btnRegister').click()

      // Validar se a conta foi criada

      cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')

       })

        it("E-mail com formato inválido", () => { 

      // Entrar no site em cadastro

      cy.visit('https://www.automationpratice.com.br/register')

      // Preencher todos os campos obrigatórios com e-mail com formato inválido

      cy.get('#user').type('Test Project')
      cy.get('#email').type('testproject@gmail')
      cy.get('#password').type('testproject123')
      cy.get('#btnRegister').click()

      // Validar se apareceu mensagem de formato de e-mail incorreto

      cy.get('#errorMessageFirstName').should('have.text', 'O campo e-mail deve ser prenchido corretamente')

       })
       
       it("Senha fraca", () => { 

      // Entrar no site em cadastro

      cy.visit('https://www.automationpratice.com.br/register')

      // Preencher todos os campos obrigatórios com e-mail com formato inválido

      cy.get('#user').type('Test Project')
      cy.get('#email').type('testproject@gmail.com')
      cy.get('#password').type('123')
      cy.get('#btnRegister').click()

      // Validar se apareceu mensagem de senha fraca

      cy.get('#errorMessageFirstName').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')

       })

        });