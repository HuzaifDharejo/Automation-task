class CartPage {
    addToCart(){
        cy.get('#add-to-cart-button')
          .should('be.visible')
          .click();
    }
    proceedToCheckout(){
        cy.get('#sc-buy-box-ptc-button')
          .should('be.visible')
          .click();
    }
}

export default new CartPage