# Ember Menglifang Dependencies
require 'bower_components/bootstrap/dist/js/bootstrap'
require 'bower_components/list-view/list-view'
require 'dist/menglifang-widgets'

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
require 'build/app/components/login-form'
require 'build/app/components/main-toolbar'

# Route
require 'build/app/routes/list'

# Router
require 'build/app/router'

# Compiled Handlebars templates
require 'build/app/templates'
