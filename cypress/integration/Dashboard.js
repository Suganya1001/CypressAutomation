describe('Add information',()=>{   

    it('To verify the user to add the address - Positive', ()=>{
        cy.visit('https://stg-hi.projectarrow.co/')
        cy.get('span > a').click()
        cy.get('input[type="email"]').type('suganyatestsugan9001@mailinator.com')
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
    cy.get('#v-pills-info-tab').click()
    //Add the new address
    cy.get(':nth-child(1) > label > .add-address > .color-primary').click()
    cy.get('#newAddressForm > .mb-3 > .block > .row > .col-12 > .form-control').type('Singapore Address')
    cy.get('#inputAddressModal').type('20 Pasir Ris Street 51, Singapore')
    cy.get('#street_number').type('20')
    cy.get('#postal_code').type('518902')
    cy.get('#description').type('This is test description')
    cy.get('#saveNewAddress').click()   
    cy.wait(3000) 
    })


    it('To verify the user to edit the address- Positive', ()=>{
        cy.visit('https://stg-hi.projectarrow.co/')
        cy.get('span > a').click()
        cy.get('input[type="email"]').type('suganyatestsugan9001@mailinator.com')
    cy.get('.btn').click() //click on the submit button 
    cy.get('#pin1').type('1')
    cy.get('#pin2').type('2')
    cy.get('#pin3').type('3')
    cy.get('#pin4').type('4')
    cy.get('#pin5').type('5')
    cy.get('#pin6').type('6')
    cy.wait(3000)
    cy.get('#button').click()
    cy.wait(2000)
    cy.get('#v-pills-info-tab').click()
    //Edit the address
    cy.get(':nth-child(1) > .addresses > .addresses__item > .addresses--title > .dropdown > #dropdownMenuLink > img').click()
    cy.get(':nth-child(1) > .addresses > .addresses__item > .addresses--title > .dropdown > .dropdown-menu > .update-address').click()
    cy.get('#newAddressForm > .mb-3 > .block > .row > .col-12 > .form-control').clear().type('Edit address')
    cy.get('#inputAddressModal').clear().type('111 Somerset Road, Singapore')
    cy.get('#street_number').clear().type('111')
    cy.get('#postal_code').clear().type('238164')
    cy.get('#description').clear().type('Edit Comment')
    cy.get('#newAddressForm > .custom-control > .custom-control-label').click()
    cy.get('#saveNewAddress').click()
    cy.wait(1000)
    // Delete the address
    cy.get(':nth-child(1) > .addresses > .addresses__item > .addresses--title > .dropdown > #dropdownMenuLink > img').click()
    cy.get(':nth-child(1) > .addresses > .addresses__item > .addresses--title > .dropdown > .dropdown-menu > .delete-address').click()
    cy.get('#deleteAddress > .modal-dialog > .modal-content > .modal-body > .modal-sign-single__inner > .buttons > .btn-secondary').click() 
    cy.wait(1000)
    // Add new card   
    cy.get('.col-md-9 > :nth-child(2) > label > .dashboard__content--add > .color-primary').click()
    cy.get('#ccname').type('Test card')
    cy.get('#ccnumber').type('4111111111111111')
    cy.get('#ccmonth').type('02')
    cy.get('#ccyear').type('25')
    cy.get('#cccvv').type('123')
    cy.get('.modal-sign-single__inner > .custom-control > .custom-control-label').click()
    cy.get('#card-button').click()
    cy.wait(3000)   
    // Click on the profile navigation link
})

it('To verify the user to profile information - Positive', ()=>{
    cy.visit('https://stg-hi.projectarrow.co/')
    cy.get('span > a').click()
    cy.get('input[type="email"]').type('suganyatestsugan9001@mailinator.com')
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
// Click on the profile page
cy.get('#v-pills-profile-tab').click()
cy.get('#profileForm > :nth-child(2) > .input-group-vertical > :nth-child(1) > .form-control').clear().type('Suganyatest')
cy.get('.input-group-vertical > :nth-child(2) > .form-control').clear().type('Apptomate')

//Add the new address
//cy.get('input[type="date"]').click()
cy.get('.form-check > :nth-child(3) > .custom-control-label').click()
cy.get(':nth-child(3) > .btn').click()
cy.get('#phoneInfo').clear().type('8489558016')
cy.get('#profileForm > .btn-primary').click()
})


})