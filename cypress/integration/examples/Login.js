describe('Handling inputs',()=>{   

    it('To verfiy the title of the page - Positive', ()=>{
            cy.visit('https://stg-hi.projectarrow.co/')
            cy.title().should('eq','Arrow')
    })   
     
    it('To verify the navigation for sign in page - Positive', ()=>{
        cy.visit('https://stg-hi.projectarrow.co/')
        cy.get('span > a').click()
    })    

    it('To verify the user to enter the registered email id - Positive', ()=>{
        cy.visit('https://stg-hi.projectarrow.co/')
        cy.get('span > a').click()
        cy.get('input[type="email"]').type('suganyatestsuganya@gmail.com')
    cy.get('.btn').click() //click on the submit button 
    cy.get('#pin1').type('1')
    cy.get('#pin2').type('2')
    cy.get('#pin3').type('3')
    cy.get('#pin4').type('4')
    cy.get('#pin5').type('5')
    cy.get('#pin6').type('6')
    cy.wait(3000)
    cy.get('#button').click()
    cy.wait(3000)
    })

    it('To verify if the user enter the invalid OTP and click on the not you click here link - Positive', ()=>{
        cy.visit('https://stg-hi.projectarrow.co/')
        cy.get('span > a').click()
        cy.get('input[type="email"]').type('suganyatestsuganya@gmail.com')
    cy.get('.btn').click() //click on the submit button 
    cy.get('#pin1').type('1')
    cy.get('#pin2').type('2')
    cy.get('#pin3').type('3')
    cy.get('#pin4').type('4')
    cy.get('#pin5').type('5')
    cy.get('#pin6').type('8')    
    cy.wait(3000)
    cy.get('#button').click()
    cy.get('#notemail').click()
    //Here need to check the not you link
    cy.wait(3000)
    })

    it('To verify the user click on the login button with empty value - Negative', ()=>{
        cy.visit('https://stg-hi.projectarrow.co/')
        cy.get('span > a').click()
        cy.get('.btn').click()
        cy.wait(3000)
    }) 
    
    it('To verify the user click on the resend OTP button - Negative', ()=>{
        cy.visit('https://stg-hi.projectarrow.co/')
        cy.get('span > a').click()
        cy.get('input[type="email"]').type('suganyatestsuganya@gmail.com')
        cy.get('.btn').click() 
        cy.wait(3000)
        cy.get('#resend').click()
        cy.wait(2000)
    }) 
    
})
