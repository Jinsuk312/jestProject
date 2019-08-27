const fetch = require('node-fetch');
const swapi = require('./script2');
// without done, .assertions() will not identify the expect(), because it runs getPeople and finishes the call without running expect()

it('calls swapi to get star wars people', done => {
	expect.assertions(1);
	swapi.getPeople(fetch).then(data => {
		expect(data.count).toEqual(87);
		done();
	});
});
// just return the promise and jest will wait for the promise to return
// if you dont return the promise, it will pass the test and wont run the expect()
it('calls swapi to get star wars people', () => {
	expect.assertions(1);
	return swapi.getPeople(fetch).then(data => {
		expect(data.count).toEqual(87);
	});
});

it('calls swapi to get star wars people with a promise', () => {
	expect.assertions(2);
	return swapi.getPeoplePromise(fetch).then(data => {
		expect(data.count).toEqual(87);
		expect(data.results.length).toBeGreaterThan(5);
	});
});
