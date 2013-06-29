'use strict';

var path = require('path');

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      }
    },
    watch: {
      options: {
        livereload: true
      },
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      sass: {
        files: '<%= sass.dist.src %>',
        tasks: ['sass']
      },
      templates: {
        files: 'src/**/*.jade',
        tasks: ['jade']
      },
      images: {
        files: 'src/**/*.png',
        tasks: ['imagemin']
      },
      livereload: {
        files: ['gh-pages/*.html']
      }
    },
    connect: {
      server: {
        options: {
          middleware: function(connect, options) {
            return [
              // livereload
              require('connect-livereload')(),
              // Serve static files.
              connect.static(path.resolve(options.base))
            ];
          }
        }
      }
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          'index.html': 'src/index.jade'
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        src: 'src/style.sass',
        dest: 'style.css'
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 1
        },
        files: {
          'stickfigure-hmmmcomputer.png': 'src/stickfigure-hmmmcomputer.png',
          'right-eye.png': 'src/right-eye.png',
          'left-eye.png': 'src/left-eye.png'
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task.
  // grunt.registerTask('default', ['jshint', 'qunit', 'clean', 'sass', 'concat', 'uglify']);
  // grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('default', ['jshint', 'sass', 'jade', 'imagemin']);
  grunt.registerTask('server', ['connect', 'watch']);

};
