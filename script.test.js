const googleSearch = require('./script');
// mock db to test, otherwise testing a real db is too expensive
dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];
// first param is a string, second param is a function or test that runs
it('this is a silly test', () => {
	expect('hello').toBe('hello');
});
it('its searching google', () => {
	expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
});
