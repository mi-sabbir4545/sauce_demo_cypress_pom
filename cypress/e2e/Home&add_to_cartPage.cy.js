class HomePage {

    getHomeButton() {
      return cy.xpath("//a[text()='Home']"); 
    }
  
 
    clickHomeButton() {
      this.getHomeButton().click();
    }

    getProductImage() {
        return cy.xpath("//img[@alt='Grey Jacket']"); 
      }

      clickProductImage() {
        this.getProductImage().click();
      }

      getaddtocart() {
        return cy.xpath("//input[@id='add']"); 
      }

      clickaddtocartbutton() {
        this.getaddtocart().click();
      }
  }
  
  export const homePage = new HomePage();

  export default new HomePage();
  

