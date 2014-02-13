'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: [
                    '**/*.min.js',
                    'node_modules/**/*.js'
                ],
            },
            all: [
                '**/*.js'
            ]
        },
        uglify: {
            lib: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'lib/polyfill-speechsynthesis.min.map'
                },
                files: {
                    'lib/polyfill-speechsynthesis.min.js': ['lib/polyfill-speechsynthesis.js']
                }
            }
        }
    });

    grunt.registerTask('default', function () {
        grunt.task.run([
            'jshint',
            'uglify'
        ]);
    });
};