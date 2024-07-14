describe('Adding product to checkout', () => {

     // To Pass the Test Case 1 

     it('User choose product and add checkout', () => {
          //visit to shop-all
          cy.visit('https://demo.vercel.store/search?sort=price-desc');
          cy.wait(3000)
          // Add assertions to verify the items are sorted correctly
          cy.get('.rounded-full.bg-blue-600').should('have.length.greaterThan', 0).then($prices => {
               const prices = Cypress._.map($prices, price => parseFloat(price.innerText.replace('$', '')));
               const sortedPrices = Cypress._.clone(prices).sort((a, b) => b - a);

               // Log prices for debugging
               cy.wrap(prices).then(prices => {
                    cy.log('Prices:', prices);
               });

               cy.wrap(sortedPrices).then(sortedPrices => {
                    cy.log('Sorted Prices:', sortedPrices);
               });

               for (let i = 0; i < prices.length; i++) {
                    expect(prices[i]).to.equal(sortedPrices[i]);
               }
          });
     });
})