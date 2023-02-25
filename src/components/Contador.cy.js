import React from 'react'
import Contador from './Contador'

describe('<Contador />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Contador />);
    const buttonAdicionar = cy.contains('Adicionar');
    buttonAdicionar.click();
    cy.wait(1000);
    buttonAdicionar.click();
    cy.wait(1000);
    buttonAdicionar.click();

    const buttonRemover = cy.contains('Remover');
    buttonRemover.click();
    cy.wait(1000);
    buttonRemover.click();
    cy.wait(1000);
    const buttonResetar = cy.contains('Resetar');
    buttonResetar.click();
    
  })
})