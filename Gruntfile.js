module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                standalone: "BrightWork",
                options: {
                transform: [
                    ["babelify", {
                        loose: "all"
                    }]
                ]},
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
        jsdoc2md: {
            withOptions: {
                options: {
                    'no-gfm': false,
                    'global-index-format': 'grouped'
                },
                src: '*.js',
                dest: 'docs/Reference.md'
            }
        },
        copy: {
            docs: {
                src: 'README.md',
                dest: 'docs/GettingStarted.md'
            },
        },
        mochaTest: {
            test: {
                options: {
                    require: 'babel-core/register'
                },
                src: ['test/**/*.js']
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-jsdoc-to-markdown')
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("test", ["mochaTest"]);
    grunt.registerTask("build", ["browserify", "docs"]);
    grunt.registerTask("docs", ["jsdoc2md", "copy:docs"]);
};