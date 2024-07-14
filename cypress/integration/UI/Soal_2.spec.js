describe('Adding product to checkout', () => {
     Cypress.Commands.add('swipeVertical', (element, yStart, yEnd, x) => {
          cy.xpath(element)
               .should('exist')
               .trigger('mousedown', { which: 1, pageX: x, pageY: yStart })
               .trigger('mousemove', { which: 1, pageX: x, pageY: yEnd })
               .trigger('mouseup', { force: true });
     });

     it('User search product', () => {
          const search_product = "T-Shirt"

          cy.visit('https://demo.vercel.store');
          cy.wait(3000);
          cy.get('[name="search"')
               .should('exist')
               .type(`${search_product}{enter}`)
               .wait(3000);
          cy.xpath(`//*[contains(text(),"${search_product}")]`)
               .should('be.visible')
               .first()
               .click()
          cy.swipeVertical('//h1', 100, 300, 200);
          cy.xpath('//*[(text()="Size")]/following-sibling::dd/button[(text()="XS")]')
               .should('exist')
               .click()
               .wait(3000)
          cy.xpath('//button[(text()="Add To Cart")]')
               .should('exist')
               .click()
               .wait(3000)
          cy.xpath('//h1')
               .invoke('text')
               .then((text) => {
                    cy.wrap(text).as('ProductName');
               });
          //verifcation in CO page
          cy.xpath('//*[(@class="leading-tight")][1]')
               .invoke('text')
               .then((text) => {
                    cy.wrap(text).as('ProductNameCO');
               });
          cy.get('@ProductName').then((expectedNameProduct) => {
               cy.get('@ProductNameCO').then((actualNameProductCO) => {
                    expect(expectedNameProduct).to.equal(actualNameProductCO);
               });
          });
     });
});