describe('Note app', function(){

  beforeEach(function (){
    cy.visit('http://localhost:5173')
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
})