Menglifang.Widgets.LoginFormComponent = Ember.Component.extend
  templateName: 'components/mlf-login-form'
  classNames: ['mlf-login-form']

  title: '用户登录'
  copyright: '&copy; 2011-2014 北京梦立方网络科技有限公司'

  titleHtmlSafe: (->
    @get('title').htmlSafe()
  ).property('title')

  copyrightHtmlSafe: ( ->
    @get('copyright').htmlSafe()
  ).property('copyright')

  didInsertElement: ->
    Ember.$('input#identification').focus()

  actions:
    login: ->
      @sendAction('action')
