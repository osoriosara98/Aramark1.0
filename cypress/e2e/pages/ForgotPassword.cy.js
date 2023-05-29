const emailInvalido = 'correo_no_valido.com'
const validEmail = 'validemail@gmail.com'
const randomPassword='randomp'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
 
 describe('Forgot password page', () => {
 
 Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    
  })
    beforeEach(() => {
     
      cy.visit('https://myportallogindev.aramark.com/forgot-password')
      cy.viewport(1280, 720)
      
    })
   
 

    it('Verify that the Aramark logo is displayed on the Password Recovery page', () => {
      cy.get('.auth__logo').should('be.visible')
    })

    it('Verify that the title of the page is "Forgot Password"', () => {
        cy.get('.form__header > .typography').should('be.visible')
        .contains('Forgot password')
      })

    it('Verify that there is a message displayed above the email input field which says "Indicates a required field"', () => {
        cy.get('.form__indicates > .typography').should('be.visible')
        .contains('* indicates a required field')
      })

    it('Verify that there is a label "Email*" displayed', () => {
        cy.get('.input__label-main > :nth-child(1) > .typography').should('be.visible')
        .contains('Email')
      })

    
      it('Verify that the email input field is displayed on the page and is empty by default', () => {
        cy.get('#email')
        .should('have.attr', 'placeholder','first.last@aramark.com')
      })

      it('Verify that the email input field has a placeholder text "first.last@aramark.com".', () => {
        cy.get('#email')
        .should('have.attr', 'placeholder','Email')
      })

      it('Verify that the "Send reset password link" button is disabled until a valid email address is entered in the email input field', () => {
        cy.get('aus-button')
        .invoke('prop','aria-disabled',true)
      })

      it('Verify that the "Send reset password link" button is enabled once a valid email address is entered in the email input field', () => {
        cy.get('#email')
        .type(validEmail)
        cy.get('aus-button')
        .invoke('prop','aria-enabled',true)
      })

      it('Verify that clicking on the "Return to login" link redirects the user to the login page.', () => {
        cy.get('a > aus-typography > .typography').click()
        cy.wait(5000)
        cy.url().should('eq','https://myportallogindev.aramark.com/login')
      })

      it('Verify that clicking on the "Send reset password link" button redirects the user to a confirmation page', () => {
        cy.get('#email')
        .type(validEmail)
        cy.get('aus-button')
        .click()
        cy.wait(5000)
        cy.url().should('eq','https://myportallogindev.aramark.com/forgot-password')
      })
    })


      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
       
       describe('Forgot password confirmation page', () => {
       
       Cypress.on('uncaught:exception', (err, runnable) => {
          return false
          
        })
          beforeEach(() => {
           
            cy.visit('https://myportallogindev.aramark.com/forgot-password')
            cy.viewport(1280, 720)
            
          })
         

          it('Verify that the confirmation page displays the Aramark logo', () => {
            cy.confirmation()
            cy.get('.auth__logo').should('be.visible')
          })

          it('Verify that the confirmation page has a title "Your request has been sent."', () => {
            cy.confirmation()
            cy.get('.form__header > .typography').should('be.visible')
            .contains('Your request has been sent')
          })

          it('Verify that the confirmation page has a message displayed in a paragraph which says "Please check your email for a link to reset your password."', () => {
            cy.confirmation()
            cy.get('.form__message > .typography').should('be.visible')
            .contains('Please check your email for a link to reset your password.')
          })

          it('Verify that the confirmation page has a "Return to login" link which redirects the user to the login page.', () => {
            cy.confirmation()
            cy.get('a > aus-typography > .typography').should('be.visible')
            .contains('Return to Login')
            .click()
            cy.wait(5000)
            cy.url().should('eq','https://myportallogindev.aramark.com/login')
          })
       
    })

    describe('Validate password reset email on gmail', () => {
 
      
           beforeEach(() => {
            
             cy.opengmail()
             
           })

           it.only('logins into gmail account for persona1', () => {
            cy.logingmail()

          })























    })
     
















