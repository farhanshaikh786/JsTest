exports.config = {
	framework: 'jasmine2',
	capabilities:{
		'browserName': 'chrome'
	},
		
    seleniumAddress: 'http://localhost:4445/wd/hub',
	specs: ['test.js']

	};