# Ember Menglifang Dependencies
require 'bower_components/bootstrap/dist/js/bootstrap'
require 'bower_components/list-view/list-view'
require 'bower_components/select2/select2'
require 'bower_components/select2/select2_locale_zh-CN'
require 'bower_components/bootstrap-datetimepicker/js/bootstrap-datetimepicker'
require 'bower_components/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN'
require 'dist/menglifang-widgets'

window.App = Ember.Application.create
  LOG_TRANSITIONS: true

# Controllers
require 'build/demo/widgets/controllers/login-form'
require 'build/demo/widgets/controllers/sidebar'
require 'build/demo/widgets/controllers/toolbar'
require 'build/demo/widgets/controllers/form'
require 'build/demo/widgets/controllers/select2'

# Views
require 'build/demo/widgets/views/application'

# Components
require 'build/demo/widgets/components/login-form'
require 'build/demo/widgets/components/main-toolbar'

# Route
require 'build/demo/widgets/routes/list'

# Router
require 'build/demo/widgets/router'

# Compiled Handlebars templates
require 'build/demo/widgets/templates'
