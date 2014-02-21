(function() {

var Menglifang, Mlf, _ref;


})();
(function() {

Ember.TEMPLATES["components/mlf-bs-pagination-nav-button"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("href")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/mlf-bs-pagination"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("disabled:active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers['if'].call(depth0, "disabled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </li>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <a href=\"javascript:void(0);\">");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"sr-only\">(current)</span></a>\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("href")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n    ");
  return buffer;
  }

  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Menglifang.Widgets.BsPaginationStart", {hash:{
    'url': ("view.url"),
    'current': ("view.current")
  },hashTypes:{'url': "ID",'current': "ID"},hashContexts:{'url': depth0,'current': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Menglifang.Widgets.BsPaginationPrev", {hash:{
    'url': ("view.url"),
    'current': ("view.current")
  },hashTypes:{'url': "ID",'current': "ID"},hashContexts:{'url': depth0,'current': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  stack1 = helpers.each.call(depth0, "view.pages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Menglifang.Widgets.BsPaginationNext", {hash:{
    'url': ("view.url"),
    'current': ("view.current"),
    'total': ("view.total")
  },hashTypes:{'url': "ID",'current': "ID",'total': "ID"},hashContexts:{'url': depth0,'current': depth0,'total': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Menglifang.Widgets.BsPaginationEnd", {hash:{
    'url': ("view.url"),
    'current': ("view.current"),
    'total': ("view.total")
  },hashTypes:{'url': "ID",'current': "ID",'total': "ID"},hashContexts:{'url': depth0,'current': depth0,'total': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

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

Ember.TEMPLATES["header-cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"ember-table-content-container\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sortByColumn", "view.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n  <span class=\"ember-table-content\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "view.content.headerCellName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <i class=\"fa\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("sortDirection")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n  </span>\n</div>\n");
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

Menglifang.Widgets.VERSION = '0.2.3';

if ((_ref = Ember.libraries) != null) {
  _ref.register('Menglifang Widgets', Menglifang.Widgets.VERSION);
}


})();
(function() {


Menglifang.Widgets.LoginForm = Ember.Component.extend({
  layoutName: 'components/mlf-login-form',
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

Ember.Handlebars.helper('login-form', Menglifang.Widgets.LoginForm);


})();
(function() {


Menglifang.Widgets.MainToolbar = Ember.Component.extend({
  layoutName: 'components/mlf-main-toolbar',
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

Ember.Handlebars.helper('main-toolbar', Menglifang.Widgets.MainToolbar);


})();
(function() {


Menglifang.Widgets.DatetimePicker = Ember.TextField.extend({
  resetable: true,
  format: 'yyyy-mm-dd hh:ii',
  autoclose: true,
  todayBtn: true,
  startDate: '1949-10-01',
  minuteStep: 10,
  minView: 0,
  maxView: 4,
  language: 'zh-CN',
  didInsertElement: function() {
    var options;
    options = {
      format: this.get('format'),
      autoclose: this.get('autoclose'),
      todayBtn: this.get('todayBtn'),
      startDate: this.get('startDate'),
      minuteStep: this.get('minuteStep'),
      minView: this.get('minView'),
      maxView: this.get('maxView'),
      language: this.get('language')
    };
    return this.$().datetimepicker(options);
  }
});

Ember.Handlebars.helper('datetime-picker', Menglifang.Widgets.DatetimePicker);


})();
(function() {


Menglifang.Widgets.Select2 = Ember.Select.extend({
  classNames: ['mlf-select2'],
  placeholder: '请选择...',
  allowClear: true,
  closeOnSelect: true,
  minimumInputLength: 0,
  maximumSelectionSize: 0,
  selectedDidChange: (function() {
    return this.$().select2('val', this.$().val());
  }).observes('selection.@each'),
  didInsertElement: function() {
    return Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
  },
  processChildElements: function() {
    var options;
    options = {};
    options.placeholder = this.get('prompt') || this.get('placeholder');
    options.allowClear = this.get('allowClear');
    options.closeOnSelect = this.get('closeOnSelect');
    options.minimumInputLength = this.get('minimumInputLength');
    options.maximumSelectionSize = this.get('maximumSelectionSize');
    return this.$().select2(options);
  },
  willDestroyElement: function() {
    return this.$().select2('destroy');
  }
});

Ember.Handlebars.helper('select2', Menglifang.Widgets.Select2);


})();
(function() {


Menglifang.Widgets.TaggingSelect2 = Ember.TextField.extend({
  classNames: ['mlf-tagging-select2'],
  placeholder: '请选择...',
  allowClear: true,
  closeOnSelect: true,
  minimumInputLength: 0,
  maximumSelectionSize: 0,
  tokenSeparators: [",", " ", ";", "，", "；"],
  didInsertElement: function() {
    return Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
  },
  processChildElements: function() {
    var options;
    options = {
      placeholder: this.get('placeholder'),
      allowClear: this.get('allowClear'),
      closeOnSelect: this.get('closeOnSelect'),
      tags: this.get('tags') || [],
      tokenSeparators: this.get('tokenSeparators'),
      minimumInputLength: this.get('minimumInputLength'),
      maximumSelectionSize: this.get('maximumSelectionSize')
    };
    return this.$().select2(options);
  },
  willDestroyElement: function() {
    return this.$().select2("destroy");
  },
  resetSelection: (function() {
    if (!Ember.isEmpty(this.get('tags'))) {
      return this.processChildElements();
    }
  }).observes('tags.@each')
});

Ember.Handlebars.helper('tagging-select2', Menglifang.Widgets.TaggingSelect2);


})();
(function() {


if (Ember.Table && Ember.Table.EmberTableComponent) {
  Menglifang.Widgets.Grid = Ember.Table.EmberTableComponent.extend({
    sortAction: 'orderBy',
    actions: {
      addColumn: Ember.K,
      sortByColumn: function(column) {
        var sortAscending;
        sortAscending = !column.get('sortAscending');
        column.set('sortAscending', sortAscending);
        return this.sendAction('sortAction', column.get('contentPath'), sortAscending);
      }
    }
  });
  Ember.Handlebars.helper('basic-grid', Menglifang.Widgets.Grid);
}


})();
(function() {


Menglifang.Widgets.BsPaginationItem = Ember.ObjectProxy.extend({
  text: Ember.computed.alias('content'),
  href: (function() {
    return "" + (this.get('url')) + "/" + (this.get('content'));
  }).property('content', 'url'),
  disabled: (function() {
    return this.get('content') === this.get('current');
  }).property('content', 'current')
});

Menglifang.Widgets.BsPagination = Ember.Component.extend({
  tagName: 'ul',
  layoutName: 'components/mlf-bs-pagination',
  classNames: ['pagination'],
  classNameBindings: ['sizingClassName'],
  start: 1,
  current: 1,
  size: 9,
  total: 0,
  url: '',
  sizingClassName: (function() {
    if (this.get('sizing') === 'large') {
      return 'pagination-lg';
    }
    if (this.get('sizing') === 'small') {
      return 'pagination-sm';
    }
    return '';
  }).property('sizing'),
  end: (function() {
    if (this.get('start') + this.get('size') - 1 >= this.get('total')) {
      return this.get('total');
    } else {
      return this.get('start') + this.get('size') - 1;
    }
  }).property('start', 'total'),
  pages: (function() {
    var _i, _ref, _ref1, _results,
      _this = this;
    return (function() {
      _results = [];
      for (var _i = _ref = this.get('start'), _ref1 = this.get('end'); _ref <= _ref1 ? _i <= _ref1 : _i >= _ref1; _ref <= _ref1 ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this).map(function(i) {
      return Menglifang.Widgets.BsPaginationItem.create({
        url: _this.get('url'),
        content: i,
        current: _this.get('current')
      });
    });
  }).property('start', 'end', 'current', 'url'),
  atFirstPage: (function() {
    return this.get('current') === 1;
  }).property('current'),
  atLastPage: (function() {
    return this.get('current') === this.get('total');
  }).property('current', 'total')
});

Menglifang.Widgets.BsPaginationNavButton = Ember.Component.extend({
  tagName: 'li',
  layoutName: 'components/mlf-bs-pagination-nav-button',
  classNameBindings: ['disabled:disabled'],
  href: (function() {
    if (this.get('disabled')) {
      return 'javascript:void(0);';
    } else {
      return "" + (this.get('url')) + "/" + (this.get('page'));
    }
  }).property('disabled', 'url')
});

Menglifang.Widgets.BsPaginationStart = Menglifang.Widgets.BsPaginationNavButton.extend({
  page: 1,
  text: (function() {
    return Ember.String.htmlSafe('&laquo;');
  }).property(),
  disabled: Ember.computed.equal('current', 1)
});

Menglifang.Widgets.BsPaginationPrev = Menglifang.Widgets.BsPaginationStart.extend({
  page: (function() {
    return this.get('current') - 1;
  }).property('current'),
  text: (function() {
    return Ember.String.htmlSafe('&lsaquo;');
  }).property()
});

Menglifang.Widgets.BsPaginationEnd = Menglifang.Widgets.BsPaginationNavButton.extend({
  page: Ember.computed.alias('total'),
  text: (function() {
    return Ember.String.htmlSafe('&raquo;');
  }).property(),
  disabled: (function() {
    return this.get('current') === this.get('total');
  }).property('current', 'total')
});

Menglifang.Widgets.BsPaginationNext = Menglifang.Widgets.BsPaginationEnd.extend({
  page: (function() {
    return this.get('current') + 1;
  }).property('current'),
  text: (function() {
    return Ember.String.htmlSafe('&rsaquo;');
  }).property()
});

Ember.Handlebars.helper('bs-pagination', Menglifang.Widgets.BsPagination);


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