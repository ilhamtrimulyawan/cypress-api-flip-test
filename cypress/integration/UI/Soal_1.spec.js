describe('Adding product to checkout', () => {

     // To Pass the Test Case 1 

     it('User choose product and add checkout', () => {
          cy.visit('https://demo.vercel.store/product/next-js-enamel-mug');
          cy.get('.Button_root__G_l9X ProductSidebar_button__13iVS').click();
          const name_product = cy.get('.CartItem_productName__RYrlX').text();
          const price = cy.get("//*[contains(@class,'flex justify-between py-1')][1]/span[2]").text();
          cy.get('.Button_root__G_l9X').click();
          const cart-price = cy.get('.cart-price-value').text();
          expect(price).to.eq(cart-price);
     });
 
});