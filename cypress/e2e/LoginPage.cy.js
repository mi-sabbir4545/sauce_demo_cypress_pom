class LoginPage {
    visit(url) {
        cy.visit(url); // Navigates to the given URL
    }

    fillEmail(email) {
        cy.get('#customer_email').type(email); // Email field
    }

    fillPassword(password) {
        cy.get('#customer_password').type(password); // Password field
    }

    clickSignIn() {
        cy.get('#customer_login > .action_bottom > .button').click(); // Sign-In button
    }

    clickHome() {
        cy.get('#main-meu > :nth-child(1) > a').click(); // click home button
    }

}

export default new LoginPage();
