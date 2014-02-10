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
  },
  actions: {
    toggle: function() {
      return this.toggleProperty('expanded');
    }
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

NotifierjsConfig.defaultTimeOut = 250;

NotifierjsConfig.position = ["bottom", "right"];

if ('undefined' === typeof Menglifang) {
  Menglifang = {};
  if ('undefined' !== typeof window) {
    window.Mlf = window.Menglifang = Mlf = Menglifang;
  }
}

Menglifang.App = {};

Menglifang.App.VERSION = '0.0.1';

if ((_ref = Ember.libraries) != null) {
  _ref.register('Menglifang App', Menglifang.App.VERSION);
}


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

  data.buffer.push(escapeExpression((helper = helpers['main-toolbar'] || (depth0 && depth0['main-toolbar']),options={hash:{
    'items': ("breadcrumbItems")
  },hashTypes:{'items': "ID"},hashContexts:{'items': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "main-toolbar", options))));
  data.buffer.push("\n\n");
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
  data.buffer.push(escapeExpression((helper = helpers.translate || (depth0 && depth0.translate),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "roles", options) : helperMissing.call(depth0, "translate", "roles", options))));
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
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "id", options) : helperMissing.call(depth0, "link-to", "user", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
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

  data.buffer.push(escapeExpression((helper = helpers['main-toolbar'] || (depth0 && depth0['main-toolbar']),options={hash:{
    'items': ("breadcrumbItems"),
    'links': ("toolbarLinks")
  },hashTypes:{'items': "ID",'links': "ID"},hashContexts:{'items': depth0,'links': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "main-toolbar", options))));
  data.buffer.push("\n\n");
  stack1 = (helper = helpers.collection || (depth0 && depth0.collection),options={hash:{
    'content': ("model"),
    'height': (100),
    'width': (300),
    'rowHeight': (60)
  },hashTypes:{'content': "ID",'height': "INTEGER",'width': "INTEGER",'rowHeight': "INTEGER"},hashContexts:{'content': depth0,'height': depth0,'width': depth0,'rowHeight': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "Menglifang.Widgets.ListView", options) : helperMissing.call(depth0, "collection", "Menglifang.Widgets.ListView", options));
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
  
  
  data.buffer.push("\n   <p>确认需要删除该用户吗？</p>\n");
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
    'footerButtons': ("modalButtons"),
    'title': ("确认删除")
  },hashTypes:{'name': "STRING",'fade': "BOOLEAN",'footerButtons': "ID",'title': "STRING"},hashContexts:{'name': depth0,'fade': depth0,'footerButtons': depth0,'title': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-modal", options));
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


Ember.Handlebars.helper('translate', function(value, options) {
  return Menglifang.App.TRANSLATIONS[value];
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
  title: 'MLF',
  sidebar: {
    menus: [
      {
        icon: '/images/settings.png',
        url: '#系统管理',
        text: '系统管理',
        items: [
          {
            icon: '/images/users.png',
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
    }, {
      label: '普通用户',
      value: 'user'
    }
  ]
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
      name: 'IE 9+',
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


Menglifang.App.UserController = Ember.ObjectController.extend({
  needs: ['authenticated', 'users'],
  formLegend: '用户管理',
  availableRoles: Ember.computed.alias('controllers.authenticated.availableRoles'),
  breadcrumbItems: Ember.computed.alias('controllers.users.breadcrumbItems'),
  modalButtons: [
    Ember.Object.create({
      title: '确认',
      clicked: "confirm"
    }), Ember.Object.create({
      title: '取消',
      dismiss: 'modal'
    })
  ],
  actions: {
    revertChanges: function() {
      if (this.get('model.isDirty')) {
        return this.get('model').rollback();
      }
    },
    save: function() {
      var _this = this;
      return this.get('model').save().then(function() {
        Notifier.success('保存用户成功');
        return _this.transitionToRoute('user', _this.get('model'));
      }, function() {
        return Notifier.error('保存用户失败');
      });
    },
    remove: function() {
      return Bootstrap.ModalManager.show('removeConfirmation');
    },
    cancel: function() {
      this.get('model').rollback();
      return this.transitionToRoute('users');
    },
    confirm: function() {
      var _this = this;
      if (this.get('model.id') === this.get('session.account.id')) {
        return Notifier.error('对不起，您不允许删除自己！');
      }
      this.get('model').deleteRecord();
      this.get('model').save().then(function() {
        Notifier.success('删除用户成功');
        return _this.transitionToRoute('users');
      }, function() {
        return Notifier.error('删除用户失败');
      });
      return Bootstrap.ModalManager.hide('removeConfirmation');
    }
  }
});


})();
(function() {


Menglifang.App.UsersController = Ember.ArrayController.extend({
  breadcrumbItems: [
    {
      text: '用户管理'
    }
  ],
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


Menglifang.App.AccountPasswordRoute = Ember.Route.extend({
  beforeModel: function() {
    return this.controllerFor('account').set('breadcrumbItems', [
      {
        text: '个人设置',
        route: 'account'
      }, {
        text: '修改密码'
      }
    ]);
  },
  model: function() {
    return this.get('session.account');
  },
  actions: {
    willTransition: function(transition) {
      var controller;
      controller = this.get('controller');
      return controller.set('breadcrumbItems', controller.get('breadcrumbItems').slice(0, -1));
    }
  }
});


})();
(function() {


Menglifang.App.AccountProfileRoute = Ember.Route.extend({
  beforeModel: function() {
    return this.controllerFor('account').set('breadcrumbItems', [
      {
        text: '个人设置',
        route: 'account'
      }, {
        text: '个人信息'
      }
    ]);
  },
  model: function() {
    return this.get('session.account');
  },
  actions: {
    willTransition: function(transition) {
      var controller;
      controller = this.get('controller');
      return controller.set('breadcrumbItems', controller.get('breadcrumbItems').slice(0, -1));
    }
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
      return this.transitionTo('login');
    }
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


Menglifang.App.UserRoute = Ember.Route.extend({
  beforeModel: function() {
    return this.controllerFor('users').set('breadcrumbItems', [
      {
        text: '用户管理',
        route: 'users'
      }, {
        text: '编辑用户'
      }
    ]);
  },
  model: function(params) {
    return this.store.find('user', params.user_id);
  },
  setupController: function(controller, model) {
    controller.set('formLegend', '编辑用户');
    return this._super(controller, model);
  },
  actions: {
    willTransition: function() {
      var controller;
      controller = this.get('controller');
      controller.send('revertChanges');
      return controller.set('breadcrumbItems', controller.get('breadcrumbItems').slice(0, -1));
    }
  }
});


})();
(function() {


Menglifang.App.UsersNewRoute = Ember.Route.extend({
  controllerName: 'user',
  beforeModel: function() {
    return this.controllerFor('users').set('breadcrumbItems', [
      {
        text: '用户管理',
        route: 'users'
      }, {
        text: '添加用户'
      }
    ]);
  },
  model: function() {
    return this.store.createRecord('user');
  },
  setupController: function(controller, model) {
    controller.set('formLegend', '添加用户');
    return this._super(controller, model);
  },
  actions: {
    willTransition: function() {
      var controller;
      controller = this.get('controller');
      controller.send('revertChanges');
      return controller.set('breadcrumbItems', controller.get('breadcrumbItems').slice(0, -1));
    }
  }
});


})();
(function() {


Menglifang.App.UsersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('user');
  }
});


})();
(function() {

Menglifang.App.create = function(options) {
  var app;
  Menglifang.App.ApplicationAdapter.reopen({
    host: options.host,
    namespace: options.namespace
  });
  Menglifang.App.LoginController.reopen({
    title: options.title,
    copyright: options.copyright
  });
  app = Ember.Application.create();
  $.extend(Menglifang.App, options || {});
  $.extend(app, Menglifang.App);
  return app;
};


})();