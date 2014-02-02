require 'build/src/templates'

## Used for bundling files together using neuter
Ember.Menglifang = Ember.Namespace.create()
Ember.Menglifang.VERSION = '0.0.1'

Ember.libraries?.register 'Ember Menglifang', Ember.Menglifang.VERSION

# Dependencies

# Utils

# Ember Menglifang
require 'build/src/components'
require 'build/src/views'
