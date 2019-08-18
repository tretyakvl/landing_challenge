module.exports = function (grunt) {
  const sass = require('node-sass');
  require('jit-grunt')(grunt);

  grunt.initConfig({
    watch: {
      sass: {
        files: ['source/sass/**/*.scss'],
        tasks: ['sass']
      },
      browserify: {
        files: ['source/js/main.js', 'source/js/modules/**/*.js'],
        tasks: ['browserify']
      }
    },
    sass: {
      options: {
        implementation: sass
      },
      dev: {
        files: {
          'source/css/style.css': 'source/sass/main.scss'
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'source/css/*.css',
            'source/*.html',
            'source/js/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: 'source/',
          browser: 'firefox'
        }
      }
    },
    svgstore: {
      options: {
        formatting: {
          indent_size: 2
        },
        inheritviewbox: true,
        includeTitleElement: false,
        cleanup: ['fill', 'fill-rule']
      },
      default: {
        files: {
          'source/img/sprite.svg': ['source/img/inline/*.svg'],
        },
      },
    },
    browserify: {
      default: {
        files: {
          'source/js/output.js': 'source/js/main.js'
        }
      }
    }
  });

  grunt.registerTask('server', ['sass', 'browserSync', 'watch']);
};
