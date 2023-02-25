import Receitas from '../../src/pages/Receitas';

describe('Receitas.cy.js', () => {
  it('playground', () => {
    cy.mount(<Receitas />);
    cy.get('#descricao').type('Teste Cypress 2');
    cy.get('#valor').type('9,99');
    cy.contains('Salvar').click();
    
  })
})