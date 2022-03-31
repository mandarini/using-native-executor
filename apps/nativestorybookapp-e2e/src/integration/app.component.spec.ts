describe('nativestorybookapp', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary&args=name:katerina;age:33;happy:true;'));
  it('should render the component', () => {
    cy.get('nativestory-root').should('exist');
  });
});