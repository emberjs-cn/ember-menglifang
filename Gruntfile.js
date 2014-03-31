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
  grunt.loadNpmTasks('grunt-gh-pages');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner: '/*! <%=pkg.name%> - v<%=pkg.version%> (build <%=pkg.build%>) - ' +
        '<%=grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT")%> */'
    },

    'gh-pages': {
      options: {
        base: 'gh-pages'
      },
      src: ['**']
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
      site: {
        expand: true,
        cwd: "site/",
        src: [ "**/*.coffee" ],
        dest: "build/site/",
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
          return sourceFile.replace(/src\/widgets\/templates\//, '').replace(/src\/app\/templates\//, '').replace(/site\/templates\//, '')
        }
      },
      'build/src/widgets/templates.js': ["src/widgets/templates/**/*.hbs"],
      'build/src/app/templates.js': ["src/app/templates/**/*.hbs"],
      'build/site/templates.js': ["site/templates/**/*.hbs"]
    },

    neuter: {
      options:{
        includeSourceURL: false,
        separator: "\n"
      },
      "dist/menglifang-widgets.js": "build/src/widgets/main.js",
      "dist/menglifang-app.js":     "build/src/app/main.js",
      "gh-pages/js/app.js":         "build/site/coffee/app.js"
    },

    clean: [
      "./dist",
      "./build",
      "./gh-pages"
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
      all: ["Gruntfile.js", "build/src/**/*.js", "build/site/**/*.js", "build/api/**/*.js"]
    },

    less: {
      development: {
        options: {
          yuicompress: true
        },
        files: {
          "./dist/menglifang-widgets.css": ["./src/widgets/less/menglifang-widgets.less"],
          "./dist/menglifang-app.css": ["./src/app/less/menglifang-app.less"],
          "./gh-pages/css/app.css": ["./site/less/app.less"]
        }
      }
    },

    copy: {
      gh_pages: {
        files: [
          {
            src: ['site/index.html'],
            dest: 'gh-pages/index.html'
          }, {
            expand: true,
            cwd: 'site/images/',
            src: ['**'],
            dest: 'gh-pages/images/'
          }, {
            expand: true,
            cwd: 'src/app/images/',
            src: ['**'],
            dest: 'gh-pages/images/'
          }, {
            expand: true,
            cwd: 'src/app/images/',
            src: ['**'],
            dest: 'dist/images/'
          }, {
            expand: true,
            cwd: 'bower_components/font-awesome/fonts/',
            src: ['**'],
            dest: 'gh-pages/fonts/'
          }, {
            expand: true,
            cwd: 'bower_components/bootstrap/fonts/',
            src: ['**'],
            dest: 'gh-pages/fonts/'
          }, {
            expand: true,
            cwd: 'bower_components/select2/',
            src: ['*.png', '*.gif'],
            dest: 'gh-pages/css/'
          }, {
            expand: true,
            cwd: 'bower_components/handlebars/',
            src: ['handlebars.js'],
            dest: 'gh-pages/js/'
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
        files: ["src/**/*.coffee", "site/**/*.coffee", "api/**/*.coffee", "bower_components/**/*.js"],
        tasks: ["coffee", "neuter"]
      },
      handlebars: {
        files: ["src/**/*.hbs", "site/**/*.hbs"],
        tasks: ["emberTemplates", "neuter"]
      },
      less: {
        files: ["site/**/*.less", "site/**/*.css", "src/**/*.less"],
        tasks: ["less", "copy"]
      },
      copy: {
        files: ["site/index.html"],
        tasks: ["copy"]
      }
    }
  });

  // Default tasks.
  grunt.registerTask("build_src", ["coffee:src", "emberTemplates", "neuter"]);

  grunt.registerTask("build_site", ["coffee:site", "emberTemplates", "neuter"]);

  grunt.registerTask("build_api", ["coffee:api", "neuter"]);

  grunt.registerTask("build", ["build_src", "build_site", "build_api", "less", "copy", "uglify"]);

  grunt.registerTask("default", ["build", "watch"]);

};
