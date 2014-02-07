require 'build/src/widgets/main'

require 'build/src/app/templates'

if 'undefined' == typeof(Menglifang)
  Menglifang = {}

  if 'undefined' != typeof(window)
    window.Mlf = window.Menglifang = Mlf = Menglifang

## Used for bundling files together using neuter
Menglifang.App = Ember.Namespace.create()
Menglifang.App.VERSION = '0.0.1'

Ember.libraries?.register 'Menglifang App', Menglifang.App.VERSION

# Controllers

# Lib
#require 'build/src/app/lib/devise-authenticator'
#require 'build/src/app/lib/devise-authorizer'

require 'build/src/app/models'
require 'build/src/app/controllers'
require 'build/src/app/views/authenticated-view'

