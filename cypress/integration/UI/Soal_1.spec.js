describe('Adding product to checkout', () => {

     // To Pass the Test Case 1 
     Cypress.Commands.add('swipeVertical', (element, yStart, yEnd, x) => {
          cy.xpath(element)
               .should('exist')
               .trigger('mousedown', { which: 1, pageX: x, pageY: yStart })
               .trigger('mousemove', { which: 1, pageX: x, pageY: yEnd })
               .trigger('mouseup', { force: true });
     });
     it('User choose product and add checkout', () => {
          const nama_product = "Acme Drawstring Bag"

          cy.visit('https://demo.vercel.store');
          cy.wait(3000);
          cy.xpath(`//*[contains(@class,"aspect-square")]/descendant::h3[(text()="${nama_product}")]`)
               .should('exist')
               .click()
          cy.swipeVertical('//h1', 100, 300, 200);
          cy.xpath('//button[(text()="Black")]')
               .should('exist')
               .click()
               .wait(3000)
          cy.xpath('//button[(text()="7 x 9 inch")]')
               .should('exist')
               .click()
               .wait(3000)
          cy.xpath('//button[(text()="Add To Cart")]')
               .should('exist')
               .click()
               .wait(3000)
          cy.xpath('//*[(@class="leading-tight")][1]')
               .invoke('text')
               .then((text) => {
                    cy.wrap(text).as('ProductName');
               });
          //verifcation in CO page
          cy.get('@ProductName').then((expectedNameProduct) => {
               expect(expectedNameProduct).to.equal(nama_product);
          });
          // cy.xpath('//*[(@id="headlessui-dialog-panel-:r1:")]/descendant::a[(text()="Proceed to Checkout")]')
          //      .should('be.visible')
          //      .click()
          //      .wait(10000);
          // Fill in guest checkout details
          // cy.get('#email')
          //      .should("exist")
          //      .type('guest@example.com');
          // cy.get('[name="firstName"]')
          //      .should("exist")
          //      .type('Test');
          // cy.get('[name="lastName"]')
          //      .should("exist")
          //      .type('Ilham Flip');
          // cy.get('#shipping-address1')
          //      .type('132 My Street, Kingston NY 12401');
          // cy.get('#shipping-address1-option-0')
          //      .should('be.visible')
          //      .click();

          //get information address
          //email
          //      cy.get('[name="email"]')
          //           .should('be.visible')
          //           .invoke('text')
          //           .then((text) => { cy.wrap(text).as('Email');
          //      });
          //      //address
          //      cy.get('shipping-address1')
          //        .invoke('text')
          //        .then((text) => { cy.wrap(text).as('Address');
          //      });
          //      //City
          //      cy.xpath('//*[(text()="City")]/ancestor::label/following-sibling::div/input')
          //        .invoke('text')
          //        .then((text) => { cy.wrap(text).as('City');
          //      });
          //      //State
          //      cy.get('//*[(text()="State")]/ancestor::label/following-sibling::div/input')
          //        .invoke('text')
          //        .then((text) => { cy.wrap(text).as('State');
          //      });
          //      //Zipcode
          //      cy.get('//*[(text()="ZIP code")]/ancestor::label/following-sibling::div/input')
          //        .invoke('text')
          //        .then((text) => { cy.wrap(text).as('ZIP code');
          //      });

          //    cy.xpath('//*[(text()="Continue to shipping")]')
          //           .should('exist')
          //           .click()
          //           .wait(3000)
          //      //verification
          //      cy.xpath('//*[(text()="Contact")]/parent::*/following-sibling::*/bdo')
          //        .should('be.visible')
          //        .invoke('text')
          //        .then((text) => { cy.wrap(text).as('contactCheckout');
          //      });

          //      cy.xpath('//picture/ancestor::div[4]/child::div[2]/*/p')
          //        .should('be.visible')
          //        .invoke('text')
          //        .then((text) => { cy.wrap(text).as('nameProductCheckout');
          //      });

          //      cy.get('@Email').then((expectedContact) => {
          //           cy.get('@contactCheckout').then((actualContactCheckout)=>{
          //                expect(expectedContact).to.equal(actualContactCheckout);
          //           }); 
          //      });

          //      cy.get('@ProductName').then((expectedNameProduct) => {
          //           cy.get('@nameProductCheckout').then((actualNameProductCheckout)=>{
          //                expect(expectedNameProduct).to.equal(actualNameProductCheckout);
          //           }); 
          //      });
     });
});