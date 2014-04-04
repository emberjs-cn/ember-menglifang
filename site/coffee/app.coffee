# Ember Menglifang Dependencies
require 'bower_components/jquery/dist/jquery'
require 'bower_components/jquery.browser/dist/jquery.browser'
require 'bower_components/cldr/plurals'
require 'bower_components/ember/ember'
require 'bower_components/ember-i18n/lib/i18n'
require 'bower_components/ember-data/ember-data'
require 'bower_components/ember-simple-auth/ember-simple-auth'
require 'bower_components/bootstrap/dist/js/bootstrap'
require 'bower_components/list-view/list-view'
require 'bower_components/notifier/notifier'
require 'bower_components/ember-addons.bs_for_ember/dist/js/bs-core.max'
require 'bower_components/ember-addons.bs_for_ember/dist/js/bs-button.max'
require 'bower_components/ember-addons.bs_for_ember/dist/js/bs-modal.max'

require 'dist/menglifang-app'

App = window.App = Ember.Application.create()

require 'build/site/templates'

require 'build/site/coffee/translations'

require 'build/site/coffee/components/remote-page'
require 'build/site/coffee/components/document-page'

require 'build/site/coffee/controllers/application'
require 'build/site/coffee/controllers/login-form'
require 'build/site/coffee/controllers/login-form-demo'

require 'build/site/coffee/controllers/side-bar'
require 'build/site/coffee/controllers/side-bar-demo'

require 'build/site/coffee/router'
