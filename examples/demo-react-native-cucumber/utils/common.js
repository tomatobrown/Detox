const detox = require('detox');
const config = require('../config').detox;
const datePickerIDs = require('../../src/core/datePicker/testIDs');


const common = {
	/**
	 * Resets the simulator, installs and launches the app, and selects the target environment.
	 */
	async cleanRestart(world) {
		await device.launchApp({delete: true});
	},

	/**
	 * Sets the data on a 3 column UIPicker action screen
	 * @param {Date} date to set
	 */
	async setDate(newDate) {
		if (device.getPlatform() === 'ios') {
			const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
				'July', 'August', 'September', 'October', 'November', 'December'];
			await expect(element(by.type('UIPickerView'))).toBeVisible();
			await element(by.type('UIPickerView')).setColumnToValue(0, monthNames[newDate.getUTCMonth()]);
			await element(by.type('UIPickerView')).setColumnToValue(1, newDate.getUTCDate().toString());
			await element(by.type('UIPickerView')).setColumnToValue(2, newDate.getFullYear().toString());
			await element(by.id(datePickerIDs.actions.commit)).tap();
		} else {
			const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
				'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			const today = new Date();
			const curMonth = monthNames[today.getUTCMonth()];
			const newMonth = monthNames[newDate.getUTCMonth()];
			const newDay = newDate.getUTCDate().toString();
			const newYear = newDate.getFullYear().toString();
			await element(by.text(curMonth)).tap();
			await element(by.text(curMonth)).typeText(`${newMonth}\t${newDay}\t${newYear}\t`);
			await element(by.text('OK')).tap();
		}
	},

	/**
	 * Initializes a new device and selects the environment.
	 */
	async startDevice(world) {
		await detox.init(config, {launchApp: true});
	}
};

module.exports = common;
