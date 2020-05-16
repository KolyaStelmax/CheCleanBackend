const newCaseMock = {
	details: 'мусор',
	location: { latitude: 49.457857, longitude: 32.043704 },
	image_url: 'test-image'
};

const casesMock = [
	{
		id: 1,
		details: 'мусор',
		location: { latitude: 49.457857, longitude: 32.043704, address: 'test_address', map_image_url: 'test-url' },
		image_url: 'test-image',
		status: 0,
		created_at: '2020-05-03T14:09:38.244Z'
	},
	{
		id: 2,
		details: 'мусор2',
		location: { latitude: 49.457857, longitude: 32.043704, address: 'test_address', map_image_url: 'test-url' },
		image_url: 'test-image',
		status: 0,
		created_at: '2020-05-03T14:09:38.244Z'
	}
];

module.exports = {
	newCaseMock,
	casesMock,
};
