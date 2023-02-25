import Despesas from '../../src/pages/Despesas';
import { MemoryRouter } from 'react-router-dom'

describe('Despesas.cy.js', () => {
  it('playground', () => {
    cy.mount(
      <MemoryRouter>
        <Despesas />
      </MemoryRouter>
    );
  })
})