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
      srcs: {
        options: {
          bare: true
        },
        expand: true,
        cwd: "src/",
        src: [ "**/*.coffee" ],
        dest: "build/src/",
        ext: ".js"
      },
      app: {
        expand: true,
        cwd: "app/",
        src: [ "**/*.coffee" ],
        dest: "build/app/",
        ext: ".js"
      }
    },

    emberTemplates: {
      options: {
        templateName: function(sourceFile) {
          return sourceFile.replace(/src\/templates\//, '').replace(/app\/templates\//, '');
        }
      },
      'build/src/templates.js': ["src/templates/**/*.hbs"],
      'build/app/templates.js': ["app/templates/**/*.hbs"]
    },

    neuter: {
      options:{
        includeSourceURL: false,
        separator: "\n"
      },
      "dist/ember-menglifang.js":  "build/src/main.js",
      "examples/app.js":      "build/app/app.js"
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
      all: ["Gruntfile.js", "build/src/**/*.js"]
    },

    less: {
      development: {
        options: {
          yuicompress: true
        },
        files: {
          "./dist/ember-menglifang.css": ["./src/less/ember-menglifang.less"],
          "./examples/css/app.css": ["./app/assets/less/app.less"]
        }
      }
    },

    copy: {
      examples: {
        files: [
          {
            src: ['app/index.html'],
            dest: 'examples/index.html'
          }, {
            expand: true,
            cwd: 'app/assets/images/',
            src: ['**'],
            dest: 'examples/images/'
          }, {
            expand: true,
            flatten: true,
            cwd: 'bower_components/',
            src: ['**/*.js'],
            dest: 'examples/lib'
          }, {
            expand: true,
            flatten: true,
            cwd: 'bower_components/',
            src: ['**/*.css'],
            dest: 'examples/css'
          }, {
            expand: true,
            flatten: true,
            cwd: 'bower_components/',
            src: ['font-awesome/css/*.css'],
            dest: 'examples/css'
          }, {
            expand: true,
            cwd: 'bower_components/font-awesome/fonts/',
            src: ['**'],
            dest: 'examples/fonts/'
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
          './dist/ember-menglifang.min.js': [
            // Include dist in bundle
            './dist/ember-menglifang.js'
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
        files: ["src/**/*.coffee", "app/**/*.coffee", "bower_components/**/*.js"],
        tasks: ["coffee", "neuter"]
      },
      handlebars: {
        files: ["src/**/*.hbs", "app/**/*.hbs"],
        tasks: ["emberTemplates", "neuter"]
      },
      less: {
        files: ["app/assets/**/*.less", "app/assets/**/*.css", "src/**/*.less"],
        tasks: ["less", "copy"]
      },
      copy: {
        files: ["app/index.html"],
        tasks: ["copy"]
      }
    }
  });

  // Default tasks.
  grunt.registerTask("build_srcs", ["coffee:srcs", "emberTemplates", "neuter"]);

  grunt.registerTask("build_app", ["coffee:app", "emberTemplates", "neuter"]);

  grunt.registerTask("default", ["build_srcs", "build_app", "less", "copy", "uglify", "watch"]);

};
