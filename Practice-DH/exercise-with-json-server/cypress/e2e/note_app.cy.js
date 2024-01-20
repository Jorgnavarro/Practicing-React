describe('Note app', function(){

  beforeEach(function(){
    cy.request('POST', 'http://localhost:3001/api/testing/reset')

    const user = {
      name: 'Luis Navarro',
      username: 'Programmer',
      password: 'fullstack'
    }
    cy.request('POST', 'http://localhost:3001/api/users', user)

    cy.visit('http://localhost:5173')
  })

  it.only('login fails with wrong password', function(){
    cy.contains('Log-in').click()
    cy.get('#username').type('Programmer')
    cy.get('#inputPassword').type('wrongPassword')
    cy.get('#loginBtn').click()
    cy.get('#container-error').contains('Wrong credentials')
  })

  it('Front page can be opened', function(){
    cy.contains('Notes')
  })

  it('login form can be', function(){
    cy.contains('Log-in').click()
  })

  it('user can log in', function(){
    cy.contains('Log-in').click()
    cy.get('#username').type('Programmer')
    cy.get('#inputPassword').type('fullstack')
    cy.get('#loginBtn').click()

    cy.contains('Luis Navarro logged-in')
  })

  describe('when logged in', function(){
    beforeEach(function(){
      cy.contains('Log-in').click()
      cy.get('#username').type('Programmer')
      cy.get('#inputPassword').type('fullstack')
      cy.get('#loginBtn').click()
    })

    it('a new note can be created', function(){
      cy.contains('Create a new note').click()
      cy.get('#addNote').type('Creating a new note from Cypress thanks god')
      cy.contains('Save').click()
      cy.contains('Creating a new note from Cypress thanks god')
    })
    
    describe('and a note exists', function(){
      beforeEach(function(){
        cy.contains('Create a new note').click()
        cy.get('#addNote').type('another note cypress')
        cy.contains('Save').click()
      })

      it('it can be made important', function (){
        cy.contains('another note cypress')
          .contains('make important')
          .click()
        cy.contains('another note cypress')
          .contains('make not important')
      })
    })
  })
})