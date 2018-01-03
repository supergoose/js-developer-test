module.exports = function(grunt) {

  grunt.initConfig({
    sass:{
        dist:{
            files:{
                'app/css/spongetest.css' : 'app/sass/spongetest.scss'
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);

};

