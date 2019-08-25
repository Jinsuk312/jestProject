// most list of google search results
const googleDatabase = [
	'dogs.com',
	'sandwichrecipes.com',
	'animals.com',
	'apples.com',
	'catspeople.com',
	'callofduty.com',
	'catsrock.com',
	'adoptsomecats.com',
	'catsoverdogs.com'
];
// search algorithm cut to 3 results at most
const googleSearch = searchInput => {
	const matches = googleDatabase.filter(website => {
		return website.includes(searchInput);
	});
	return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch('cats'));

module.exports = googleSearch;
