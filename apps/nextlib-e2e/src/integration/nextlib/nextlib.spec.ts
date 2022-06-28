describe('nextlib: Nextlib component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nextlib--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Nextlib!');
    });
});
