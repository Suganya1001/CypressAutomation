describe('Handling inputs',()=>{   

    it('To verfiy the title of the page - Positive', ()=>{
            cy.visit('https://arrow-stg.myshopify.com')
            cy.get('#password').type('password')
            cy.get('button').click()            
            cy.title().should('eq','Arrow-Stg')

            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
    })   

    it('To verfiy the user click on the shop all link - Positive', ()=>{
        cy.visit('https://arrow-stg.myshopify.com')
        cy.get('#password').type('password')
        cy.get('button').click()            
        cy.get('#ToggleMobileMenu > :nth-child(3)').click()
        cy.get('.list--nav > :nth-child(2) > a').click()
    })

    it('To verfiy the user select any one items from the list - Positive', ()=>{
        cy.visit('https://arrow-stg.myshopify.com/')
        cy.get('#password').type('password')
        cy.get('button').click()            
        cy.get('#ToggleMobileMenu > :nth-child(3)').click()
        cy.get('.list--nav > :nth-child(2) > a').click()
        
    })

    it('To verfiy the new user click on the checkout  - Positive', ()=>{
        cy.visit('https://arrow-stg.myshopify.com/')
        cy.get('#password').type('password')
        cy.get('button').click()            
        cy.get('#ToggleMobileMenu > :nth-child(3)').click()
        cy.get('.list--nav > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > .supports-js > .arrow-product-wrapper > .product__image-wrapper > .product__image').click()
        cy.wait(4000)
        cy.get('#arrow').click()
        cy.wait(4000)       
        }) 

   it('To verfiy the new user click on the confirm and pay button with empty values - Positive', ()=>{
    cy.visit(' https://stg-hi.projectarrow.co/make_order/2a645d1812c9d18780bb9a3086260191bf6c110ce5711ad656618777b5ad2ae2c4bdfeb27a05eccdef8ff4368087f329d60fa09fe3acd8c5a9d4e17b14729c30')
   // cy.get('.orders__item--title').click()
    //cy.get('#orderDetailsMobile > .modal-dialog > .modal-content > .modal-body > .modal-sign-single__inner > .close > span > img').click()
    cy.get('#email').type('suganyatest001@mailinator.com')
    cy.wait(1000)
    cy.get('#firstname').type('Suganya')
    cy.get('#lastname').type('Apptomate')
    cy.get('#phoneInfo').type('8489558016')
    cy.get('#ccnumber').type('4111111111111111')
    cy.get('#ccmonth').type('02')
    cy.get('#ccyear').type('22')
    cy.get('#cccvv').type('123')
    cy.get('#inputAddressModal').type('123 Yishun Street 11, Singapore')
    cy.get('.form-group.check-block > .input-group-vertical > .block > .row > .col-12 > .form-control').type('Test message')
    cy.get('#street_number').type('123')
    cy.get('#postal_code').type('760123')
    cy.get('#submitbutton').click()
    cy.wait(3000)
})
})