///<reference types='cypress'/>
describe('this trial sample test',()=>{
it('test run',()=>{
    cy.visit('https://renewdrycleaners.com/')
    cy.get('a[title="Renew Dry Cleaners"]').eq(0).should('be.visible')
    cy.contains('About Us').click()
    cy.scrollTo('bottom')
    cy.contains('02086916571').should('be.visible')
})
})