module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            loose: "all"
                        }]
                    ]
                },
                files: {
                    // if the source file has an extension of es6 then
                    // we change the name of the source file accordingly.
                    // The result file's extension is always .js
                    "./dist/index.js": ["./index.js"]
                }
            }
        },
        watch: {
            scripts: {
                files: ["./*.js"],
                tasks: ["browserify"]
            }
        },
        jsdoc : {
            dist : {
                src: ['*.js', 'README.md'],
                options: {
                    destination : 'docs',
                    configure: './.jsdoc.json',
                    template: './node_modules/minami'
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-jsdoc');

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["browserify"]);
};