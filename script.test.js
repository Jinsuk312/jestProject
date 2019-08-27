const googleSearch = require('./script');
// mock db to test, otherwise testing a real db is too expensive
dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

// a bunch of tests grouped together with the describe

describe('googleSearch', () => {
	it('this is a silly test', () => {
		expect('hello').toBe('hello');
	});
	it('its searching google', () => {
		expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
	});

	it('work with undefined and null input', () => {
		expect(googleSearch(undefined, dbMock)).toEqual([]);
		expect(googleSearch(null, dbMock)).toEqual([]);
	});

	it('works does not return more than 3 matches', () => {
		expect(googleSearch('.com', dbMock).length).toEqual(3);
	});
});
