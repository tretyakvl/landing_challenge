module.exports = function (grunt) {
  const sass = require('node-sass');
  require('jit-grunt')(grunt);

  grunt.initConfig({
    watch: {
      files: ['source/sass/**/*.scss'],
      tasks: ['sass']
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
  });

  grunt.registerTask('server', ['sass', 'browserSync', 'watch']);
};
