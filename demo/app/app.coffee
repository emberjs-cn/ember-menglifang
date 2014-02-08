# Ember Menglifang Dependencies
require 'bower_components/jquery/jquery'
require 'bower_components/handlebars/handlebars'
require 'bower_components/ember/ember'
require 'bower_components/ember-data/ember-data'
require 'bower_components/ember-simple-auth/ember-simple-auth'
require 'bower_components/bootstrap/dist/js/bootstrap'
require 'bower_components/list-view/list-view'
require 'bower_components/notifier/notifier'

require 'dist/menglifang-app'

Menglifang.App.TRANSLATIONS =
  admin: '管理员'
  user: '普通用户'

App = window.App = Menglifang.App.create
  host: 'http://localhost:8000'
  namespace: 'v1'

require 'build/demo/app/router'
