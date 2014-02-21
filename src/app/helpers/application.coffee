Ember.Handlebars.registerBoundHelper 'pt', (propName, options) ->
  key = if scope = options.hash.scope then "#{scope}.#{propName}" else propName
  Ember.I18n.t(key)

Ember.Handlebars.helper 'format-date', (value, options) ->
  return '' unless value

  format = options.hash['format'] || "YYYY-MM-DD hh:mm:ss"
  new Handlebars.SafeString(moment(value).format(format))

Ember.Handlebars.helper 'time-ago', (value, options) ->
  return '' unless value
  new Handlebars.SafeString(moment(value).fromNow())
