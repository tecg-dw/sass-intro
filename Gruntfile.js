"use strict";

module.exports = function( grunt ) {

    // 1. load grunt tasks
    grunt.loadNpmTasks( "grunt-sass" );
    grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-eslint" );
    grunt.loadNpmTasks( "grunt-browser-sync" );

    // 2. config grunt tasks
    grunt.initConfig( {
        "browserSync": {
            "dev": {
                "bsFiles": {
                    "src": "css/*.css"
                },
                "options": {
                    "proxy": "localhost:12345",
                    "watchTask": true
                }
            }
        },
        "sass": {
            "options": {
                "sourceMap": true
            },
            "styles": {
                "files": {
                    "css/styles.css": "sass/styles.scss"
                }
            }
        },
        "watch": {
            "styles": {
                "files": [ "sass/**/*.scss" ],
                "tasks": [ "sass:styles" ],
                "options": {
                    "spawn": false
                }
            }
        },
        "eslint": {
            "options": {
                "configFile": ".eslintrc.json"
            },
            "scripts": [ "scripts/**/*.js" ]
        }
    } );

    // 3. alias tasks
    grunt.registerTask( "default", [ "build" ] );

    grunt.registerTask( "build", [ "sass:styles" ] );

    grunt.registerTask( "work", [
        "build",
        "browserSync:dev",
        "watch:styles"
    ] );


};
