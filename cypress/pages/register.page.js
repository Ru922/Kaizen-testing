import registerData from '../fixtures/Register.json'


class Register {
    elements ={
        registerBtn: () => cy.get(registerData.registerBtn),
        userInput: () => cy.get(registerData.userInput),
        nameInput: () => cy.get(registerData.nameInput),
        lastnameInput: () => cy.get(registerData.lastnameInput),
        emailInput: () => cy.get(registerData.emailInput),
        passInput: () => cy.get(registerData.passInput),
        repearPassInput: () => cy.get(registerData.repearPassInput),
        register : () => cy.get(registerData.register)
};

    successfullRegister(user, name,lastname,email,pass){
        this.elements.registerBtn().click();
        this.elements.userInput().type(user);
        this.elements.nameInput().type(name);
        this.elements.lastnameInput().type(lastname);
        this.elements.emailInput().type(email);
        this.elements.passInput().type(pass);
        this.elements.repearPassInput().type(pass);
        cy.wait(3000)
        this.elements.register().click();
        cy.wait(3000)
    };


};

module.exports = new Register