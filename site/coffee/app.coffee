# IE Support. Should be right here following ember.js
#require 'bower_components/html5shiv/dist/html5shiv'
#require 'bower_components/respond/dest/respond.min'

# Ember Menglifang Dependencies
require 'bower_components/jquery/dist/jquery'
require 'bower_components/jquery.browser/dist/jquery.browser'
require 'bower_components/cldr/plurals'

require 'bower_components/ember/ember'

#require 'bower_components/es5-shim/es5-shim'
#require 'bower_components/es5-shim/es5-sham'

require 'bower_components/ember-data/ember-data'

require 'bower_components/ember-i18n/lib/i18n'
require 'bower_components/ember-simple-auth/ember-simple-auth'
require 'bower_components/ember-simple-auth/ember-simple-auth-devise'
require 'bower_components/bootstrap/dist/js/bootstrap'
require 'bower_components/list-view/index'
require 'bower_components/notifier/notifier'
require 'bower_components/ember-addons.bs_for_ember/dist/js/bs-core.max'
require 'bower_components/ember-addons.bs_for_ember/dist/js/bs-button.max'
require 'bower_components/ember-addons.bs_for_ember/dist/js/bs-modal.max'
require 'bower_components/select2/select2'
require 'bower_components/select2/select2_locale_zh-CN'
require 'bower_components/bootstrap-datetimepicker/js/bootstrap-datetimepicker'
require 'bower_components/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN'
require 'bower_components/momentjs/moment'
require 'bower_components/momentjs/lang/zh-cn'

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

require 'build/site/coffee/controllers/side-list'
require 'build/site/coffee/controllers/side-list-demo'

require 'build/site/coffee/controllers/pagination'
require 'build/site/coffee/controllers/pagination-demo'

require 'build/site/coffee/controllers/select2'
require 'build/site/coffee/controllers/select2-demo'

require 'build/site/coffee/controllers/datetime-picker'
require 'build/site/coffee/controllers/datetime-picker-demo'

require 'build/site/coffee/controllers/basic-table'
require 'build/site/coffee/controllers/basic-table-demo'

require 'build/site/coffee/router'

require 'build/site/coffee/routes/basics'
require 'build/site/coffee/routes/forms'
require 'build/site/coffee/routes/tables'
