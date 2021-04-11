describe('header', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headercomponent--primary'));

  it('should render the component', () => {
    cy.get('nx-demo-app-header').should('exist');
  });
});
