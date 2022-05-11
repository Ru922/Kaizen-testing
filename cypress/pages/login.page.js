import loginData from '../fixtures/Login.json'

class Login{
    elements = {
        loginBtn: () => cy.get(loginData.loginBtn), 
        userInput: () => cy.get(loginData.userInput),
        passInput: () => cy.get(loginData.passInput),
        IngresarBtn: () => cy.get(loginData.IngresarBtn),
        bienvenidoSing: () => cy.get(loginData.bienvenidoSing),
        logout: () => cy.get(loginData.logout),
        logoutSing: () => cy.get(loginData.logoutSing)
    };

    loginSuccess(user,pass){
        this.elements.loginBtn().click();
        this.elements.userInput().type(user);
        this.elements.passInput().type(pass);
        cy.wait(3000)
        this.elements.IngresarBtn().click();
        
    };

    loginWelcome(name){
        cy.wait(3000)
        this.elements.bienvenidoSing().should('exist').and('contain', name);
    }

    logOut(){
        cy.wait(3000)
        this.elements.logout().click();
        this.elements.logoutSing().should('exist')
    }

};

module.exports = new Login