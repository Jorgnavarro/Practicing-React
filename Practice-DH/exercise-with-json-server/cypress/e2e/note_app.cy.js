describe('Note app', function(){

  beforeEach(function(){

    //este comando abre la dirección web que se asigna como parámetro en el navegador usado por la prueba
    cy.visit('http://localhost:5173')

    //Acá se está controlando el estado de la BBDD y accedemos a la BBDD de test que creamos en nuestro back, creamos el controlador y escribimos en el archivo principal del back una condición, que si se ejecuta el back en npm run start:test, se acceda a esa BBDD, la misma se resetea y nos permite agregar el contenido que estamos creando para nuestros tests y la BBDD principal no sufre ningún cambio.
    //con cy.request, hacemos solicitudes http
    cy.request('POST', 'http://localhost:3001/api/testing/reset')

    const user = {
      name: 'Luis Navarro',
      username: 'Programmer',
      password: 'fullstack'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)

  })

  //it.only se agrega para probar hasta este test, sin correr los siguientes, hasta que se considere que el test está listo se usa it, normal

  it('login fails with wrong password', function(){
    //cy.contains busca una cadena que recibe cómo paramétro en la página, en el caso de abajo ubicamos un btn con ese label y posterior a eso,procedemos a darle click, para desplegar el formulario e iniciar sesión.
    //cy.contains devolverá la primer coincidencia que encuentre
    cy.contains('Log-in').click()
    //cy.get permite buscar elementos mediantes selectores CSS
    //.type nos permite ingresar datos en los inputs
    cy.get('#username').type('Programmer')
    cy.get('#inputPassword').type('wrongPassword')
    cy.get('#loginBtn').click()
    //cy.get('#container-error').contains('Wrong credentials')

    //Usar Should es más completo, porque permite agregar diferentes características y asersiones
    cy.get('#container-error').should('contain', 'Wrong credentials')

    //Should siempre debería estar encadenado con get(u otro encadenable). Usamos cy.get('html') para acceder a todo el contenido visible de la aplicación
    cy.get('html').should('not.contain', 'Luis Navarro logged-in')
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
        //podemos escribir varias pruebas encadenadas
        //buscamos la nota ya existente, luego buscamos el btn
        //para después hacer click y cambiar el estado de la misma
        cy.contains('another note cypress')
          .contains('make important')
          .click()
        //acá la comprobamos que la nota haya cambiado su estado a importante
        cy.contains('another note cypress')
          .contains('make not important')
      })
    })
  })
})