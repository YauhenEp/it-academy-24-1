const hooks = require('./hooks');
const { capability } = require('./capabilities');

exports.config = {
    ...capability,
    runner: 'local',
    specs: [
        '../test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}],'reportportal'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

 ...hooks,
}
