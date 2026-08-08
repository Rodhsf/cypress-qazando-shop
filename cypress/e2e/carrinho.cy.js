describe("Logar e testar o carrinho", () => {

    it("Adicionar um produto ao carrinho", () => {

        // 1. Logar
        cy.visit('https://www.automationpratice.com.br/login')
        cy.get('#user').type('rodrigoteste@gmail.com')
        cy.get('#password').type('teste123')
        cy.get('#btnLogin').click()
        cy.get('.swal2-confirm').click()

        // 2. Validar que o carrinho começou com 3 produtos
        cy.get(':nth-child(3) > .offcanvas-toggle > .item-count').should('have.text', '3')

        // 3. Entrar na aba de produtos
        cy.get('p > a').click()

        // 4. Encontrar e clicar no produto
        cy.get(':nth-child(1) > .product_wrappers_one > .thumb > .image > .hover-image').click()

        // 5. Adicionar o produto ao carrinho
        cy.get('.links_Product_areas > .theme-btn-one').click()

        // 6. Validar que o carrinho atualizou para 4 produtos
        cy.get(':nth-child(3) > .offcanvas-toggle > .item-count').should('have.text', '4')

    })

})