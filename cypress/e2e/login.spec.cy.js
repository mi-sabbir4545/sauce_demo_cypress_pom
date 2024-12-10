import LoginPage from '../e2e/LoginPage.cy';

const loginUrl = 'https://sauce-demo.myshopify.com/account/login';

describe('Sauce Demo Login Tests', () => {
    beforeEach(() => {
        LoginPage.visit(loginUrl); // Open the login page before each test
    });

    it('logs in successfully with valid credentials', () => {
        LoginPage.fillEmail('testdsi@gmail.com');
        LoginPage.fillPassword('12345678');
        LoginPage.clickSignIn();
        cy.wait(2000)
        LoginPage.clickHome()

        
        // LoginPage.verifyLoginSuccess();
    });

    // it('shows error for invalid credentials', () => {
    //     LoginPage.fillEmail('invaliduser@example.com');
    //     LoginPage.fillPassword('wrongpassword123');
    //     LoginPage.clickSignIn();
    //     // LoginPage.verifyLoginFailure();
    // });

    // it('does not allow login with empty fields', () => {
    //     LoginPage.clickSignIn();
    //     cy.contains('Email and password are required').should('be.visible'); // Replace with actual error message
    // });
});
