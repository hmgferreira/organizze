import App from '../../src/App';
describe('App.cy.js', () => {
  it('playground', () => {
    cy.viewport(2000, 1000);
    cy.mount(<App />);
    cy.get('[name=email]').type('admin@admin.com.br');
    cy.get('[name=senha]').type('12345678');
    cy.get('[type=button]').click();
    cy.contains('Despesas').click();
  })
})