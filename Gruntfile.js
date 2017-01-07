module.exports = function (grunt) {
    grunt.initConfig({        

        webpack: {
            options: {
                entry: './src/index.js',
                output: {
                    path: 'dist/web/',
                    filename: 'index.js',
                    library: 'bw-js-sdk',
                    libraryTarget: 'umd'
                },
                node: {
                    process: false,
                    global: true
                }
            },
            build: {
                module: {
                    loaders: [
                        {
                            test: /\.js$/,
                            exclude: /(node_modules|bower_components)/,
                            loader: 'babel-loader',
                            query: {
                                presets: ['es2015']
                            }
                        }
                    ]
                }
            }
        },

        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    src: ['./src/*.js'],
                    dest: './dist/node'
                }]
            }
        },

        watch: {
            scripts: {
                files: ["./*.js"],
                tasks: ["webpack", "babel"]
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

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-jsdoc-to-markdown')
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask("default", ["build"]);
    grunt.registerTask("test", ["mochaTest"]);
    grunt.registerTask("build", ["babel", "webpack:build", "docs"]);
    grunt.registerTask("docs", ["jsdoc2md", "copy:docs"]);
};