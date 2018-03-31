'use strict';
const got = require('got');

const searchEndpoint = 'https://itunes.apple.com/lookup?id=';

module.exports = appId => {
	return new Promise((resolve, reject) => {
		got(searchEndpoint + appId, {
			json: true
		})
		.then(json => {
			if (json.body.results && json.body.results.length > 0) {
				resolve(json.body.results[0].version);
			} else {
				reject(new Error('Invalid iOS app identifier'));
			}
		})
		.catch(err => reject(err));
	});
};
