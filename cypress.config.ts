import { defineConfig } from 'cypress'


module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        viewportWidth: 1920,
        viewportHeight: 1080,
        pageLoadTimeout: 60000,
        watchForFileChanges: false,
        testIsolation: false,
        defaultCommandTimeout: 20000,
        baseUrl: "http://localhost:3000",
        supportFile: "cypress/support/components.ts",
        video: true
    },
});
