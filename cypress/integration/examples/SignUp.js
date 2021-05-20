/// <reference types="cypress" />
describe('Handling inputs',()=>{   

it('To verfiy the title of the page - Positive', ()=>{
        cy.visit('https://stg-hi.projectarrow.co/')
        cy.title().should('eq','Arrow')
})



it('To verify the user to enter the invalid email id - Negative scenario', ()=>{
    cy.visit('https://stg-hi.projectarrow.co/')
    cy.get('input[type="email"]').type('fsadfasdf')
    cy.wait(2000)
    cy.get('.row > :nth-child(1) > .form-control').type('12')
    cy.get(':nth-child(2) > .form-control').type('12')
    cy.get('.btn').click() //click on the submit button 
    cy.wait(3000)
})

it('To verify the user to enter the already registered email id - Negative scenario', ()=>{
    cy.visit('https://stg-hi.projectarrow.co/')
    cy.get('input[type="email"]').type('af45d3ddd2ddf1@gmail.com')
    cy.wait(2000)
    cy.get('.row > :nth-child(1) > .form-control').type('12')
    cy.get(':nth-child(2) > .form-control').type('12')
    cy.wait(3000)
    cy.get('.btn').click() //click on the submit button 
    cy.wait(3000)
})

it('To verify the user to enter the invalid OTP - Negative scenario', ()=>{
    cy.visit('https://stg-hi.projectarrow.co/')
    cy.get('input[type="email"]').type('suganyajhgjdgfrtas@mailinator.com')
    cy.wait(2000)
    cy.get('.row > :nth-child(1) > .form-control').type('12')
    cy.get(':nth-child(2) > .form-control').type('12')
    cy.get('.btn').click() //click on the submit button 
    cy.get('#pin1').type('1')
    cy.get('#pin2').type('2')
    cy.get('#pin3').type('3')
    cy.get('#pin4').type('4')
    cy.get('#pin5').type('5')
    cy.get('#pin6').type('8')
    cy.wait(3000)
    cy.get('#button').click()
    cy.wait(3000)
})

it('To verify the user to click with the empty values - Negative scenario', ()=>{
    cy.visit('https://stg-hi.projectarrow.co/') 
    cy.get('.btn').click() //click on the submit button 
    cy.wait(3000)
})


it('Give the all valid values - Positive scenario', ()=>{
    cy.visit('https://stg-hi.projectarrow.co/')
    cy.get('input[type="email"]').type('suganyatestsugan9001@mailinator.com')
    cy.wait(2000)
    cy.get('.row > :nth-child(1) > .form-control').type('Suganya')
    cy.get(':nth-child(2) > .form-control').type('Apptomate')
    cy.get('.btn').click() //click on the submit button 
    cy.get('#pin1').type('1')
    cy.get('#pin2').type('2')
    cy.get('#pin3').type('3')
    cy.get('#pin4').type('4')
    cy.get('#pin5').type('5')
    cy.get('#pin6').type('6')
    cy.wait(2000)
    cy.get('#button').click()
    cy.wait(3000)
})

it('To verfiy the application terms of use link - Positive', ()=>{
    cy.visit('https://stg-hi.projectarrow.co/')
    cy.get('[href="https://stg.projectarrow.co/pages/terms.html"]').click()
    cy.wait(3000)
})

it('To verfiy the application privacy policy link - Positive', ()=>{
    cy.visit('https://stg-hi.projectarrow.co/')
    cy.get('[href="https://stg.projectarrow.co/pages/privacy.html"]').click()
    cy.wait(3000)
})

})