describe('nglib-nonbuildable', () => {
  beforeEach(() => cy.visit('/iframe.html?id=twocomponent--primary&args=name:katerina;age:33;happy:true;'));
  it('should render the component', () => {
    cy.get('nativestory-two').should('exist');
  });
});