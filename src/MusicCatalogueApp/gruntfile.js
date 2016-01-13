module.exports = function (grunt) {
    // load Grunt plugins from NPM
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // configure plugins
    grunt.initConfig({
        uglify: {
            my_target: {
                files: { 'wwwroot/js/musicCatalogueApp/app.js': ['Scripts/MusicCatalogueApp/app.js', 'Scripts/MusicCatalogueApp/**/*.js'] }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'wwwroot/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'wwwroot/css',
                    ext: '.min.css'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['Scripts/**/*.js', 'wwwroot/css/site.css'],
                tasks: ['uglify', 'cssmin']
            }
        }
    });

    // define tasks
    grunt.registerTask('default', ['cssmin', 'uglify', 'watch']);
};