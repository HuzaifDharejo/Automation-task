class UsersPage {
    enterEmail(email){
        cy.get('#ap_email')
          .clear()
          .type(email);
        cy.get('.a-button-inner > #continue')
          .should('be.visible')
          .click();
    }
    enterPassword(password){
        cy.get('#ap_password')
          .should('be.visible')
          .clear()
          .type(password);
        cy.get('#signInSubmit')
          .should('be.visible')
          .click();
    }
    authenticateUser(Email,PassWord){
        this.enterEmail(Email);
        this.enterPassword(PassWord);

    }
    selectAddress(){
        cy.get('.ship-to-this-address')
          .should('be.visible')
          .click();
    }
}

export default new UsersPage