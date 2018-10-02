const detox = require('detox');
const config = require('../package').detox;


const common = {
	/**
	 * Resets the simulator, installs and launches the app, and selects the target environment.
	 */
	async cleanRestart(world) {
		await device.launchApp({delete: true});
	},

	/**
	 * Initializes a new device and selects the environment.
	 */
	async startDevice(world) {
		await detox.init(config, {launchApp: true});
	}
};

module.exports = common;
