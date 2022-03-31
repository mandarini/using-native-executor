describe('nativelib-buildable', () => {
  beforeEach(() => cy.visit('/iframe.html?id=threecomponent--primary&args=name:katerina;age:33;happy:true;'));
  it('should render the component', () => {
    cy.get('nativestory-three').should('exist');
  });
});