# Copied from https://github.com/realityendshere/emberella/blob/master/packages/emberella/lib/mixins/remote_query_bindings.coffee
get = Ember.get
keys = Ember.keys
defineProperty = Ember.defineProperty

###
  `Menglifang.App.RemoteQueryBindingsMixin` packages the properties specified in the
  `remoteQueryBindings` attribute into a plain object to be used as query
  parameters for fetching data. To prevent excessive remote requests, the
  notification of property changes that affect the query object is debounced
  for a configurable number of milliseconds (700ms default).

  This mixin is for use with controllers.

  @example
    App.PeopleController = Ember.ArrayController.extend(Menglifang.App.RemoteQueryBindingsMixin, {
      remoteQueryBindings: ['query:q', 'sort', 'reverse'], // Map the 'query' property to 'q'
      remoteQueryDidChange: function() {
        // DO SOMETHING WHEN QUERY OBJECT CHANGES
      }
    })

  @class RemoteQueryBindingsMixin
  @namespace Menglifang.App
###

Menglifang.App.RemoteQueryBindingsMixin = Ember.Mixin.create

  init: ->
    ret = @_super()
    @applyRemoteQueryBindings()
    get @, 'remoteQuery'
    ret

  ###
    The query object: a plain object to send as query parameters.

    @property remoteQuery
    @type Object
    @default null
  ###
  remoteQuery: null

  ###
    How long to wait after the last change to the query object before notifying
    the host object of the change.

    @property remoteQueryDelay
    @type Integer
    @default 700
  ###
  remoteQueryDelay: 700

  ###
    Debounced notification function.

    @property debounceRemoteQueryChange
    @type Function
  ###
  debounceRemoteQueryChange: Ember.computed ->
    Menglifang.App.debounce =>
      @remoteQueryDidChange(get(@, 'remoteQuery'))
    , get(@, 'remoteQueryDelay')
  .property 'remoteQueryDelay'

  ###
    Setup bindings to watch the properties named in the `remoteQueryBindings`
    attribute of this object. As these properties change, the remote query
    object will be re-assembled and set as the `remoteQuery` property.

    @method applyRemoteQueryBindings
    @return null
  ###
  applyRemoteQueryBindings: ->
    remoteQueryBindings = @remoteQueryBindings
    return unless remoteQueryBindings
    lookup = {}

    remoteQueryBindings.forEach (binding) ->
      [property, param] = binding.split(':')
      lookup[(param or property)] = property

    params = keys(lookup)
    properties = params.map (param) -> lookup[param]

    # create computed property
    queryComputed = Ember.computed =>
      result = {}
      params.forEach (param) =>
        val = get(@, lookup[param])
        result[param] = val if val
      result

    queryComputed.property.apply(queryComputed, properties)

    # define query computed properties
    defineProperty @, 'remoteQuery', queryComputed
    null

  ###
    Hook for performing actions when notified of updates to the remote
    query object. Override to enable controller to respond to changes to the
    query object.

    @method remoteQueryDidChange
    @param {Object} query The query object
  ###
  remoteQueryDidChange: Ember.K

  ###
    @private

    Watches for all changes to the remote query object and calls the debounced
    notification function.

    @method _remoteQueryChange
  ###
  _remoteQueryChange: Ember.observer ->
    get(@, 'debounceRemoteQueryChange')()
  , 'remoteQuery'
