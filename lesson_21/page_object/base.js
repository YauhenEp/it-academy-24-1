class Base {
    navigate(url) {
        cy.visit(url)
    }
}

module.exports = Base;