# Ember Menglifang Dependencies
require 'bower_components/bootstrap/dist/js/bootstrap'
require 'dist/ember-menglifang'

window.App = Ember.Application.create
  LOG_TRANSITIONS: true

# Controllers
require 'build/app/controllers/login-form'
require 'build/app/controllers/sidebar'
require 'build/app/controllers/toolbar'
require 'build/app/controllers/form'

# Views
require 'build/app/views/application'

# Components
require 'build/app/components/list-narrow'
require 'build/app/components/main-toolbar'

# Route
require 'build/app/routes/lists-narrow'

# Router
require 'build/app/router'

# Compiled Handlebars templates
require 'build/app/templates'
