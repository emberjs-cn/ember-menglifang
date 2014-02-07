
# Ember Menglifang Dependencies
require 'bower_components/bootstrap/dist/js/bootstrap'
require 'bower_components/list-view/list-view'
require 'dist/menglifang-app'

window.App = Ember.Application.create
  LOG_TRANSITIONS: true

require 'build/app/account-module/controllers/authenticated'

require 'build/app/account-module/views/application'
require 'build/app/account-module/views/authenticated'

require 'build/app/account-module/router'

require 'build/app/account-module/templates'
