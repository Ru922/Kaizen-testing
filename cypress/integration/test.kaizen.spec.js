///<reference types="cypress" />
import registePage from '../pages/register.page'
import loginPage from '../pages/login.page'
import Chance from 'chance';

const chance = new Chance();
const name = chance.first();
const user = name+Math.round(Math.random()*100)
const lastname = chance.last();
const email = name+'@gmail.com'
const pass = name+ Math.round(Math.random()*100)

describe('Tests', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3001/');
    });

    it('Registration test', () => {
        registePage.successfullRegister(user, name, lastname, email, pass);
    });

    it('Log in test', () => {
        loginPage.loginSuccess(user,pass)
        loginPage.loginWelcome(name)
    });

    it('Log out test', () => {
        loginPage.loginSuccess(user,pass)
        loginPage.logOut();
    });

});