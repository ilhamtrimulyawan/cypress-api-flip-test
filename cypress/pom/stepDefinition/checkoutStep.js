import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pom/homePage';

Given('User on demo vercel website', () => {
  cy.visit('https://demo.vercel.store/');
});

When('User input {string} email', (email) => {
  HomePage.emailInputField().type(email);
});

// When('User click Masuk Button', () => {
//   HomePage.MasukButton().click();
// });

// When('User input {string} password', (password) => {
//   HomePage.passwordInputField().type(password);
// });

// When('click submit button', () => {
//   HomePage.submitButton().click();
// });

// Then('verify user failed login when format wrong email {string}', (errorMessage) => {
//   HomePage.errorMessageEmailFormatText().should(errorMessage);
// });