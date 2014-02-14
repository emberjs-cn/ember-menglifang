(function() {

var Menglifang, Mlf, _ref;


})();
(function() {

var Menglifang, Mlf, _ref;


})();
(function() {

Ember.TEMPLATES["components/mlf-login-form"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <li>\n      <a target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("icon")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("/>\n        <div>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n      </a>\n    </li>\n    ");
  return buffer;
  }

  data.buffer.push("<section class=\"main\">\n  <form class=\"login\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "view.titleHtmlSafe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    <p class=\"float\">\n      <label for=\"identification\"><i class=\"fa fa-user\"></i>用户名/邮箱：</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("identification"),
    'type': ("text"),
    'value': ("view.identification"),
    'placeholder': ("请输入您的用户名/邮箱...")
  },hashTypes:{'id': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'id': depth0,'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </p>\n    <p class=\"float\">\n      <label for=\"password\"><i class=\"fa fa-key\"></i>密码：</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("password"),
    'type': ("password"),
    'value': ("view.password"),
    'placeholder': ("请输入您的密码..."),
    'class': ("showpassword")
  },hashTypes:{'id': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'type': depth0,'value': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    <p class=\"clearfix\"></p>\n    <p class=\"clearfix\">\n      <button type=\"submit\" class=\"pull-right\">登录</button>\n    </p>\n    <p>");
  stack1 = helpers._triageMustache.call(depth0, "view.copyrightHtmlSafe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n  </form>\n</section>\n<div class=\"browsers\">\n  <ul>\n    ");
  stack1 = helpers.each.call(depth0, "view.supportedBrowers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/mlf-main-toolbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <li>\n      ");
  stack1 = helpers['if'].call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </li>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "route", "model.id", options) : helperMissing.call(depth0, "link-to", "route", "model.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }

  data.buffer.push("<ol class=\"breadcrumb pull-left\">\n  ");
  stack1 = helpers.each.call(depth0, "view.parentItems", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <li class=\"active\">");
  stack1 = helpers._triageMustache.call(depth0, "view.activeItem.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n</ol>\n");
  return buffer;
  
});

