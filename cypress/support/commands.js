Cypress.Commands.add('Validlogin', (email, password) => { 

    cy.get('#email').type('julian.guerrero@projekt202.com')
    cy.get('#password').type('0Vr@#47LFCps')
    cy.get('aus-button').click()
   
    })

  Cypress.Commands.add('gettoeditaccount', (email, password) => { 

    cy.get('#email').type('julian.guerrero@projekt202.com')
    cy.get('#password').type('0Vr@#47LFCps')
    cy.get('aus-button').click()
    cy.get('mat-menu-trigger navigation-link ng-star-inserted navigation-link--minimal navigation-link--dropdown').click()
    cy.get(' mat-menu-trigger navigation-link ng-star-inserted navigation-link--dropdown-open').click()


   
  })
  Cypress.Commands.add('Invalidlogin', (email, password) => { 

    cy.get('#email').type('osorio@arajpmc.com')
    cy.get('#password').type('JPMCAra007')
    cy.get('aus-button').click()
  })


  Cypress.Commands.add('confirmation', () => { 

    cy.get('#email')
    .type('shopownersimon@gmail.com')
    cy.get('aus-button')
    .click()
    cy.wait(5000)
  })

  Cypress.Commands.add('opengmail', () => { 
    cy.visit('https://accounts.google.com/v3/signin/identifier?dsh=S-636950671%3A1683735209005871&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=Af_xneGZxCyp9GoP9Iz3HfgzzkI-u6LiKJ3_kyJ9qj8OigbjRyaVv9xIsHUO5hqkC9HbUgTOvmpr&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
             cy.viewport(1280, 720)
  })
  

  
  Cypress.Commands.add('logingmail', () => { 

    cy.get('#identifierId').type('shopownersimon@gmail.com')
    cy.get('.F9NWFb').click()
    cy.wait(2000)
  })
  
  Cypress.Commands.add('emailvalidation', () => { 
    cy.get('#email').clear()

    cy.get('#email')
      .type('ejemplodireccion.com')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid email')

    cy.get('#email')
      .clear()
      .type('ejemplo@')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid email')

    cy.get('#email')
      .clear()
      .type('ejemplo@dominio@com')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid email')

    cy.get('#email')
      .clear()
      .type('ejemplo@ dominio.com')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid email')

    cy.get('#email')
      .clear()
      .type('ejempló@dominio.com')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid email')

    cy.get('#email')
      .clear()
      .type('ejemplo@dominio')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid email')

    cy.get('#email')
      .clear()
      .type('ejemplo@dominio..com')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid email')

    cy.get('#email')
      .clear()
      .type('.ejemplo@dominio.com')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid email')

    cy.get('#email')
      .clear()
      .type('ejemplo.@dominio.com')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid email')

    cy.get('#email')
      .clear()
      .type('eje$m^plo@dominio.com')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid email')
  })
  
  
  Cypress.Commands.add('firstnamevalidation', () => { 
    cy.get('#firstName').clear()

    cy.get('#firstName')
      .type('John123')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid name')
  
  
    cy.get('#firstName')
      .clear()
      .type('John$')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid name')
  
    cy.get('#firstName')
      .clear()
      .type('@John')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid name')
  
  })

  Cypress.Commands.add('lastnamevalidation', () => { 
    cy.get('#lastName').clear()

    cy.get('#lastName')
      .type('Doe123')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid lastname')
  
  
      cy.get('#lastName')
      .clear()
      .type('Doe$')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid lastname')
  
      cy.get('#lastName')
      .clear()
      .type('@Doe')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid lastname')
  
  })

  Cypress.Commands.add('phonevalidation', () => { 

    cy.get('#phoneNumber').clear()

    cy.get('#phoneNumber')
      .type('1234567890')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid phone number')

      cy.get('#phoneNumber')
      .clear()
      .type('abcdefghij')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid phone number')

      cy.get('#phoneNumber')
      .clear()
      .type('@#$%^&*')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid phone number')
  
  })

  Cypress.Commands.add('accountvalidation', () => { 
   
    cy.get('#accountNumber').clear()

    cy.get('#accountNumber')
      .type('1234567890')
      .blur()
      .should('have.css', 'border-color', '#eb002a')
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid account number')

    cy.get('#accountNumber')
      .clear()
      .type('abcdefghij')
      .blur()
      .should('have.css', 'border-color', '#eb002a')
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid account number')

    cy.get('#accountNumber')
      .clear()
      .type('@#$%^&*')
      .blur()
      .should('have.css', 'border-color', '#eb002a')
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid account number')
  
  })

  Cypress.Commands.add('zipvalidation', () => { 
   
    cy.get('#accountBillingPostalCode').clear()

    cy.get('#accountBillingPostalCode')
      .type('12345')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid zip code')

    cy.get('#accountBillingPostalCode')
      .clear()
      .type('ABCDEFGHIJ')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid zip code')

    cy.get('#accountBillingPostalCode')
      .clear()
      .type('@#$%^&*')
      .blur()
      .next('.form__control-msg > .typography')
      .should('be.visible')
      .should('contain.text', 'This field should be a valid zip code')
  
  })

  



  
 