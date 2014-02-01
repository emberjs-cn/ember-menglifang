# Ember Menglifang Dependencies
require 'bower_components/bootstrap/dist/js/bootstrap'
require 'bower_components/ember-simple-auth/ember-simple-auth'
require 'dist/ember-menglifang'

window.App = Ember.Application.create
  LOG_TRANSITIONS: true

# Controllers
require 'build/app/controllers/login-form'

# Views

# Components
require 'build/app/components/login-form'

# Router
require 'build/app/router'

# Compiled Handlebars templates
require 'build/app/templates'
