module.exports = function (grunt) {
  'use strict';

  var path = require('path');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-neuter');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner: '/*! <%=pkg.name%> - v<%=pkg.version%> (build <%=pkg.build%>) - ' +
        '<%=grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT")%> */'
    },

    coffee: {
      src: {
        options: {
          bare: true
        },
        expand: true,
        cwd: "src/",
        src: [ "**/*.coffee" ],
        dest: "build/src/",
        ext: ".js"
      },
      demo: {
        expand: true,
        cwd: "demo/",
        src: [ "**/*.coffee" ],
        dest: "build/demo/",
        ext: ".js"
      },
      api: {
        expand: true,
        cwd: "api/",
        src: [ "**/*.coffee" ],
        dest: "build/api",
        ext: ".js"
      }
    },

    emberTemplates: {
      options: {
        templateName: function(sourceFile) {
          return sourceFile.replace(/src\/widgets\/templates\//, '').replace(/src\/app\/templates\//, '').replace(/demo\/widgets\/templates\//, '').replace(/demo\/app\/templates\//, '');
        }
      },
      'build/src/widgets/templates.js': ["src/widgets/templates/**/*.hbs"],
      'build/src/app/templates.js': ["src/app/templates/**/*.hbs"],
      'build/demo/widgets/templates.js': ["demo/widgets/templates/**/*.hbs"],
      'build/demo/app/templates.js': ["demo/app/templates/**/*.hbs"]
    },

    neuter: {
      options:{
        includeSourceURL: false,
        separator: "\n"
      },
      "dist/menglifang-widgets.js":  "build/src/widgets/main.js",
      "dist/menglifang-app.js":  "build/src/app/main.js",
      "examples/public/widgets/app.js":      "build/demo/widgets/app.js",
      "examples/public/app/app.js":      "build/demo/app/app.js",
      "examples/app.js":      "build/api/app.js",
      "examples/db-setup.js":      "build/api/db-setup.js"
    },

    clean: [
      "./dist",
      "./build",
      "./examples"
    ],

    jsdoc: {
      all: {
        src: [
          "./build/src/*.js",
          "./build/src/**/*.js"
        ],
        dest: "doc/"
      }
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
          next: true,
          require: true
        }
      },
      all: ["Gruntfile.js", "build/src/**/*.js", "build/demo/**/*.js", "build/api/**/*.js"]
    },

    less: {
      development: {
        options: {
          yuicompress: true
        },
        files: {
          "./dist/menglifang-widgets.css": ["./src/widgets/less/menglifang-widgets.less"],
          "./dist/menglifang-app.css": ["./src/app/less/menglifang-app.less"],
          "./examples/public/widgets/css/app.css": ["./demo/widgets/less/app.less"],
          "./examples/public/app/css/app.css": ["./demo/app/less/app.less"]
        }
      }
    },

    copy: {
      examples: {
        files: [
          {
            src: ['demo/widgets/index.html'],
            dest: 'examples/public/widgets/index.html'
          }, {
            src: ['demo/index.html'],
            dest: 'examples/public/index.html'
          }, {
            expand: true,
            cwd: 'demo/widgets/images/',
            src: ['**'],
            dest: 'examples/public/widgets/images/'
          }, {
            src: ['demo/app/index.html'],
            dest: 'examples/public/app/index.html'
          }, {
            expand: true,
            cwd: 'demo/app/images/',
            src: ['**'],
            dest: 'examples/public/app/images/'
          }, {
            expand: true,
            cwd: 'build/api/func/',
            src: ['**'],
            dest: 'examples/func/'
          }, {
            expand: true,
            cwd: 'src/app/images/',
            src: ['**'],
            dest: 'examples/public/widgets/images/'
          }, {
            expand: true,
            cwd: 'src/app/images/',
            src: ['**'],
            dest: 'dist/images/'
          }, {
            expand: true,
            cwd: 'src/app/images/',
            src: ['**'],
            dest: 'examples/public/app/images/'
          }, {
            expand: true,
            cwd: 'src/app/images/',
            src: ['**'],
            dest: 'examples/public/images/'
          }, {
            expand: true,
            flatten: true,
            cwd: 'bower_components/',
            src: ['**/*.js'],
            dest: 'examples/public/lib'
          }, {
            expand: true,
            flatten: true,
            cwd: 'bower_components/',
            src: ['**/*.css'],
            dest: 'examples/public/css'
          }, {
            expand: true,
            flatten: true,
            cwd: 'bower_components/',
            src: ['font-awesome/css/*.css'],
            dest: 'examples/public/css'
          }, {
            expand: true,
            cwd: 'bower_components/font-awesome/fonts/',
            src: ['**'],
            dest: 'examples/public/fonts/'
          }, {
            expand: true,
            cwd: 'bower_components/select2/',
            src: ['*.png', '*.gif'],
            dest: 'examples/public/css/'
          }, {
            expand: true,
            cwd: 'bower_components/bootstrap/fonts/',
            src: ['**'],
            dest: 'examples/public/widgets/fonts/'
          }
        ]
      },
      tests: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: 'bower_components/',
            src: ['**/*.js'],
            dest: 'tests/lib'
          }, {
            expand: true,
            flatten: true,
            cwd: 'bower_components/',
            src: ['**/*.css'],
            dest: 'tests/css'
          }
        ]
      }
    },

    qunit: {
      all: ['tests/*.html']
    },

    uglify: {
      file: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          preserveComments: false,
          beautify: false,
          mangle: true,
          report: 'min'
        },

        files: {
          './dist/menglifang-widgets.min.js': [
            // Include dist in bundle
            './dist/menglifang-widgets.js'
          ],
          './dist/menglifang-app.min.js': [
            './dist/menglifang-app.js'
          ]
        }
      }
    },

    watch: {
      grunt: {
        files: ["Gruntfile.coffee"],
        tasks: ["default"]
      },
      code: {
        files: ["src/**/*.coffee", "demo/**/*.coffee", "api/**/*.coffee", "bower_components/**/*.js"],
        tasks: ["coffee", "neuter"]
      },
      handlebars: {
        files: ["src/**/*.hbs", "demo/**/*.hbs"],
        tasks: ["emberTemplates", "neuter"]
      },
      less: {
        files: ["demo/**/*.less", "demo/**/*.css", "src/**/*.less"],
        tasks: ["less", "copy"]
      },
      copy: {
        files: ["demo/index.html", "demo/widgets/index.html", "demo/app/index.html"],
        tasks: ["copy"]
      }
    }
  });

  // Default tasks.
  grunt.registerTask("build_src", ["coffee:src", "emberTemplates", "neuter"]);

  grunt.registerTask("build_demo", ["coffee:demo", "emberTemplates", "neuter"]);

  grunt.registerTask("build_api", ["coffee:api", "neuter"]);

  grunt.registerTask("build", ["build_src", "build_demo", "build_api", "less", "copy", "uglify"]);

  grunt.registerTask("default", ["build", "watch"]);

};
