import home from '../support/pages/home'
import cart from '../support/pages/cart'
import users from '../support/pages/users'
import user from '../fixtures/user.json'

const COOKIES_BUTTON = '[id="sp-cc-accept"]';

beforeEach(() => {
    cy.visit('/')
    cy.get(COOKIES_BUTTON).click();
})


describe('Verify cart Cart Functionality', () => {
    

    it('Verify that a user is able to add TV to the cart with Valid user credantials ', () => {

        home.NavigateToHomePage();
        home.SearchProduct();
        home.OPenProductDetilsPage();
        cart.addToCart();
        cart.proceedToCheckout();
        users.authenticateUser(user.validEmail,user.validPassword);
        users.selectAddress();

    });

    it('Verify that a user is unable to add TV to the cartr valid Email invalid password ', () => {
        
        home.NavigateToHomePage();
        home.SearchProduct();
        home.OPenProductDetilsPage();
        cart.addToCart();
        cart.proceedToCheckout();
        users.enterEmail(user.validEmail)
        users.enterPassword(user.InValifPassword)
        cy.contains("Important Message!").should('be.visible')
    });


    it('Verify that a user is unable to add TV to the cartr invalid Email ', () => {
        
        home.NavigateToHomePage();
        home.SearchProduct();
        home.OPenProductDetilsPage();
        cart.addToCart();
        cart.proceedToCheckout();
        users.enterEmail(user.InValidEmail)
        cy.contains("We cannot find an account with that e-mail address").should('be.visible')
        
    });

    it('Verify that a user is unable to add TV to the cartr with out adding Email  ', () => {
        
        home.NavigateToHomePage();
        home.SearchProduct();
        home.OPenProductDetilsPage();
        cart.addToCart();
        cart.proceedToCheckout();
        users.enterEmail(" ")
        cy.contains("Enter your e-mail address or mobile phone numbe").should('be.visible')

    });

})