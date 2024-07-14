export default class BasePage {
    static getContainText(args) {
      return cy.contains(args);
    }
  }
  