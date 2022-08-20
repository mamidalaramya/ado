describe('validating the login page of the SWAGLABS application ', () => {


    describe('login to the page with valid credentials', () => {
        before(() => {
            // Cypress starts out with a blank slate for each test
            // so we must tell it to visit our website with the `cy.visit()` command.
            // Since we want to visit the same URL at the start of all our tests,
            // we include it in our beforeEach function so that it runs before each test
            cy.task('log', 'before')
        })

        it('navigate to the SWAGLABS page', () => {
            cy.task('log', 'navigate to the SWAGLABS page')
        })
        it('enter the user name and password', () => {
            cy.task('log', 'enter the user name and password')
        })
        it('click on login button', () => {
            cy.task('log', 'click on login button')

        })
        it('verify the logged in page', () => {
            cy.task('log', 'verify the logged in page')

        })
    })

    describe('login to the page with locked credentials', () => {
        before(() => {
            // Cypress starts out with a blank slate for each test
            // so we must tell it to visit our website with the `cy.visit()` command.
            // Since we want to visit the same URL at the start of all our tests,
            // we include it in our beforeEach function so that it runs before each test
            cy.task('log', 'before')
        })
        it('navigate to the SWAGLABS page', () => {
            cy.task('log', 'navigate to the SWAGLABS page')

        })
        it('enter the locked credentials', () => {
            cy.task('log', 'enter the locked credentials')
        })
        it('verify the message"Sorry, this user has been locked out." after click on login button', () => {
            cy.task('log', 'verify the message"Sorry, this user has been locked out." after click on login button')
        })

    })
    describe('login to the page with problem user credentials', () => {
        before(() => {
            // Cypress starts out with a blank slate for each test
            // so we must tell it to visit our website with the `cy.visit()` command.
            // Since we want to visit the same URL at the start of all our tests,
            // we include it in our beforeEach function so that it runs before each test
            cy.task('log', 'before')
        })
        it('navigate to the SWAGLABS page', () => {
            cy.task('log', 'navigate to the SWAGLABS page')
        })
        it('enter the problem user credentials', () => {
            cy.task('log', 'enter the problem user credentials')
        })
        it('click on login button', () => {
            cy.task('log', 'click on login button')
        })
        it('verify the logged in page', () => {
            cy.task('log', 'verify the logged in page')
        })

    })
    describe('login to the page with performence user credentials', () => {
        before(() => {
            // Cypress starts out with a blank slate for each test
            // so we must tell it to visit our website with the `cy.visit()` command.
            // Since we want to visit the same URL at the start of all our tests,
            // we include it in our beforeEach function so that it runs before each test
            cy.task('log', 'before')
        })
        it('navigate to the SWAGLABS page', () => {
            cy.task('log', 'navigate to the SWAGLABS page')
        })
        it('enter the problem user credentials', () => {
            cy.task('log', 'enter the problem user credentials')
        })
        it('click on login button', () => {
            cy.task('log', 'click on login button')
        })
        it('verify the logged in page', () => {
            cy.task('log', 'verify the logged in page')
        })

    })

})
