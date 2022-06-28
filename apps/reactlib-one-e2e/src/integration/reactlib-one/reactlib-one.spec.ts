describe('reactlib-one: ReactlibOne component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reactlibone--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ReactlibOne!');
    });
});
