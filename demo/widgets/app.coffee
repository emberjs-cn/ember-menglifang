# Ember Menglifang Dependencies
require 'bower_components/bootstrap/dist/js/bootstrap'
require 'bower_components/momentjs/moment'
require 'bower_components/momentjs/lang/zh-cn'
require 'bower_components/list-view/list-view'
require 'bower_components/select2/select2'
require 'bower_components/select2/select2_locale_zh-CN'
require 'bower_components/bootstrap-datetimepicker/js/bootstrap-datetimepicker'
require 'bower_components/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN'
require 'bower_components/antiscroll/antiscroll'
require 'bower_components/jquery-ui/ui/jquery-ui'
require 'bower_components/jquery-mousewheel/jquery.mousewheel'
require 'bower_components/ember-table/dist/ember-table'
require 'dist/menglifang-widgets'

window.App = Ember.Application.create
  LOG_TRANSITIONS: true

# Controllers
require 'build/demo/widgets/controllers/login-form'
require 'build/demo/widgets/controllers/sidebar'
require 'build/demo/widgets/controllers/toolbar'
require 'build/demo/widgets/controllers/form'
require 'build/demo/widgets/controllers/select2'

require 'build/demo/widgets/controllers/tables/basic'
require 'build/demo/widgets/controllers/tables/indexed'
require 'build/demo/widgets/controllers/tables/align'
require 'build/demo/widgets/controllers/tables/topbar'
require 'build/demo/widgets/controllers/tables/format-cell-content'
require 'build/demo/widgets/controllers/tables/row-selection'

require 'build/demo/widgets/controllers/grid'

# Views
require 'build/demo/widgets/views/application'

# Components

# Route
require 'build/demo/widgets/routes/list'

# Router
require 'build/demo/widgets/router'

# Compiled Handlebars templates
require 'build/demo/widgets/templates'
