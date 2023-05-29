const emailInvalido = 'correo_no_valido.com'
const validEmail = 'validemail@gmail.com'
const randomPassword='randomp'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
 
 describe('Login Page English', () => {
 
 Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    
  })
    beforeEach(() => {
     
      cy.visit('https://myportallogindev.aramark.com/login')
      cy.viewport(1280, 720)
      
    })
   
 

    it('Aramark logo should be displayed on the page', () => {
      cy.get('.auth__logo').should('be.visible')
    })


    it('should display "Welcome back!" title with the right characteristics', () => {
      cy.get('.typography.h1.text-preset-2--medium')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .contains('Welcome back!')
    })


    it('should display Auth banner on the right with an image', () => {
      cy.wait(2000)
      cy.get('.auth__banner').should('be.visible')
    })


    it('should display a paragraph saying "Indica campos obligatorios"', () => {
      cy.get('.typography.p.text-preset-7')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .contains('* indicates a required field')
    })

    it('Email  should be visible and have the right characteristics ', () => {
      cy.get('[data-testid="email"] > .input > label > .input__label > .input__label-main > :nth-child(1) > .typography')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .contains('Email')
    })
  
    it('should display a textbox to enter the email with the right characteristics', () => {
      cy.get('.input__control ng-dirty ng-valid ng-touched')
      cy.wait(2000)
        .should('have.attr', 'placeholder','Email')
    })

    it('should highlight email textbox with a black box when hovering over it', () => {
      cy.get('input[type="email"]')
        .trigger('mouseover')
        .should('have.css', 'box-shadow')

     })

     it('Contraseña should be visible and have the right characteristics ', () => {
      cy.get('[data-testid="password"] > .input > label > .input_label > .input_label-main > :nth-child(1) > .typography')
        .should('be.visible')
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .contains('Password')
    })

    it('should display a textbox to enter the password with the right characteristics', () => {
      cy.get('#password')
        .should('be.visible')
        .should('have.attr', 'placeholder','Password')
    })

    //it's not finding the link
    it('Verify that hyperlink "Forgot password?" exists and has the right characteristics', () => {
      cy.get('.link__label')
        .should('be.visible')
        .should('have.css', 'color','rgb(235, 0, 42)')
        .should('have.class','.link__label text-preset-9--underline text-preset-7--medium')
        .contains('Forgot password?')
    })


    it('Verify that checkbox "Remember me" is visible and checkeable', () => {
      cy.get('#rememberme').check()
        .should('be.visible')
      
    })


    it('Verify if Login button exists', () => {
      cy.get('aus-button')
        .should('be.visible')
        .contains('Log in')
    })


    it('Verify that there is a paragraph that says "Not set up yet?" and has the right characteristics ', () => {
      cy.get('[color="#505D68"] > .typography')
        .should('be.visible')
        .contains('Not set up yet?')
      
    })

    it('Verify that there is a button that says Create an account. and has the right characteristics ', () => {
      cy.get('a > aus-typography > .typography')
        .should('be.visible')
        .contains('Create an account')
      
    })

    it('Verify If an invalid email is entered, an error message should appear', () => {
      
      cy.get('#email')
      .type(emailInvalido)
      cy.get('.form__control-msg > .typography')
        .should('be.visible')
        .contains('This field should be a valid email')
        .should('have.css', 'color','rgb(235, 0, 42)')
      
    })

    it('Verify that when you left the email textbox in blank you receive an error message', () => {
      cy.get('#email')
      .type(emailInvalido)
      .clear()
      cy.get('.form__control-msg > .typography')
        .should('be.visible')
        .contains('Field cannot be left blank')
        .should('have.css', 'color','rgb(235, 0, 42)')
      
    })

    it('Verify that when you left the Password textbox in blank you receive an error message', () => {
      cy.get('#password')
      .type(emailInvalido)
      .clear()
      cy.get('.form__control-msg > .typography')
        .should('be.visible')
        .contains('Field cannot be left blank')
        .should('have.css', 'color','rgb(235, 0, 42)')
      
    })

    it('Verify that "Log in" Button is disabled when the Email hasnt been entered in the respective fields', () => {
    
      cy.get('#password').type(randomPassword)
      cy.get('aus-button')
      .invoke('prop','aria-disabled',true)
     
    })

    it('Verify that "Log in" Button is disabled when the Password hasnt been entered in the respective fields', () => {
    
      cy.get('#email').type(validEmail)
      cy.get('aus-button')
      .invoke('prop','aria-disabled',true)
     
    })

    it('Verify that "Log in" Button is disabled when email was invalid', () => {
      cy.get('#email')
      .type(emailInvalido)
      cy.get('#password')
      .type(randomPassword)
      cy.get('aus-button')
      .invoke('prop','aria-disabled',true)
      
    })

    it('Verify a login with valid credentials. User should be redirected to the home page', () => {
      cy.Validlogin()
      cy.wait(10000)
      cy.url().should('eq','https://myportalaccountdev.aramark.com/')
      
      
    })
    
    
    it('Verify that when clicking on forgot password. User should be redirected to the forgot password page', () => {
      cy.get('.link__label').click()
      cy.url().should('eq','https://myportallogindev.aramark.com/forgot-password')

    })

    
    it('Verify that if invalid credentials are entered, a div.alert should be displayed containing a message', () => {
      cy.Invalidlogin()
      cy.wait(10000)
      cy.get('.alert--grid').should('be.visible')
      .contains('You entered an incorrect user name or password.')
      
      it('Verify user is redirected to the create account page when they click on create account  ', () => {
        cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-RLmnJb').click()
          cy.url().should('eq','https://myportallogindev.aramark.com/self-registration')
  
      })
  
        
    })

})

    