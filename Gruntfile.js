module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        
        sass: {
            options: {
                compass: true,
                style: "expanded"
            },
            foundation: {
                files: [{
                    src: ["foundation/sass/app.scss"],
                    dest: "foundation/stylesheets/app.css"
                }]
            },
            helium: {
                files: [{
                    src: ["helium/scss/master.scss"],
                    dest: "helium/css/master.css"
                }]
            }
        },
        
        watch: {
            foundation: {
                files: ['foundation/sass/*.scss'],
                tasks: ['sass:foundation']
            },
            helium: {
                files: ['helium/scss/*.scss'],
                tasks: ['sass:helium']
            }
            
        }
    });
  
  
  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

};