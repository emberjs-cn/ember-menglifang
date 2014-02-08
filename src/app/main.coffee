require 'build/src/widgets/main'

NotifierjsConfig.defaultTimeOut = 250
NotifierjsConfig.position = ["bottom", "right"]

if 'undefined' == typeof(Menglifang)
  Menglifang = {}

  if 'undefined' != typeof(window)
    window.Mlf = window.Menglifang = Mlf = Menglifang

## Used for bundling files together using neuter
#Menglifang.App = Ember.Namespace.create()
Menglifang.App = {}
Menglifang.App.VERSION = '0.0.1'

Ember.libraries?.register 'Menglifang App', Menglifang.App.VERSION

require 'build/src/app/templates'
require 'build/src/app/initializers/simple-auth'

require 'build/src/app/lib/devise-authenticator'
require 'build/src/app/lib/devise-authorizer'

require 'build/src/app/helpers/application'
require 'build/src/app/models'
require 'build/src/app/controllers'
require 'build/src/app/components'
require 'build/src/app/views'
require 'build/src/app/adapters'
require 'build/src/app/serializers'
require 'build/src/app/routes'

Menglifang.App.create = (options) ->
  Menglifang.App.ApplicationAdapter.reopen
    host: options.host
    namespace: options.namespace

  app = Ember.Application.create()
  $.extend(app, Menglifang.App, options || {})

  app
