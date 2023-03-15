Cypress.Commands.add('create_users_api', (nome, email, password, administrador) => {
  cy.api({
    method: 'POST',
    url: `https://serverest.dev/usuarios`,
    failOnStatusCode: false,
    body:
    {
      "nome": nome,
      "email": email,
      "password": password,
      "administrador": administrador
    },
    resp: []
  })
})

Cypress.Commands.add('get_list_products', () => {
  cy.api({
    method: 'GET',
    url: `https://serverest.dev/produtos`,
    failOnStatusCode: false,
    headers: {
      'content-type': 'application/json'
    }
  })
})

Cypress.Commands.add('get_list_users', () => {
  cy.api({
    method: 'GET',
    url: `https://serverest.dev/usuarios`,
    failOnStatusCode: false,
    headers: {
      'content-type': 'application/json'
    }
  })
})

Cypress.Commands.add('get_list_users_by_id', (id) => {
  cy.api({
    method: 'GET',
    url: `https://serverest.dev/usuarios?_id=${id}`,
    failOnStatusCode: false,
    headers: {
      'content-type': 'application/json'
    }
  })
})

Cypress.Commands.add('get_list_users_by_name', (name) => {
  cy.api({
    method: 'GET',
    url: `https://serverest.dev/usuarios?nome=${name}`,
    failOnStatusCode: false,
    headers: {
      'content-type': 'application/json'
    }
  })
})

Cypress.Commands.add('get_list_users_by_email', (email) => {
  cy.api({
    method: 'GET',
    url: `https://serverest.dev/usuarios?email=${email}`,
    failOnStatusCode: false,
    headers: {
      'content-type': 'application/json'
    }
  })
})


Cypress.Commands.add('delete_users_api', (id) => {
  cy.api({
    method: 'DELETE',
    url: `https://serverest.dev/usuarios/${id}`,
    failOnStatusCode: false,
    body:
    {

    },
    resp: []
  })
})

Cypress.Commands.add('login_api', (email = `${Cypress.env('email')}`, password = `${Cypress.env('password')}`) => {
  cy.api({
    method: 'POST',
    url: `https://serverest.dev/login`,
    headers: {
      authorization: `${Cypress.env('token')}`
    },
    body: {
      "email": email,
      "password": password
    },
    failOnStatusCode: false,
  })
})

Cypress.Commands.add('edit_user_api', (id, nome, email, password, administrador) => {
  cy.api({
    method: 'PUT',
    url: `https://serverest.dev/usuarios/${id}`,
    failOnStatusCode: false,

    body:
    {
      "nome": nome,
      "email": email,
      "password": password,
      "administrador": administrador
    },
    resp: []
  })
})
