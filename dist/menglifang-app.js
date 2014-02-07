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
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["ID"],data:data})));
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
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

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
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <li>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </li>\n  ");
  return buffer;
  }
function program5(depth0,data) {
  
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

  data.buffer.push("<ol class=\"breadcrumb pull-left\">\n  ");
  stack1 = helpers.each.call(depth0, "view.parentItems", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <li class=\"active\">");
  stack1 = helpers._triageMustache.call(depth0, "view.activeItem.text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n</ol>\n\n<ul class=\"links pull-right\">\n  ");
  stack1 = helpers.each.call(depth0, "view.links", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["mlf-app-view"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Menglifang.Widgets.SidebarView", {hash:{
    'title': ("view.title"),
    'menus': ("view.sidebar.menus"),
    'starterItems': ("view.sidebar.starterItems")
  },hashTypes:{'title': "ID",'menus': "ID",'starterItems': "ID"},hashContexts:{'title': depth0,'menus': depth0,'starterItems': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n<div class=\"app-main\">\n  ");
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
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleProperty", "expanded", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0,depth0],types:["ID","STRING"],data:data})));
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

Menglifang.Widgets.VERSION = '0.0.1';

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
    return this.get('items').slice(0, this.get('items.length') - 1);
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
  }
});


})();
(function() {


Menglifang.Widgets.ListItemView = Ember.ReusableListItemView.extend({
  classNames: ['ember-list-item-view', 'mlf-list-item']
});

Menglifang.Widgets.ListView = Ember.ListView.extend({
  classNames: ['ember-list-view', 'mlf-list'],
  itemViewClass: Menglifang.Widgets.ListItemView,
  didInsertElement: function() {
    this.set('height', Ember.$('.ember-list-view').parent().height() - 60);
    return this._super();
  }
});


})();
(function() {

Ember.TEMPLATES["authenticated"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers.view.call(depth0, "Menglifang.Widgets.AppView", {hash:{
    'title': ("title"),
    'sidebar': ("sidebar")
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
    'title': ("科技人力资源数据库"),
    'copyright': ("&copy; 2013-2014 中国教育科技研究院"),
    'identification': ("identification"),
    'password': ("password"),
    'supportedBrowers': ("supportedBrowers"),
    'action': ("authenticate")
  },hashTypes:{'title': "STRING",'copyright': "STRING",'identification': "ID",'password': "ID",'supportedBrowers': "ID",'action': "STRING"},hashContexts:{'title': depth0,'copyright': depth0,'identification': depth0,'password': depth0,'supportedBrowers': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "login-form", options))));
  data.buffer.push("\n");
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

Menglifang.App = Ember.Namespace.create();

Menglifang.App.VERSION = '0.0.1';

if ((_ref = Ember.libraries) != null) {
  _ref.register('Menglifang App', Menglifang.App.VERSION);
}


})();
(function() {


Menglifang.App.User = DS.Model.extend({
  username: DS.attr(),
  realname: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  roles: DS.attr(),
  accessLocked: DS.attr('boolean'),
  changePassword: function(oldPwd, newPwd, pwdConfirmation) {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (newPwd !== pwdConfirmation) {
        return reject('您两次输入的新密码不匹配');
      }
      return $.ajax({
        url: "/api/v1/password",
        type: "PATCH",
        data: {
          password: {
            current_password: oldPwd,
            password: newPwd,
            password_confirmation: pwdConfirmation
          }
        }
      }).then(function() {
        return resolve();
      }, function(jqXHR, textStatus, errorThrown) {
        return reject(jqXHR.responseJSON.errors.password);
      });
    });
  }
});


})();
(function() {


Menglifang.App.AccountController = Ember.ObjectController.extend({
  needs: 'authenticated',
  availableRoles: Ember.computed.alias('controllers.authenticated.availableRoles'),
  breadcrumbItems: [
    {
      text: '个人设置'
    }
  ],
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
  needs: 'account',
  breadcrumbItems: Ember.computed.alias('controllers.account.breadcrumbItems'),
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
  needs: 'account',
  breadcrumbItems: Ember.computed.alias('controllers.account.breadcrumbItems'),
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
  title: 'UM',
  sidebar: {
    menus: [
      {
        icon: '/assets/settings.png',
        url: '#系统管理',
        text: '系统管理',
        items: [
          {
            icon: '/assets/users.png',
            route: 'users',
            text: '用户管理'
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
    }
  ]
});


})();
(function() {


Menglifang.App.AuthenticatedView = Ember.View.extend({
  classNames: ['mlf-authenticated-view']
});


})();