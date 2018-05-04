var assemble = require('./');
var del = require('del');
var fs = require('fs');

// fabricator-assemble task options
var options = {
	layout: 'default',
	layouts: './test/fixtures/views/layouts/*',
	layoutIncludes: './test/fixtures/views/layouts/includes/*',
	materials: './test/fixtures/materials/**/*',
	views: ['./test/fixtures/views/**/*', '!./test/fixtures/views/+(layouts)/**'],
	data: ['./test/fixtures/data/**/*.{yml,json}'],
	docs: './test/fixtures/docs/**/*',
	dest: './test/output',
	helpers: {
		markdown: require('helper-markdown')
	},
	logErrors: true
};

del.sync([options.dest]);

assemble(options);
