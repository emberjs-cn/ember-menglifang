require 'build/src/widgets/templates'

if 'undefined' == typeof(Menglifang)
  Menglifang = {}

  if 'undefined' != typeof(window)
    window.Mlf = window.Menglifang = Mlf = Menglifang

## Used for bundling files together using neuter
Menglifang.Widgets = Ember.Namespace.create()
Menglifang.Widgets.VERSION = '0.4.3'

Ember.libraries?.register 'Menglifang Widgets', Menglifang.Widgets.VERSION

# Dependencies

# Utils

# Menglifang Widgets
require 'build/src/widgets/mixins'
require 'build/src/widgets/components'
require 'build/src/widgets/views'
