module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: [
				'Gruntfile.js', 
				'src/js/main.js', 
				'src/js/app/objsort.js',
				'src/js/app/application.js', 
				'src/js/app/cardviewmodel.js',
				'src/js/app/cardsviewmodel.js'
			],
			build: [
				'build/js/optimized.js'
			]
		},
		clean: {
			default: ['build/**']
		},
		concat: {
			build: {
				src: [
					'src/html/head.html',
					'src/html/welcome.html',
					'src/html/card-panel.html',
					'src/html/cards-panel.html',
					'src/html/foot.html'
				],
				dest: 'build/index.html'
			}
		},
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'src/', src: 'api/**', dest: 'build/'},
					{expand: true, cwd: 'src/', src: 'css/**', dest: 'build/'},
					{expand: true, cwd: 'src/', src: 'fonts/**', dest: 'build/'},
					{expand: true, cwd: 'src/', src: 'img/**', dest: 'build/'},
					{expand: true, cwd: 'src/', src: 'js/**', dest: 'build/'},
					{expand: true, cwd: 'src/', src: '.htaccess', dest: 'build/'},
					{expand: true, cwd: 'src/', src: 'signin.html', dest: 'build/'},
					{expand: true, cwd: 'src/', src: 'config.json', dest: 'build/'}
//					{expand: true, cwd: 'src/', 'src: 'src/.**', dest: 'build'}
				]
			}
		},
		php: {
			dev: {
				options: {
					port: 9000,
					base: 'src',
					open: true,
					keepalive: true
				}
			},
			build: {
				options: {
					port: 9001,
					base: 'build',
					open: true,
					keepalive: true
				}
			}
		},
		requirejs: {
			compile: {
				options: {
					name: 'app/application',
					baseUrl: "src/js/lib",
					mainConfigFile: "src/js/main.js",
					out: "build/js/optimized.js",
					skipSemiColonInsertion: true,
					optimize: 'none'
				}
			}
		}		
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-php');

	// Default task(s).
	grunt.registerTask('default', ['jshint:all', 'concat', 'copy', 'php:build']);
	//grunt.registerTask('default', ['jshint:all', 'requirejs', 'jshint:build']);
	grunt.registerTask('build', ['clean', 'uglify']);

};
