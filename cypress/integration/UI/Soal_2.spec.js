describe('Adding product to checkout', () => {

     // To Pass the Test Case 1 

     it('Create new account and adding product in checkout', () => {
          cy.visit('https://demo.vercel.store');

          //Create new account 
          cy.get('.UserNav_avatarButton__9exMf').click();
          cy.contains('Signup').click();
          cy.xpath("//*[contains(@placeholder,'First Name')]").type('Ilham');
          cy.xpath("//*[contains(@placeholder,'Last Name')]").type('Tri');
          cy.xpath("//*[contains(@placeholder,'Email')]").type('Ilham93.mulyawan@gmail.com');
          cy.xpath("//*[contains(@placeholder,'Password')]").type('qwerty123');     
          cy.contains('Signup').click();

          //tidak bisa dilanjutkan karena websitenya error ketika mau signup (error 500)
 
});