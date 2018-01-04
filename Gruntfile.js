module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt); 

  grunt.initConfig({
    sass:{
        dist:{
            files:{
                'app/css/spongetest.css' : 'app/sass/spongetest.scss'
            }
        }
    },
    babel:{
        options: {
            sourceMap: true,
            presets: [['env', {
              targets: {
                "browsers": ["last 2 versions", "safari >= 7"]
              }
            }]],
            plugins: ["transform-es2015-modules-commonjs", "add-module-exports"]
            
        },
        dist: {
            files: {
                'app/js/dist/lib/content.js': 'app/js/src/lib/content.js',
                'app/js/dist/spongetest.js' : 'app/js/src/spongetest.js'
            }
        }
    },
    browserify:{
        dist:{
            files:{
                'app/js/dist/spongetest.js' : 'app/js/dist/spongetest.js'
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['sass', 'babel', 'browserify']);

};

