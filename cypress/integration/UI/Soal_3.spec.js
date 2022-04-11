describe('Adding product to checkout', () => {

     // To Pass the Test Case 1 

     it('User choose product and add checkout', () => {
          //visit to shop-all
          cy.visit('https://demo.vercel.store/search/shop-all');

          cy.xpath("//*[contains(text(),'Price: High to low')]").click();
          const pricehigh1 = cy.xpath('//*[contains(text(),"Lightweight Jacket")]/parent::h3/following-sibling::*').text();
          const Stringpricehigh1 = pricehigh1.delete('$').gsub(',', '.').to_f;
          const pricehigh2 = cy.xpath('//*[contains(text(),"T-Shirt")]/parent::h3/following-sibling::*').text();
          const Stringpricehigh2 = pricehigh2.delete('$').gsub(',', '.').to_f;

          expect(Stringpricehigh1.to_i > Stringpricehigh2.to_i).to.eq(true);
});