Ember.TEMPLATES["mlf-app-view"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.sidebar || (depth0 && depth0.sidebar),options={hash:{
    'title': ("view.title"),
    'menus': ("view.sidebar.menus"),
    'starterItems': ("view.sidebar.starterItems")
  },hashTypes:{'title': "ID",'menus': "ID",'starterItems': "ID"},hashContexts:{'title': depth0,'menus': depth0,'starterItems': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sidebar", options))));
  data.buffer.push("\n\n<div class=\"mlf-app-main\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["mlf-sidebar-view"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <ul ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("text")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        ");
  stack1 = helpers.each.call(depth0, "items", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("text")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" data-placement=\"right\" data-toggle=\"tooltip\">\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </li>\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              <div class=\"icon\">\n                <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("icon")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                <div class=\"title\">");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n              </div>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("text")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" data-placement=\"right\" data-toggle=\"tooltip\">\n        <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" data-toggle=\"tab\">\n          <img class=\"menu-trigger\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("icon")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n          <div class=\"title\">");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n        </a>\n      </li>\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <li>\n        <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n          <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("icon")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n           ");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </a>\n      </li>\n    ");
  return buffer;
  }

  data.buffer.push("<div id=\"brand\">\n  <div class=\"logo\">");
  stack1 = helpers._triageMustache.call(depth0, "view.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n  <div class=\"switch-button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggle", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></div>\n</div>\n<div id=\"navigator\">\n  <div class=\"menu-items\">\n    ");
  stack1 = helpers.each.call(depth0, "view.menus", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <ul class=\"menu-triggers\">\n    ");
  stack1 = helpers.each.call(depth0, "view.menus", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</div>\n<div id=\"starter\" class=\"dropdown\">\n  <a id=\"home\" class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">\n    <i class=\"fa fa-th-large\"></i>\n  </a>\n  <ul class=\"dropdown-menu\">\n    ");
  stack1 = helpers.each.call(depth0, "view.starterItems", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</div>\n");
  return buffer;
  
});

})();
(function() {

if ('undefined' === typeof Menglifang) {
  Menglifang = {};
  if ('undefined' !== typeof window) {
    window.Mlf = window.Menglifang = Mlf = Menglifang;
  }
}

Menglifang.Widgets = Ember.Namespace.create();

Menglifang.Widgets.VERSION = '0.2.0';

if ((_ref = Ember.libraries) != null) {
  _ref.register('Menglifang Widgets', Menglifang.Widgets.VERSION);
}


})();
(function() {


Menglifang.Widgets.LoginFormComponent = Ember.Component.extend({
  templateName: 'components/mlf-login-form',
  classNames: ['mlf-login-form'],
  title: '用户登录',
  copyright: '&copy; 2011-2014 北京梦立方网络科技有限公司',
  titleHtmlSafe: (function() {
    return this.get('title').htmlSafe();
  }).property('title'),
  copyrightHtmlSafe: (function() {
    return this.get('copyright').htmlSafe();
  }).property('copyright'),
  didInsertElement: function() {
    return Ember.$('input#identification').focus();
  },
  actions: {
    login: function() {
      return this.sendAction('action');
    }
  }
});


})();
(function() {


Menglifang.Widgets.MainToolbarComponent = Ember.Component.extend({
  templateName: 'components/mlf-main-toolbar',
  classNames: ['mlf-main-toolbar'],
  parentItems: (function() {
    if (!Ember.isEmpty(this.get('items'))) {
      return this.get('items').slice(0, this.get('items.length') - 1);
    }
  }).property('items.@each'),
  activeItem: (function() {
    return this.get('items.lastObject');
  }).property('items.@each')
});


})();
(function() {


Menglifang.Widgets.AppView = Ember.View.extend({
  layoutName: 'mlf-app-view',
  classNames: ['mlf-app'],
  title: '',
  sidebar: {
    menus: Ember.A(),
    starterItems: Ember.A()
  }
});


})();
(function() {


Menglifang.Widgets.SidebarView = Ember.View.extend({
  templateName: 'mlf-sidebar-view',
  classNames: ['mlf-sidebar'],
  classNameBindings: ['expanded:mlf-sidebar-expanded'],
  expanded: true,
  title: 'A Title',
  menus: Ember.A(),
  starterItems: Ember.A(),
  didInsertElement: function() {
    this.$().find('*[data-toggle="tooltip"]').tooltip();
    return this.$().find('.menu-triggers li a').first().click();
  },
  actions: {
    toggle: function() {
      return this.toggleProperty('expanded');
    }
  }
});

Ember.Handlebars.helper('sidebar', Menglifang.Widgets.SidebarView);


})();
(function() {


Menglifang.Widgets.ListItemView = Ember.ReusableListItemView.extend({
  classNames: ['ember-list-item-view', 'mlf-list-item']
});

Menglifang.Widgets.ListView = Ember.ListView.extend({
  classNames: ['ember-list-view', 'mlf-list'],
  itemViewClass: Menglifang.Widgets.ListItemView,
  didInsertElement: function() {
    this.set('height', Ember.$('.ember-list-view').parent().height());
    return this._super();
  }
});


})();
(function() {


Menglifang.Widgets.Select2 = Ember.Select.extend({
  classNames: ['mlf-select2'],
  placeholder: '请选择...',
  allowClear: true,
  minimumInputLength: 0,
  maximumSelectionSize: 3,
  didInsertElement: function() {
    return this.$().select2({
      placeholder: this.get('placeholder'),
      allowClear: this.get('allowClear'),
      minimumInputLength: this.get('minimumInputLength'),
      maximumSelectionSize: this.get('maximumSelectionSize')
    });
  },
  willDestroyElement: function() {
    return this.$().select2('destroy');
  }
});

Ember.Handlebars.helper('select2', Menglifang.Widgets.Select2);


})();
(function() {

NotifierjsConfig.defaultTimeOut = 250;

NotifierjsConfig.position = ["bottom", "right"];

if ('undefined' === typeof Menglifang) {
  Menglifang = {};
  if ('undefined' !== typeof window) {
    window.Mlf = window.Menglifang = Mlf = Menglifang;
  }
}

Menglifang.App = {
  VERSION: '0.2.2',
  create: function(options) {
    var app;
    Ember.merge(Ember.I18n.translations, Menglifang.App.translations);
    Menglifang.App.ApplicationAdapter.reopen({
      host: options.host,
      namespace: options.namespace
    });
    Menglifang.App.LoginController.reopen({
      title: options.title,
      copyright: options.copyright
    });
    app = Ember.Application.create();
    Ember.merge(Menglifang.App, options || {});
    Ember.merge(app, Menglifang.App);
    return app;
  }
};

if ((_ref = Ember.libraries) != null) {
  _ref.register('Menglifang App', Menglifang.App.VERSION);
}


})();
(function() {


Menglifang.App.DeviseAuthenticator = Ember.SimpleAuth.Authenticators.OAuth2.extend({
  authenticate: function(credentials) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      return Ember.$.ajax({
        url: '/users/sign_in',
        type: 'POST',
        data: {
          grant_type: 'password',
          user: {
            login: credentials.identification,
            password: credentials.password
          }
        },
        dataType: 'json'
      }).then(function(response) {
        return Ember.run(function() {
          return resolve({
            user_email: response.user.email,
            user_token: response.user.authentication_token,
            account_id: response.user.id,
            access_token: response.user.authentication_token
          });
        });
      }, function(xhr, status, error) {
        return Ember.run(function() {
          return reject(xhr.responseText);
        });
      });
    });
  }
});


})();
(function() {


Menglifang.App.DeviseAuthorizer = Ember.SimpleAuth.Authorizers.Base.extend({
  authorize: function(jqXHR, requestOptions) {
    if (!Ember.isEmpty(this.get('session.user_email')) && !Ember.isEmpty(this.get('session.user_token'))) {
      jqXHR.setRequestHeader('X-User-Email', this.get('session.user_email'));
      return jqXHR.setRequestHeader('X-User-Token', this.get('session.user_token'));
    }
  }
});


})();
(function() {


Ember.Route.reopen({
  afterModel: function() {
    var _this = this;
    return Ember.run.next(this, function() {
      return _this.controllerFor('authenticated').send('currentPathDidChange');
    });
  }
});


})();
(function() {


Menglifang.App.throttle = function(func, wait) {
  var args, context, later, previous, result, timeout;
  context = null;
  args = null;
  timeout = null;
  result = null;
  previous = 0;
  later = function() {
    previous = new Date();
    timeout = null;
    return result = func.apply(context, args);
  };
  return function() {
    var now, remaining;
    now = new Date();
    remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
    } else {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

Menglifang.App.debounce = function(func, wait, immediate) {
  var result, timeout;
  timeout = null;
  result = null;
  return function() {
    var args, callNow, context, later;
    context = this;
    args = arguments;
    later = function() {
      timeout = null;
      if (!immediate) {
        return result = func.apply(context, args);
      }
    };
    callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};


})();
(function() {


Menglifang.App.translations = {
  'models.role.admin': '管理员',
  'models.role.user': '普通用户',
  'routes.users': '用户管理',
  'routes.users.new': '添加用户',
  'routes.account': '个人设置',
  'routes.account.profile': '个人信息',
  'routes.account.password': '修改密码'
};


})();
(function() {


Menglifang.App.AuthenticatedRouteMixin = Ember.Mixin.create(Ember.SimpleAuth.AuthenticatedRouteMixin);


})();
(function() {


Menglifang.App.ModelManagerMixin = Ember.Mixin.create({
  modelName: '',
  humanModelName: '',
  afterSaveRoute: (function() {
    return this.get('modelName');
  }).property('modelName'),
  afterCancelRoute: (function() {
    return Ember.String.pluralize(this.get('modelName'));
  }).property('modelName'),
  afterDestroyRoute: (function() {
    return Ember.String.pluralize(this.get('modelName'));
  }).property('modelName'),
  removeConfirmationTitle: '确认删除',
  removeConfirmationMessage: (function() {
    return "您确认需要删除该" + (this.get('humanModelName')) + "吗？";
  }).property('humanModelName'),
  removeConfirmationButtons: [
    Ember.Object.create({
      title: '确认',
      clicked: "confirmRemove"
    }), Ember.Object.create({
      title: '取消',
      dismiss: 'modal'
    })
  ],
  beforeConfirmRemove: Ember.K,
  actions: {
    revertChanges: function() {
      if (this.get('model.isDirty')) {
        return this.get('model').rollback();
      }
    },
    save: function() {
      var _this = this;
      return this.get('model').save().then(function() {
        Notifier.success("保存" + (_this.get('humanModelName')) + "成功");
        return _this.transitionToRoute(_this.get('afterSaveRoute'), _this.get('model'));
      }, function() {
        return Notifier.error("保存" + (_this.get('humanModelName')) + "失败");
      });
    },
    remove: function() {
      return Bootstrap.ModalManager.show('removeConfirmation');
    },
    cancel: function() {
      this.get('model').rollback();
      return this.transitionToRoute(this.get('afterCancelRoute'));
    },
    confirmRemove: function() {
      var _this = this;
      Bootstrap.ModalManager.hide('removeConfirmation');
      if (!this.beforeConfirmRemove()) {
        return false;
      }
      this.get('model').deleteRecord();
      return this.get('model').save().then(function() {
        Notifier.success("删除" + (_this.get('humanModelName')) + "成功");
        return _this.transitionToRoute(_this.get('afterDestroyRoute'));
      }, function() {
        return Notifier.error("删除" + (_this.get('humanModelName')) + "失败");
      });
    }
  }
});


})();
(function() {

var defineProperty, get, keys;

get = Ember.get;

keys = Ember.keys;

defineProperty = Ember.defineProperty;

/*
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
*/


Menglifang.App.RemoteQueryBindingsMixin = Ember.Mixin.create({
  init: function() {
    var ret;
    ret = this._super();
    this.applyRemoteQueryBindings();
    get(this, 'remoteQuery');
    return ret;
  },
  /*
      The query object: a plain object to send as query parameters.
  
      @property remoteQuery
      @type Object
      @default null
  */

  remoteQuery: null,
  /*
      How long to wait after the last change to the query object before notifying
      the host object of the change.
  
      @property remoteQueryDelay
      @type Integer
      @default 700
  */

  remoteQueryDelay: 700,
  /*
      Debounced notification function.
  
      @property debounceRemoteQueryChange
      @type Function
  */

  debounceRemoteQueryChange: Ember.computed(function() {
    var _this = this;
    return Menglifang.App.debounce(function() {
      return _this.remoteQueryDidChange(get(_this, 'remoteQuery'));
    }, get(this, 'remoteQueryDelay'));
  }).property('remoteQueryDelay'),
  /*
      Setup bindings to watch the properties named in the `remoteQueryBindings`
      attribute of this object. As these properties change, the remote query
      object will be re-assembled and set as the `remoteQuery` property.
  
      @method applyRemoteQueryBindings
      @return null
  */

  applyRemoteQueryBindings: function() {
    var lookup, params, properties, queryComputed, remoteQueryBindings,
      _this = this;
    remoteQueryBindings = this.remoteQueryBindings;
    if (!remoteQueryBindings) {
      return;
    }
    lookup = {};
    remoteQueryBindings.forEach(function(binding) {
      var param, property, _ref;
      _ref = binding.split(':'), property = _ref[0], param = _ref[1];
      return lookup[param || property] = property;
    });
    params = keys(lookup);
    properties = params.map(function(param) {
      return lookup[param];
    });
    queryComputed = Ember.computed(function() {
      var result;
      result = {};
      params.forEach(function(param) {
        var val;
        val = get(_this, lookup[param]);
        if (val) {
          return result[param] = val;
        }
      });
      return result;
    });
    queryComputed.property.apply(queryComputed, properties);
    defineProperty(this, 'remoteQuery', queryComputed);
    return null;
  },
  /*
      Hook for performing actions when notified of updates to the remote
      query object. Override to enable controller to respond to changes to the
      query object.
  
      @method remoteQueryDidChange
      @param {Object} query The query object
  */

  remoteQueryDidChange: Ember.K,
  /*
      @private
  
      Watches for all changes to the remote query object and calls the debounced
      notification function.
  
      @method _remoteQueryChange
  */

  _remoteQueryChange: Ember.observer(function() {
    return get(this, 'debounceRemoteQueryChange')();
  }, 'remoteQuery')
});


})();
(function() {

Ember.TEMPLATES["account"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("icon")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }

  stack1 = (helper = helpers.collection || (depth0 && depth0.collection),options={hash:{
    'content': ("listItems"),
    'height': (100),
    'width': (200),
    'rowHeight': (45)
  },hashTypes:{'content': "ID",'height': "INTEGER",'width': "INTEGER",'rowHeight': "INTEGER"},hashContexts:{'content': depth0,'height': depth0,'width': depth0,'rowHeight': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "Menglifang.Widgets.ListView", options) : helperMissing.call(depth0, "collection", "Menglifang.Widgets.ListView", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["account/password"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<form class=\"form-horizontal\" role=\"form\">\n  <h2>修改密码</h2>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\" for=\"old-password\">旧密码</label>\n    <div class=\"col-sm-9\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("oldPassword"),
    'class': ("form-control"),
    'type': ("password"),
    'id': ("old-password"),
    'placeholder': ("请输入您当前的密码...")
  },hashTypes:{'value': "ID",'class': "STRING",'type': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'class': depth0,'type': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\" for=\"new-password\">新密码</label>\n    <div class=\"col-sm-9\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("newPassword"),
    'class': ("form-control"),
    'type': ("password"),
    'id': ("new-password"),
    'placeholder': ("请输入您的新密码...")
  },hashTypes:{'value': "ID",'class': "STRING",'type': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'class': depth0,'type': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\" for=\"password-confirmation\">密码确认</label>\n    <div class=\"col-sm-9\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("passwordConfirmation"),
    'class': ("form-control"),
    'type': ("password"),
    'id': ("password-confirmation"),
    'placeholder': ("请再次输入您的新密码...")
  },hashTypes:{'value': "ID",'class': "STRING",'type': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'class': depth0,'type': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n  </div>\n\n  <div class=\"form-group buttons\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-9\">\n      <button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        <i class=\"fa fa-save\"></i> 保存\n      </button>\n      <button class=\"btn btn-link\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "revertChanges", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        重置\n      </button>\n    </div>\n  </div>\n</form>\n");
  return buffer;
  
});

Ember.TEMPLATES["account/profile"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<form class=\"form-horizontal\" role=\"form\">\n  <h2>个人信息</h2>\n  <h4>基本信息</h4>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">用户名</label>\n    <div class=\"col-sm-9\">\n      <p class=\"form-control-static\">");
  stack1 = helpers._triageMustache.call(depth0, "username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\" for=\"realname\">真实姓名</label>\n    <div class=\"col-sm-9\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("realname"),
    'class': ("form-control"),
    'type': ("text"),
    'id': ("realname"),
    'placeholder': ("可选")
  },hashTypes:{'value': "ID",'class': "STRING",'type': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'class': depth0,'type': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\" for=\"email\">邮箱</label>\n    <div class=\"col-sm-9\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("email"),
    'class': ("form-control"),
    'type': ("text"),
    'id': ("email"),
    'placeholder': ("必填且唯一")
  },hashTypes:{'value': "ID",'class': "STRING",'type': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'class': depth0,'type': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\" for=\"role\">角色</label>\n    <div class=\"col-sm-9\">\n      <p class=\"form-control-static\">");
  data.buffer.push(escapeExpression((helper = helpers.pt || (depth0 && depth0.pt),options={hash:{
    'scope': ("models.role")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "roles", options) : helperMissing.call(depth0, "pt", "roles", options))));
  data.buffer.push("</p>\n    </div>\n  </div>\n  <div class=\"form-group buttons\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-9\">\n      <button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        <i class=\"fa fa-save\"></i> 保存\n      </button>\n      <button class=\"btn btn-link\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "revertChanges", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        重置\n      </button>\n    </div>\n  </div>\n</form>\n");
  return buffer;
  
});

Ember.TEMPLATES["authenticated"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers['main-toolbar'] || (depth0 && depth0['main-toolbar']),options={hash:{
    'items': ("breadcrumbs")
  },hashTypes:{'items': "ID"},hashContexts:{'items': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "main-toolbar", options))));
  data.buffer.push("\n\n  <div class=\"mlf-container\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  }

  stack1 = helpers.view.call(depth0, "Menglifang.Widgets.AppView", {hash:{
    'title': ("title"),
    'sidebar': ("availableSidebar")
  },hashTypes:{'title': "ID",'sidebar': "ID"},hashContexts:{'title': depth0,'sidebar': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers['login-form'] || (depth0 && depth0['login-form']),options={hash:{
    'title': ("title"),
    'copyright': ("copyright"),
    'identification': ("identification"),
    'password': ("password"),
    'supportedBrowers': ("supportedBrowers"),
    'action': ("authenticate")
  },hashTypes:{'title': "ID",'copyright': "ID",'identification': "ID",'password': "ID",'supportedBrowers': "ID",'action': "STRING"},hashContexts:{'title': depth0,'copyright': depth0,'identification': depth0,'password': depth0,'supportedBrowers': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "login-form", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users/form", options) : helperMissing.call(depth0, "partial", "users/form", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["users"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <li>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </li>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("icon")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "id", options) : helperMissing.call(depth0, "link-to", "user", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class=\"name\">\n      ");
  stack1 = helpers._triageMustache.call(depth0, "username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (");
  stack1 = helpers._triageMustache.call(depth0, "realname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(")\n    </div>\n    <div class=\"email\">\n      ");
  stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  ");
  return buffer;
  }

  data.buffer.push("<ul class=\"mlf-toolbar-links pull-right\">\n  ");
  stack1 = helpers.each.call(depth0, "toolbarLinks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n\n");
  stack1 = (helper = helpers.collection || (depth0 && depth0.collection),options={hash:{
    'content': ("model"),
    'height': (100),
    'width': (300),
    'rowHeight': (60)
  },hashTypes:{'content': "ID",'height': "INTEGER",'width': "INTEGER",'rowHeight': "INTEGER"},hashContexts:{'content': depth0,'height': depth0,'width': depth0,'rowHeight': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "Menglifang.Widgets.ListView", options) : helperMissing.call(depth0, "collection", "Menglifang.Widgets.ListView", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["users/form"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("username"),
    'class': ("form-control"),
    'type': ("text"),
    'id': ("username"),
    'placeholder': ("必填且唯一")
  },hashTypes:{'value': "ID",'class': "STRING",'type': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'class': depth0,'type': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <p class=\"form-control-static\">");
  stack1 = helpers._triageMustache.call(depth0, "username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <button class=\"btn btn-link\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n          取消\n        </button>\n      ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "remove", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n          <i class=\"fa fa-times\"></i> 删除\n        </button>\n        <button class=\"btn btn-link\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "revertChanges", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n          重置\n        </button>\n      ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <p>");
  stack1 = helpers._triageMustache.call(depth0, "removeConfirmationMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n");
  return buffer;
  }

  data.buffer.push("<form class=\"form-horizontal\" role=\"form\">\n  <h2>");
  stack1 = helpers._triageMustache.call(depth0, "formLegend", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\" for=\"username\">用户名</label>\n    <div class=\"col-sm-9\">\n      ");
  stack1 = helpers['if'].call(depth0, "model.isNew", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\" for=\"realname\">真实姓名</label>\n    <div class=\"col-sm-9\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("realname"),
    'class': ("form-control"),
    'type': ("text"),
    'id': ("realname"),
    'placeholder': ("可选")
  },hashTypes:{'value': "ID",'class': "STRING",'type': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'class': depth0,'type': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\" for=\"email\">邮箱</label>\n    <div class=\"col-sm-9\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("email"),
    'class': ("form-control"),
    'type': ("email"),
    'id': ("email"),
    'placeholder': ("必填且唯一")
  },hashTypes:{'value': "ID",'class': "STRING",'type': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'class': depth0,'type': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\" for=\"password\">密码</label>\n    <div class=\"col-sm-9\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("password"),
    'class': ("form-control"),
    'type': ("password"),
    'id': ("password"),
    'placeholder': ("不少于8位")
  },hashTypes:{'value': "ID",'class': "STRING",'type': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'class': depth0,'type': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\" for=\"roles\">角色</label>\n    <div class=\"col-sm-9\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("availableRoles"),
    'value': ("roles"),
    'optionLabelPath': ("content.label"),
    'optionValuePath': ("content.value"),
    'prompt': ("-> 请选择用户角色 <-")
  },hashTypes:{'content': "ID",'value': "ID",'optionLabelPath': "STRING",'optionValuePath': "STRING",'prompt': "STRING"},hashContexts:{'content': depth0,'value': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'prompt': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n  </div>\n\n  <div class=\"form-group buttons\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-9\">\n      <button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        <i class=\"fa fa-save\"></i> 保存\n      </button>\n      ");
  stack1 = helpers['if'].call(depth0, "model.isNew", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n</form>\n\n");
  stack1 = (helper = helpers['bs-modal'] || (depth0 && depth0['bs-modal']),options={hash:{
    'name': ("removeConfirmation"),
    'fade': (true),
    'footerButtons': ("removeConfirmationButtons"),
    'title': ("removeConfirmationTitle")
  },hashTypes:{'name': "STRING",'fade': "BOOLEAN",'footerButtons': "ID",'title': "ID"},hashContexts:{'name': depth0,'fade': depth0,'footerButtons': depth0,'title': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-modal", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["users/new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users/form", options) : helperMissing.call(depth0, "partial", "users/form", options))));
  data.buffer.push("\n");
  return buffer;
  
});

})();
(function() {


Ember.Application.initializer({
  name: 'authentication',
  initialize: function(container, application) {
    Ember.SimpleAuth.Session.reopen({
      account: (function() {
        var accountId;
        accountId = this.get('account_id');
        if (!Ember.isEmpty(accountId)) {
          return container.lookup('store:main').find('user', accountId);
        }
      }).property('accountId')
    });
    return Ember.SimpleAuth.setup(application, {
      authorizer: Menglifang.App.DeviseAuthorizer,
      routeAfterAuthentication: 'authenticated',
      routeAfterInvalidation: 'login'
    });
  }
});


})();
(function() {


Ember.Handlebars.registerBoundHelper('pt', function(propName, options) {
  var key, scope;
  key = (scope = options.hash.scope) ? "" + scope + "." + propName : propName;
  return Ember.I18n.t(key);
});


})();
(function() {


Menglifang.App.User = DS.Model.extend({
  username: DS.attr(),
  realname: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  roles: DS.attr(),
  accessLocked: DS.attr('boolean'),
  name: Ember.computed.any('realname', 'username'),
  changePassword: function(oldPwd, newPwd, pwdConfirmation) {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (newPwd !== pwdConfirmation) {
        return reject('您两次输入的新密码不匹配');
      }
      return $.ajax({
        url: "/" + Menglifang.App.namespace + "/password",
        type: "PUT",
        data: {
          password: {
            current_password: oldPwd,
            password: newPwd,
            password_confirmation: pwdConfirmation
          }
        },
        dataType: 'json'
      }).then(function() {
        return resolve();
      }, function(jqXHR, textStatus, errorThrown) {
        return reject(jqXHR.responseJSON.errors.password);
      });
    });
  },
  hasRole: function(roles, matchMode) {
    var match,
      _this = this;
    if (!roles) {
      return false;
    }
    if (typeof roles === 'string') {
      roles = [roles];
    }
    match = false;
    if (matchMode === 'any') {
      roles.forEach(function(role) {
        if (_this.get('roles') && _this.get('roles').split(', ').contains(role)) {
          match = true;
          return false;
        }
      });
    } else {
      roles.forEach(function(role) {
        if (!_this.get('roles') || !_this.get('roles').split(', ').contains(role)) {
          match = false;
          return false;
        }
      });
    }
    return match;
  }
});


})();
(function() {


Menglifang.App.AccountController = Ember.ObjectController.extend({
  needs: 'authenticated',
  availableRoles: Ember.computed.alias('controllers.authenticated.availableRoles'),
  listItems: [
    {
      text: '个人信息',
      icon: 'fa fa-user',
      route: 'account.profile'
    }, {
      text: '修改密码',
      icon: 'fa fa-key',
      route: 'account.password'
    }
  ]
});


})();
(function() {


Menglifang.App.AccountPasswordController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var _this = this;
      return this.get('model').changePassword(this.get('oldPassword'), this.get('newPassword'), this.get('passwordConfirmation')).then(function(successMsg) {
        Notifier.success('修改密码成功');
        return _this.setProperties({
          oldPassword: null,
          newPassword: null,
          passwordConfirmation: null
        });
      }, function(errorMsg) {
        return Notifier.error(errorMsg);
      });
    },
    revertChanges: function() {
      return this.setProperties({
        oldPassword: null,
        newPassword: null,
        passwordConfirmation: null
      });
    }
  }
});


})();
(function() {


Menglifang.App.AccountProfileController = Ember.ObjectController.extend({
  actions: {
    revertChanges: function() {
      if (this.get('model.isDirty')) {
        return this.get('model').rollback();
      }
    },
    save: function() {
      var _this = this;
      return this.get('model').save().then(function() {
        return Notifier.success('保存用户成功');
      }, function() {
        return Notifier.error('保存用户失败');
      });
    }
  }
});


})();
(function() {


Menglifang.App.AuthenticatedController = Ember.ObjectController.extend({
  title: 'MLF',
  sidebar: {
    menus: [
      {
        icon: '/images/settings.png',
        url: '#系统管理',
        text: '系统管理',
        roles: ['admin'],
        items: [
          {
            icon: '/images/users.png',
            route: 'users',
            text: '用户管理',
            roles: ['admin']
          }
        ]
      }
    ],
    starterItems: [
      {
        icon: 'fa fa-user',
        url: '#/account/profile',
        text: '个人信息'
      }, {
        icon: 'fa fa-key',
        url: '#/account/password',
        text: '修改密码'
      }, {
        icon: 'fa fa-sign-out',
        url: '#/logout',
        text: '注销'
      }
    ]
  },
  availableRoles: [
    {
      label: '管理员',
      value: 'admin'
    }, {
      label: '普通用户',
      value: 'user'
    }
  ],
  availableSidebar: (function() {
    var menus, user,
      _this = this;
    menus = [];
    user = this.get('session.account.content');
    this.get('sidebar.menus').forEach(function(menu) {
      var items, newMenu;
      if (user.hasRole(menu.roles, 'any')) {
        newMenu = Ember.merge({}, menu);
        menus.push(newMenu);
        items = [];
        menu.items.forEach(function(item) {
          if (user.hasRole(item.roles, 'any')) {
            return items.push(item);
          }
        });
        return newMenu.items = items;
      }
    });
    return {
      menus: menus,
      starterItems: this.get('sidebar.starterItems')
    };
  }).property().volatile(),
  breadcrumbs: [],
  actions: {
    currentPathDidChange: function() {
      var breadcrumbs, routes;
      this.get('breadcrumbs').clear();
      routes = this.container.lookup('router:main').get('router.currentHandlerInfos');
      if (Ember.isEmpty(routes)) {
        return;
      }
      breadcrumbs = [];
      routes.forEach(function(route, i, arr) {
        var breadcrumb, context, handler, name;
        name = route.name;
        if (name.indexOf('.index') !== -1 || name === 'application' || name === 'authenticated') {
          return;
        }
        handler = route.handler;
        breadcrumb = Ember.Object.create({
          route: handler.routeName,
          name: Ember.I18n.t("routes." + handler.routeName),
          model: null
        });
        if (route.isDynamic) {
          context = handler.context;
          breadcrumb.setProperties({
            model: context,
            name: context.get('name') || context.get('id')
          });
        }
        return breadcrumbs.pushObject(breadcrumb);
      });
      if (!Ember.isEmpty(breadcrumbs)) {
        return this.set('breadcrumbs', breadcrumbs);
      }
    }
  }
});


})();
(function() {


Menglifang.App.LoginController = Ember.Controller.extend(Ember.SimpleAuth.LoginControllerMixin, {
  authenticator: Menglifang.App.DeviseAuthenticator,
  supportedBrowers: [
    {
      name: 'Chrome',
      url: 'http://www.google.com/chrome',
      icon: '/images/chrome.png'
    }, {
      name: 'Firefox',
      url: 'http://www.mozilla.org/en-US/firefox/new/',
      icon: '/images/firefox.png'
    }, {
      name: 'Safari',
      url: 'http://www.apple.com/sg/safari/',
      icon: '/images/safari.png'
    }, {
      name: 'IE 10+',
      url: 'http://windows.microsoft.com/en-sg/internet-explorer/ie-10-worldwide-languages',
      icon: '/images/ie.png'
    }
  ],
  actions: {
    login: function() {
      return this.send('authenticate');
    }
  }
});


})();
(function() {


Menglifang.App.UserController = Ember.ObjectController.extend(Menglifang.App.ModelManagerMixin, {
  needs: ['authenticated'],
  formLegend: '用户管理',
  availableRoles: Ember.computed.alias('controllers.authenticated.availableRoles'),
  modelName: 'user',
  humanModelName: '用户',
  beforeConfirmRemove: function() {
    if (this.get('model.id') === this.get('session.account_id')) {
      Notifier.error('对不起，您不允许删除自己！');
      return false;
    } else {
      return true;
    }
  }
});


})();
(function() {


Menglifang.App.UsersController = Ember.ArrayController.extend({
  toolbarLinks: [
    {
      text: '添加用户',
      route: 'users.new',
      icon: 'fa fa-plus'
    }
  ]
});


})();
(function() {


Menglifang.App.LoginFormComponent = Menglifang.Widgets.LoginFormComponent.extend();


})();
(function() {


Menglifang.App.MainToolbarComponent = Menglifang.Widgets.MainToolbarComponent.extend();


})();
(function() {


Menglifang.App.AuthenticatedView = Ember.View.extend({
  classNames: ['mlf-authenticated-view']
});


})();
(function() {


Menglifang.App.ApplicationAdapter = DS.ActiveModelAdapter.extend();


})();
(function() {


Menglifang.App.ApplicationSerializer = DS.ActiveModelSerializer.extend();


})();
(function() {


Menglifang.App.AccountPasswordRoute = Ember.Route.extend(Menglifang.App.AuthenticatedRouteMixin, {
  model: function() {
    return this.get('session.account');
  }
});


})();
(function() {


Menglifang.App.AccountProfileRoute = Ember.Route.extend(Menglifang.App.AuthenticatedRouteMixin, {
  model: function() {
    return this.get('session.account');
  }
});


})();
(function() {


Menglifang.App.ApplicationRoute = Ember.Route.extend(Ember.SimpleAuth.ApplicationRouteMixin);


})();
(function() {


Menglifang.App.AuthenticatedRoute = Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
  beforeModel: function() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
    return this.get('session.account');
  }
});


})();
(function() {


Menglifang.App.authenticationRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    return controller.set('errorMessage', null);
  }
});


})();
(function() {


Menglifang.App.LogoutRoute = Ember.Route.extend({
  beforeModel: function() {
    return this.send('invalidateSession');
  }
});


})();
(function() {


Menglifang.App.UserRoute = Ember.Route.extend(Menglifang.App.AuthenticatedRouteMixin, {
  model: function(params) {
    return this.store.find('user', params.user_id);
  },
  setupController: function(controller, model) {
    controller.set('formLegend', '编辑用户');
    return this._super(controller, model);
  },
  actions: {
    willTransition: function() {
      return this.get('controller').send('revertChanges');
    }
  }
});


})();
(function() {


Menglifang.App.UsersNewRoute = Ember.Route.extend(Menglifang.App.AuthenticatedRouteMixin, {
  controllerName: 'user',
  model: function() {
    return this.store.createRecord('user');
  },
  setupController: function(controller, model) {
    controller.set('formLegend', '添加用户');
    return this._super(controller, model);
  },
  actions: {
    willTransition: function() {
      return this.get('controller').send('revertChanges');
    }
  }
});


})();
(function() {


Menglifang.App.UsersRoute = Ember.Route.extend(Menglifang.App.AuthenticatedRouteMixin, {
  model: function() {
    return this.store.find('user');
  }
});


})();