const {setWorldConstructor} = require('cucumber');
const {initialize} = require('rbh-cucumber-js');
const World = require('rbh-cucumber-js/support/world');

// base library
initialize();

// overrides
setWorldConstructor(World);
