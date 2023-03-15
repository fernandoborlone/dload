describe('Products', () => {
  describe('Context: List Products', () => {

    beforeEach(() => {

      cy.intercept('GET', '**/produtos').as('getProducts')

      cy.login()
      cy.visit('/admin/home')
    })
    it('Should verify the quantity products in on list', () => {
      let qntProducts = 2

      cy.access_products_list_page()
      cy.awaiting_requisition('@getProducts')
      cy.verify_products_list(qntProducts)
    })
  })
})