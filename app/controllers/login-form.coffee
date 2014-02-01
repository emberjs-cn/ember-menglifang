App.LoginFormController = Ember.ObjectController.extend
  identification: null
  password: null

  supportedBrowers: [
    { name: 'Chrome', url: 'http://www.google.com/chrome', icon: 'images/chrome.png' }
    { name: 'Firefox', url: 'http://www.mozilla.org/en-US/firefox/new/', icon: 'images/firefox.png' }
    { name: 'Safari', url: 'http://www.apple.com/sg/safari/', icon: 'images/safari.png' }
    { name: 'IE 9+', url: 'http://windows.microsoft.com/en-sg/internet-explorer/ie-10-worldwide-languages', icon: 'images/ie.png' }
  ]

  actions:
    authenticate: ->
      console.log "do authenticate with '#{@get('identification')}' and '#{@get('password')}'"
