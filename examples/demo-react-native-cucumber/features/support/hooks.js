/* eslint-disable */
require('babel-register');

const {Before, BeforeAll, AfterAll} = require('cucumber');
const detox = require('detox');
const {startDevice} = require('../../utils/common');

BeforeAll(async function () {
	this.env = ENVIRONMENT;
});

Before({timeout: 120 * 1000}, async function () {
	await startDevice(this);
});

AfterAll(async function () {
	await detox.cleanup();
});
