describe('validating the login page of the SWAGLABS application ', () => {

    const password = 'secret_sauce'

    describe('login to the page with valid credentials', () => {
        before(() => {
            // Cypress starts out with a blank slate for each test
            // so we must tell it to visit our website with the `cy.visit()` command.
            // Since we want to visit the same URL at the start of all our tests,
            // we include it in our beforeEach function so that it runs before each test
            cy.visit("https://www.saucedemo.com/")

        })
        it('enter the user name and password', () => {
            const userId = 'standard_user'
            cy.get('#user-name').type(userId)
            cy.get('#password').type(password)

        })
        it('click on login button', () => {
            cy.get('[data-test="login-button"]').click();

        })
        it('verify the logged in page', () => {
            cy.get('span').contains("PRODUCTS", { matchCase: false })

        })
    })

    describe('login to the page with locked credentials', () => {
        before(() => {
            // Cypress starts out with a blank slate for each test
            // so we must tell it to visit our website with the `cy.visit()` command.
            // Since we want to visit the same URL at the start of all our tests,
            // we include it in our beforeEach function so that it runs before each test
            cy.visit("https://www.saucedemo.com/")
        })
        it('enter the locked credentials', () => {
            const userId="locked_out_user"
            cy.get('#user-name').type(userId)
            cy.get('#password').type(password)
        })
        it('verify the message"Sorry, this user has been locked out." after click on login button', () => {
            cy.get('[data-test="login-button"]').click();
            cy.get('h3').contains("Sorry, this user has been locked out.", { matchCase: false })

        })

    })
    describe('login to the page with problem user credentials', () => {
        before(() => {
            // Cypress starts out with a blank slate for each test
            // so we must tell it to visit our website with the `cy.visit()` command.
            // Since we want to visit the same URL at the start of all our tests,
            // we include it in our beforeEach function so that it runs before each test
            cy.visit("https://www.saucedemo.com/")
        })
        it('enter the problem user credentials', () => {
            const userId="problem_user"
            cy.get('#user-name').type(userId)
            cy.get('#password').type(password)
        })
        it('click on login button', () => {
            cy.get('[data-test="login-button"]').click();
        })
        it('verify the logged in page', () => {
            cy.get('span').contains("PRODUCTS", { matchCase: false })
        })

    })
    describe('login to the page with performence user credentials', () => {
        before(() => {
            // Cypress starts out with a blank slate for each test
            // so we must tell it to visit our website with the `cy.visit()` command.
            // Since we want to visit the same URL at the start of all our tests,
            // we include it in our beforeEach function so that it runs before each test
            cy.visit("https://www.saucedemo.com/")
        })
        it('enter the problem user credentials', () => {
            const userId="performance_glitch_user"
            cy.get('#user-name').type(userId)
            cy.get('#password').type(password)
        })
        it('click on login button', () => {
            cy.get('[data-test="login-button"]').click();
        })
        it('verify the logged in page', () => {
            cy.get('span[class="title"]').invoke('val').then(sometext =>cy.log(sometext))

        })

    })

})
