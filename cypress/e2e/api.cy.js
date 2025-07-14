/// <reference types="cypress"/>


describe('Search Register', () => {

  // List Of All Registers
  it('List Of All Registers', () => {
    cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    })
    .then((response) => {
      console.log('List Of All Registers: ', response)

      expect(response.status).to.equal(200)
      expect(response.body[0].id).to.equal(1)
      expect(response.body[0].name).to.equal('Leanne Graham')
      expect(response.body[0].username).to.equal('Bret')
      expect(response.body[0].email).to.equal('Sincere@april.biz')

      // Address
      expect(response.body[0].address.street).to.equal('Kulas Light')
      expect(response.body[0].address.suite).to.equal('Apt. 556')
      expect(response.body[0].address.city).to.equal('Gwenborough')
      expect(response.body[0].address.zipcode).to.equal('92998-3874')
      expect(response.body[0].address.geo.lat).to.equal('-37.3159')
      expect(response.body[0].address.geo.lng).to.equal('81.1496')

      // Phone e Site
      expect(response.body[0].phone).to.equal('1-770-736-8031 x56442')
      expect(response.body[0].website).to.equal('hildegard.org')

      // Company
      expect(response.body[0].company.name).to.equal('Romaguera-Crona')
      expect(response.body[0].company.catchPhrase).to.equal('Multi-layered client-server neural-net')
      expect(response.body[0].company.bs).to.equal('harness real-time e-markets')
      
    })
  })

  // Cenário de teste 404
  it('Register Not Found', () => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users/11',
      failOnStatusCode: false
    })
    .then((response) => {
      console.log('Register Not Found: ', response)

      expect(response.status).to.equal(404)
    })
    
  })

  // Cenário Add Register
  it('Add Register', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/users',
      body: {
            "id": "11",
            "name": "{{$randomFullName}}",
            "username": "{{$randomUserName}}",
            "email": "{{$randomEmail}}",
            "address": {
                "street": "{{$randomStreetName}}",
                "suite": "Apt. 556",
                "city": "{{$randomCity}}",
                "zipcode": "92998-3874",
            "geo": {
                "lat": "{{$randomLatitude}}",
                "lng": "{{$randomLongitude}}"
        }
    },
            "phone": "{{$randomPhoneNumber}}",
            "website": "{{$randomUrl}}",
            "company": {
                "name": "{{$randomCompanyName}}",
                "catchPhrase": "{{$randomCatchPhrase}}",
                "bs": "{{$randomBs}}"
    }
}
    })
    .then((response) => {
      console.log('Add Register: ', response)

      expect(response.status).to.equal(201)
      expect(response.body.id).to.not.equal('')
      expect(response.body.name).to.not.equal('')
      expect(response.body.username).to.not.equal('')
      expect(response.body.email).to.not.equal('')

      // Address
      expect(response.body.address.street).to.not.equal('')
      expect(response.body.address.suite).to.not.equal('')
      expect(response.body.address.city).to.not.equal('')
      expect(response.body.address.zipcode).to.not.equal('')
      expect(response.body.address.geo.lat).to.not.equal('')
      expect(response.body.address.geo.lng).to.not.equal('')

      // Phone e Site
      expect(response.body.phone).to.not.equal('')
      expect(response.body.website).to.not.equal('')

      // Company
      expect(response.body.company.name).to.not.equal('')
      expect(response.body.company.catchPhrase).to.not.equal('')
      expect(response.body.company.bs).to.not.equal('')
    })
  })

  // Update Register
  it('Update Register', () => {
    cy.request({
      method: 'PATCH',
      url: 'https://jsonplaceholder.typicode.com/users/10',
      body: {
        "name": "Teste Kira 2",
        "username": "Kira",
        "email": "teste@teste.com"
     }
    })
    .then((response) => {
      console.log('Update Register:', response)

      expect(response.status).to.equal(200)
      expect(response.body.id).to.not.equal('')
      expect(response.body.name).to.equal('Teste Kira 2')
      expect(response.body.username).to.equal('Kira')
      expect(response.body.email).to.equal('teste@teste.com')
    })
  })

  // Delete Register
  it('Delete Register', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/users/9'
    })
    .then((response) => {
      console.log('Delete Register: ', response)

      expect(response.status).to.equal(200)
    })
  })
})