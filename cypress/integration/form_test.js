describe('', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000/pizza');
        })

    const nameInput = () => cy.get('input[name=name]');
    const oliveBox = () => cy.get ('input[name=olives]')
    const caperBox = () => cy.get ('input[name=capers]')
    const onionsBox = () => cy.get ('input[name=onions]')
    const garlicBox = () => cy.get ('input[name=garlic]')
    const AddToOrderBtn = () => cy.get('button[type = submit]')

    it('Make sure the elements show', () => {

        nameInput().should('exist');
        oliveBox().should('exist');
        caperBox().should('exist');
        onionsBox().should('exist');
        garlicBox().should('exist');
        AddToOrderBtn().should('exist');

    })

    it ('Inputs work?', () => {
        nameInput().should('have.value', '')
                    .type('text')
                    .should('have.value', 'text');
        
        oliveBox().should('not.be.disabled')
        caperBox().should('not.be.disabled')
        onionsBox().should('not.be.disabled')
        garlicBox().should('not.be.disabled')
        AddToOrderBtn().should('not.be.disabled')
                        
    })


 })