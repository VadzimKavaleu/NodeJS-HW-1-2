module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            dist: {
                files: {
                    'src/index.js':  './es6.js'
                }
            }
        },
        uglify: {
            build: {
                src: 'es5.js',
                dest: 'es5.min.js'
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-uglify');  
    
    grunt.registerTask('default', ['babel', 'uglify']);

};