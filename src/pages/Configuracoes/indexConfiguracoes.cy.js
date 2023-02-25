import React from 'react'
import Configuracoes from './index'

describe('<Configuracoes />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Configuracoes />)
  })
})