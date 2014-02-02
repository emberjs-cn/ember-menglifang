# Ember Menglifang Dependencies
require 'bower_components/bootstrap/dist/js/bootstrap'
require 'dist/ember-menglifang'

window.App = Ember.Application.create
  LOG_TRANSITIONS: true

# Controllers
require 'build/app/controllers/login-form'
require 'build/app/controllers/sidebar'

# Views
require 'build/app/views/application'

# Components

# Router
require 'build/app/router'

# Compiled Handlebars templates
require 'build/app/templates'
