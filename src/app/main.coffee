require 'build/src/widgets/main'

NotifierjsConfig.defaultTimeOut = 250
NotifierjsConfig.position = ["bottom", "right"]

if 'undefined' == typeof(Menglifang)
  Menglifang = {}

  if 'undefined' != typeof(window)
    window.Mlf = window.Menglifang = Mlf = Menglifang

## Used for bundling files together using neuter
#Menglifang.App = Ember.Namespace.create()
Menglifang.App =
  VERSION: '0.2.2'

  create: (options) ->
    Ember.merge Ember.I18n.translations, Menglifang.App.translations

    Menglifang.App.ApplicationAdapter.reopen
      host: options.host
      namespace: options.namespace

    Menglifang.App.LoginController.reopen
      title: options.title
      copyright: options.copyright

    app = Ember.Application.create()

    # 必须将配置信息付给Menglifang.App，因为内部将使用该命名空间来查找配置项
    Ember.merge Menglifang.App, options || {}
    Ember.merge app, Menglifang.App

    app

Ember.libraries?.register 'Menglifang App', Menglifang.App.VERSION

require 'build/src/app/translations'
require 'build/src/app/mixins'
require 'build/src/app/templates'
require 'build/src/app/initializers/simple-auth'

require 'build/src/app/lib/devise-authenticator'
require 'build/src/app/lib/devise-authorizer'
require 'build/src/app/lib/route'

require 'build/src/app/helpers/application'
require 'build/src/app/models'
require 'build/src/app/controllers'
require 'build/src/app/components'
require 'build/src/app/views'
require 'build/src/app/adapters'
require 'build/src/app/serializers'
require 'build/src/app/routes'
