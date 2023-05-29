const emailInvalido = 'correo_no_valido.com'
const validEmail = 'validemail@gmail.com'
const randomPassword='randomp'


 describe.only('Tittles visibility', () => {
 
 Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    
  })
    beforeEach(() => {
     
      cy.visit('https://myportallogindev.aramark.com/self-registration')
      cy.viewport(1280, 720)
      
    })
   
     
it('Verify that the Aramark logo is displayed on self registration page', () => {
  cy.get('.auth__logo').should('be.visible')
  })


  

  it('Verify that the title Lets Get Started is displayed on the registration page', () => {
    cy.get('.form__header > .typography').should('be.visible')
    .contains("Let's get started")
  })



it('Verify that the paragraph "* Indicates a Required Field" is displayed on the registration page.', () => {
  cy.get('.form__indicates > .typography')
  .contains('* indicates a required field')
})


it('Verify that the paragraph for the "First Name" field is displayed on the registration page. ', () => {
  cy.get(':nth-child(1) > aus-input > .input > label > .input__label > .input__label-main > :nth-child(1) > .typography')
  .should('be.visible')
})


it('Verify that the paragraph for the "Last Name" field is displayed on the registration page. ', () => {
  cy.get(':nth-child(2) > aus-input > .input > label > .input__label > .input__label-main > :nth-child(1) > .typography')
  .should('be.visible')
})


it('Verify that the input field for the phone number is displayed on the registration page.', () => {
  cy.get(':nth-child(3) > aus-input > .input > label > .input__label > .input__label-main > aus-typography > .typography')
  .should('be.visible')
})


it('Verify that the "Email" field is displayed on the registration page.', () => {
  cy.get(':nth-child(4) > aus-input > .input > label > .input__label > .input__label-main > :nth-child(1) > .typography')
  .should('be.visible')
})


it('Verify that the "Account #" field is displayed on the registration page. ', () => {
  cy.get('aus-button')
  .scrollIntoView()
  cy.get(':nth-child(5) > aus-input > .input > label > .input__label > .input__label-main > :nth-child(1) > .typography')
  .should('be.visible')
})


it('Verify that the "Billing Zip Code" field is displayed on the registration page. .', () => {
  cy.get(':nth-child(6) > aus-input > .input > label > .input__label > .input__label-main > :nth-child(1) > .typography')
  .should('be.visible')
})



it('Verify that the paragraph "Already have an account?" is displayed on the registration page. ', () => {
  cy.get('[color="#505D68"] > .typography')
  .should('be.visible')
})

it('Verify that the button at the end of the form is disabled until all the required fields are filled correctly', () => {
  cy.get('.button')
  .should('be.disabled')
})

it('Verify that the "Log In" link redirects to the login page', () => {
  cy.get('a > aus-typography > .typography')
  .should('be.visible')
  .click()
  cy.url().should('eq','https://myportallogindev.aramark.com/login')
  

})

})

 
 describe('Validation and error messages', () => {
 
 Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    
  })
    beforeEach(() => {
     
      cy.visit('https://myportallogindev.aramark.com/self-registration')
      cy.viewport(1280, 720)
      
    })
   
     
it('Verify error message for firstname field', () => {
  cy.firstnamevalidation()
  
  })

  it('Verify error message for Lastname field', () => {
   cy.lastnamevalidation()
    
  })

  it('Verify error message for phonemumber field', () => {
    cy.phonevalidation()
      
    })
  
  it('Verify error message for email field', () => {
    cy.emailvalidation()
          
    })

  it('Verify error message for account number field', () => {
    cy.accountvalidation()

    })
  
   it('Verify error message for account zipcode field', () => {
    cy.zipvalidation()

    })

  })

  const generateAccountNumber = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const randomLetter = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    const randomNumbers = Math.floor(Math.random() * 10000000).toString().padStart(7, '0')
    return randomLetter + randomNumbers
  }

  describe('Account creation', () => {
 
      Cypress.on('uncaught:exception', (err, runnable) => {
         return false
         
       })
         beforeEach(() => {
          
           cy.visit('https://myportallogindev.aramark.com/self-registration')
           cy.viewport(1280, 720)
           
         })

         it('Verify error message for account zipcode field', () => {

          const firstName = 'John'
              const lastName = 'Doe'
              const phoneNumber = Math.floor(Math.random() * 10000000000)
              const email = `test${Math.floor(Math.random() * 100000)}@example.com`
              const accountNumber = generateAccountNumber();
              const zipCode = Math.floor(Math.random() * 100000)

              cy.get('#firstName').type(firstName)
              cy.get('#lastName').type(lastName)
              cy.get('#phoneNumber').type(phoneNumber)
              cy.get('#email').type(email)
              cy.get('#accountNumber').type(accountNumber)
              cy.get('#accountBillingPostalCode').type(zipCode)
          
              cy.get('.button').click()
          
             

              // se requiere una cuenta real para continuar
              // validar la pagina a donde el usuario es redirigido
      
          })














})
