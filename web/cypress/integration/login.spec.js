/// <reference types="cypress" />

describe('home get formations', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234/login')
    })

    it('display a formation title', () => {
        cy.get('h1').should('have.text', 'Login')
    })

    it('display a login form', () => {
        cy.get('form').children().contains('Email')
        cy.get('form').children().contains('Password')
        cy.get('form').children().get('button').contains('Se connecter')
    })

    it('login form is invalid if email or password empty', () => {
        cy.get('form').children().get('button').click()
    })

    it('Entering wrong email/password in form', () => {
        cy.get('input[type="email"]')
            .type('quentin@test.com')
            .should('have.value', 'quentin@test.com')
            .get('input[type="password"]')
            .type('derpderp')
            .should('have.value', 'derpderp')

        cy.get('form').children().get('button').click()
        cy.get('p').contains('Email and/or password missmatch')
    })
})
