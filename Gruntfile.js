
module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				 files: {
				 	 'pub/css/style.css'            : 'pub/sass/style.scss',
				 	 'pub/css/flexbox-grid.css'     : 'pub/sass/flexbox-grid.scss',
				 	 'pub/css/parallax-landing.css' : 'pub/sass/parallax-landing.scss',
				 	 'pub/css/supreme.css'          : 'pub/sass/supreme.scss',
				 	 'pub/css/kawakubo.css'          : 'pub/sass/kawakubo.scss'
				 }
			}
		},
		watch: {
		  sass: {
		    files: ['pub/sass/**/*.scss'],
		    tasks: ['sass'],
		  }
		},	  
		livereloadx: {
      		static: true,
      		dir: '.'
    	}
	});

	grunt.loadNpmTasks('livereloadx');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass', 'livereloadx', 'watch']);
};