var fs = require('fs');

module.exports = function(grunt) {
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'dist/jquery-table-sections.min.css': ['src/jquery-table-sections.css']
				}
			}
		},
		uglify: {
			options: {
				'banner': '/*! jquery-table-sections.js - v<%= pkg.version %> | https://github.com/asessa/jquery-table-sections | MIT */\n',
				'report': 'gzip',
				'ascii-only': true
			},
			main: {
				files: {
					'dist/jquery-table-sections.min.js': 'src/jquery-table-sections.js'
				}
			}
		}
	});

	// Default task.
    grunt.registerTask('default', ['uglify', 'cssmin']);
};