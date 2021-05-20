describe('My First Test', function()
{
    it('Verrify title of the page', function()
    {
        cy.visit('https://stg-hi.projectarrow.co')
        cy.title().should('eq','Arrow')

    })
})