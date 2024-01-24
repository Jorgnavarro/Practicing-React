describe('Note app', function () {

  beforeEach(function () {

    //este comando abre la dirección web que se asigna como parámetro en el navegador usado por la prueba

    //Acá se está controlando el estado de la BBDD y accedemos a la BBDD de test que creamos en nuestro back, creamos el controlador y escribimos en el archivo principal del back una condición, que si se ejecuta el back en npm run start:test, se acceda a esa BBDD, la misma se resetea y nos permite agregar el contenido que estamos creando para nuestros tests y la BBDD principal no sufre ningún cambio.
    //con cy.request, hacemos solicitudes http
    //----------version 1----- escribiendo la ruta completa
    //cy.request('POST', 'http://localhost:3001/api/testing/reset')
    //--------version 2------ consumiendo la URI desde cypress.config
    cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`)
    const user = {
      name: 'Luis Navarro',
      username: 'Programmer',
      password: 'fullstack'
    }
    //---------------version 1
    //cy.request('POST', 'http://localhost:3001/api/users', user)
    //--------------version 2
    cy.request('POST', `${Cypress.env('BACKEND')}/users`, user)
    cy.visit("/")
  })

  //it.only se agrega para probar hasta este test, sin correr los siguientes, hasta que se considere que el test está listo se usa it, normal

  it('login fails with wrong password', function () {
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

  it('Front page can be opened', function () {
    cy.contains('Notes')
  })

  it('login form can be', function () {
    cy.contains('Log-in').click()
  })

  it('user can log in', function () {
    cy.contains('Log-in').click()
    cy.get('#username').type('Programmer')
    cy.get('#inputPassword').type('fullstack')
    cy.get('#loginBtn').click()

    cy.contains('Luis Navarro logged-in')
  })

  describe('when logged in', function () {
    beforeEach(function () {
      //------first-version-using-form-login
      // cy.contains('Log-in').click()
      // cy.get('#username').type('Programmer')
      // cy.get('#inputPassword').type('fullstack')
      // cy.get('#loginBtn').click()

      //-------second version-using-http-request----more functional
      //cy.request('POST', 'http://localhost:3001/api/login', {
      //    username: 'Programmer', password: 'fullstack'
      //}).then(response => {
      //Acá estamos enviando la información al localStorage que será consumida por nuestro Front, logueando a nuestro usuario
      //localStorage.setItem('loggedUserNotes', JSON.stringify(response.body))
      //Por ello, visitamos nuestra App, luego de enviar la solicitud del login a nuestro back
      //cy.visit('/')

      //--------Third version-using-command.js-Route cypress/support/commands.js

      cy.login({ username: 'Programmer', password: 'fullstack' })

    })


    it('a new note can be created', function () {
      cy.contains('Create a new note').click()
      cy.get('#addNote').type('Creating a new note from Cypress thanks god')
      cy.contains('Save').click()
      cy.contains('Creating a new note from Cypress thanks god')
    })

    describe('and several notes exist', function () {
      beforeEach(function () {
        //------- version 1 Creating a note taking elements from DOM
        // cy.contains('Create a new note').click()
        // cy.get('#addNote').type('another note cypress')
        // cy.contains('Save').click()

        //--------version 2 creating a note using Cypress.Commands
        cy.addNote({
          content: 'refactoring coding test with Commands, cypress',
          important: false
        })
        cy.addNote({
          content: 'Another note created by commands',
          important: false
        })
        cy.addNote({
          content: 'The last one note created by commands',
          important: false
        })
      })

      it('it can be made important', function () {

        //para poder refactoriza el código de esta prueba, hicimos una modificación en nuestro componente en el front
        //Envolvimos el contenido de la nota en un <span>{note.content}</span>
        //Cuando se hace el código como en la primera versión, como note.content, está dentro de un mis componente que los btns, puede encontrar con facilidad el btn make important
        //pero si son 2 componentes diferentes, ahí es donde deberíamos hacer uso de la segunda versión
        //cy.contains('labelElement').parent().find('button'), se agrega entonces, luego de hayar al elemento accedemos a su padre para que se haga la búsqueda dentro de él. luego, si tenemos más de un btn podemos especificar con otro contain, para luego ejecutar el evento click.

        //podemos escribir varias pruebas encadenadas
        //buscamos la nota ya existente, luego buscamos el btn
        //para después hacer click y cambiar el estado de la misma
        //--------First version-----
        // cy.contains('refactoring coding test with Commands, cypress')
        //   .contains('make important')
        //   .click()

        //--------second version-------
        // cy.contains('refactoring coding test with Commands, cypress').parent().find('button')
        // .contains('make important')
        // .click()

        //en esta versión como tenemos 2 botones, especificamos que contenga make debido a que después del click cambia make important a make not important, por tanto el btn queda undefined, el .as() es para darle un alias al elemento encontrado
        //Luego reutilizamos el código del btn para confirmar que cambió a make not important
        //--------third version--------
        cy.contains('refactoring coding test with Commands, cypress').parent().find('button').contains('make').as('btnChangeStatus')
        cy.get('@btnChangeStatus').click()
        cy.wait(5000)

        cy.get('@btnChangeStatus').should('contain', 'make not important')

        //--------first version
        //acá la comprobamos que la nota haya cambiado su estado a importante
        // cy.contains('refactoring coding test with Commands, cypress')
        //   .contains('make not important')

        //-------second version
        // cy.contains('refactoring coding test with Commands, cypress').parent().find('button')
        //   .should('contain', 'make not important')
      })
      it('then example', function() {
        cy.get('button').then( buttons => {
          console.log('number of buttons', buttons.length)
          cy.wrap(buttons[0]).click()
        })
      })
    })
  })
})