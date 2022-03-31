describe('nativelib-nonbuildable', () => {
  beforeEach(() => cy.visit('/iframe.html?id=fourcomponent--primary&args=name:katerina;age:33;happy:true;'));
  it('should render the component', () => {
    cy.get('nativestory-four').should('exist');
  });
});