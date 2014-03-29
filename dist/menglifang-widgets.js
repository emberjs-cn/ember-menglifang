(function() {

var Menglifang, Mlf, _ref;


})();
(function() {

Ember.TEMPLATES["components/mlf-basic-table-action"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("view.content.icon")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i> ");
  stack1 = helpers._triageMustache.call(depth0, "view.content.text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/mlf-basic-table-multiple-selectable-row"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  <td class='selection-cell'>");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'checked': ("selected")
  },hashTypes:{'type': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</td>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <td class='index'>");
  stack1 = helpers._triageMustache.call(depth0, "view.index", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Menglifang.Widgets.BasicTableCell", {hash:{
    'width': ("width"),
    'row': ("view.content"),
    'column': ("")
  },hashTypes:{'width': "ID",'row': "ID",'column': "ID"},hashContexts:{'width': depth0,'row': depth0,'column': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "view.multiple", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "view.indexed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers.each.call(depth0, "view.columns", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/mlf-basic-table-row"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <td class='index'>");
  stack1 = helpers._triageMustache.call(depth0, "view.index", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Menglifang.Widgets.BasicTableCell", {hash:{
    'width': ("width"),
    'row': ("view.content"),
    'column': ("")
  },hashTypes:{'width': "ID",'row': "ID",'column': "ID"},hashContexts:{'width': depth0,'row': depth0,'column': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "view.indexed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers.each.call(depth0, "view.columns", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/mlf-basic-table-select-all-cell"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'checked': ("view.checked")
  },hashTypes:{'type': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/mlf-basic-table"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers.view.call(depth0, "Menglifang.Widgets.BasicTableTopBar", {hash:{
    'barActions': ("view.topActions")
  },hashTypes:{'barActions': "ID"},hashContexts:{'barActions': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Menglifang.Widgets.BasicTableActionGroup", {hash:{
    'class': ("pull-left"),
    'content': ("view.leftActions")
  },hashTypes:{'class': "STRING",'content': "ID"},hashContexts:{'class': depth0,'content': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Menglifang.Widgets.BasicTableActionGroup", {hash:{
    'class': ("pull-right"),
    'content': ("view.rightActions")
  },hashTypes:{'class': "STRING",'content': "ID"},hashContexts:{'class': depth0,'content': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "view.hasTopActions", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Menglifang.Widgets.BasicTableHead", {hash:{
    'content': ("view.headContent"),
    'hasIndexCell': ("view.indexed"),
    'hasSelectAllCell': ("view.multiple")
  },hashTypes:{'content': "ID",'hasIndexCell': "ID",'hasSelectAllCell': "ID"},hashContexts:{'content': depth0,'hasIndexCell': depth0,'hasSelectAllCell': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Menglifang.Widgets.BasicTableBody", {hash:{
    'columns': ("view.columns"),
    'content': ("view.content"),
    'indexed': ("view.indexed"),
    'rowSelectable': ("view.rowSelectable"),
    'multiple': ("view.multiple"),
    'selection': ("view.selection")
  },hashTypes:{'columns': "ID",'content': "ID",'indexed': "ID",'rowSelectable': "ID",'multiple': "ID",'selection': "ID"},hashContexts:{'columns': depth0,'content': depth0,'indexed': depth0,'rowSelectable': depth0,'multiple': depth0,'selection': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/mlf-bs-pagination-button"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "page", "content.page", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "content.text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/mlf-login-form"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-success pull-right")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "registrations.new", options) : helperMissing.call(depth0, "link-to", "registrations.new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n          注册\n        ");
  }

function program4(depth0,data) {
  
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
  data.buffer.push("\n    <p class=\"clearfix\"></p>\n    <p class=\"clearfix\">\n      ");
  stack1 = helpers['if'].call(depth0, "view.registerable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <button type=\"submit\" class=\"btn btn-primary pull-right\">登录</button>\n    </p>\n    <p>");
  stack1 = helpers._triageMustache.call(depth0, "view.copyrightHtmlSafe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n  </form>\n</section>\n<div class=\"browsers\">\n  <ul>\n    ");
  stack1 = helpers.each.call(depth0, "view.supportedBrowers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
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

Ember.TEMPLATES["components/sidebar/brand"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  <div class=\"switch-button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggle", {hash:{
    'target': ("view")
  },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></div>\n");
  return buffer;
  }

  data.buffer.push("<div class=\"logo\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "view.logo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  stack1 = helpers['if'].call(depth0, "view.sidebarExpandable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/sidebar/navigator"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <ul ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("text")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      ");
  stack1 = helpers.each.call(depth0, "items", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("text")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" data-placement=\"right\" data-toggle=\"tooltip\">\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"icon\">\n              <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("icon")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n              <div class=\"title\">");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n            </div>\n          ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("text")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" data-placement=\"right\" data-toggle=\"tooltip\">\n      <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" data-toggle=\"tab\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "triggerMenu", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n        <img class=\"menu-trigger\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("icon")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n        <div class=\"title\">");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n      </a>\n    </li>\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"menu-items\">\n  ");
  stack1 = helpers.each.call(depth0, "view.menus", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<ul class=\"menu-triggers\">\n  ");
  stack1 = helpers.each.call(depth0, "view.menus", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/sidebar/sidebar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Menglifang.Widgets.SidebarBrand", {hash:{
    'name': ("view.brand.name"),
    'imageUrl': ("view.brand.imageUrl"),
    'sidebarExpandable': ("view.expandable")
  },hashTypes:{'name': "ID",'imageUrl': "ID",'sidebarExpandable': "ID"},hashContexts:{'name': depth0,'imageUrl': depth0,'sidebarExpandable': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Menglifang.Widgets.SidebarNavigator", {hash:{
    'menus': ("view.menus")
  },hashTypes:{'menus': "ID"},hashContexts:{'menus': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Menglifang.Widgets.SidebarStarter", {hash:{
    'items': ("view.starterItems")
  },hashTypes:{'items': "ID"},hashContexts:{'items': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/sidebar/starter"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <li>\n      <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <i ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("icon")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n         ");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </a>\n    </li>\n  ");
  return buffer;
  }

  data.buffer.push("<a class=\"home dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">\n  <span class=\"fa-stack fa-2x\">\n    <i class=\"fa fa-circle fa-stack-2x\"></i>\n    <i class=\"fa fa-th-large fa-stack-1x fa-inverse\"></i>\n  </span>\n</a>\n<ul class=\"dropdown-menu\">\n  ");
  stack1 = helpers.each.call(depth0, "view.items", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
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

})();
(function() {

if ('undefined' === typeof Menglifang) {
  Menglifang = {};
  if ('undefined' !== typeof window) {
    window.Mlf = window.Menglifang = Mlf = Menglifang;
  }
}

Menglifang.Widgets = Ember.Namespace.create();

Menglifang.Widgets.VERSION = '0.2.5';

if ((_ref = Ember.libraries) != null) {
  _ref.register('Menglifang Widgets', Menglifang.Widgets.VERSION);
}


})();
(function() {


Ember.AddeparMixins = Ember.AddeparMixins || Ember.Namespace.create();

Menglifang.Widgets.StyleBindingsMixin = Ember.AddeparMixins.StyleBindingsMixin = Ember.Mixin.create({
  concatenatedProperties: ["styleBindings"],
  attributeBindings: ["style"],
  unitType: "px",
  createStyleString: function(styleName, property) {
    var value;
    value = this.get(property);
    if (value === void 0) {
      return;
    }
    if (Ember.typeOf(value) === "number") {
      value = value + this.get("unitType");
    }
    return "" + styleName + ":" + value + ";";
  },
  applyStyleBindings: function() {
    var lookup, properties, styleBindings, styleComputed, styles, _this;
    _this = this;
    styleBindings = this.styleBindings;
    if (!styleBindings) {
      return;
    }
    lookup = {};
    styleBindings.forEach(function(binding) {
      var property, style, tmp;
      tmp = binding.split(":");
      property = tmp[0];
      style = tmp[1];
      return lookup[style || property] = property;
    });
    styles = Ember.keys(lookup);
    properties = styles.map(function(style) {
      return lookup[style];
    });
    styleComputed = Ember.computed(function() {
      var styleString, styleTokens;
      styleTokens = styles.map(function(style) {
        return _this.createStyleString(style, lookup[style]);
      });
      styleString = styleTokens.join("");
      if (styleString.length !== 0) {
        return styleString;
      }
    });
    styleComputed.property.apply(styleComputed, properties);
    return Ember.defineProperty(this, "style", styleComputed);
  },
  init: function() {
    this.applyStyleBindings();
    return this._super();
  }
});


})();
(function() {


Menglifang.Widgets.SidebarBrand = Ember.Component.extend({
  classNames: ['brand'],
  layoutName: 'components/sidebar/brand',
  name: 'Brand',
  imageUrl: null,
  logo: (function() {
    if (this.get('imageUrl')) {
      return ("<img src='" + (this.get('imageUrl')) + "' />").htmlSafe();
    }
    return this.get('name');
  }).property('name', 'imageUrl'),
  sidebarExpandable: true
});

Menglifang.Widgets.SidebarNavigator = Ember.Component.extend({
  layoutName: 'components/sidebar/navigator',
  classNames: ['navigator'],
  menus: [],
  actions: {
    triggerMenu: function(menu) {
      return this.triggerAction({
        action: 'triggerMenu',
        actionContext: menu
      });
    }
  }
});

Menglifang.Widgets.SidebarStarter = Ember.Component.extend({
  layoutName: 'components/sidebar/starter',
  classNames: ['starter', 'dropdown'],
  items: []
});

Menglifang.Widgets.Sidebar = Ember.Component.extend({
  layoutName: 'components/sidebar/sidebar',
  classNames: ['mlf-sidebar'],
  classNameBindings: ['expanded:mlf-sidebar-expanded'],
  expanded: true,
  expandable: true,
  brand: {
    name: 'Brand',
    imageUrl: null
  },
  menus: [],
  starterItems: [],
  didInsertElement: function() {
    return this.$().find('.menu-triggers li a').first().click();
  },
  actions: {
    triggerMenu: function(menu) {
      return this.triggerAction({
        action: 'triggerMenu',
        actionContext: menu
      });
    }
  }
});

Ember.Handlebars.helper('side-bar', Menglifang.Widgets.Sidebar);


})();
(function() {


Menglifang.Widgets.LoginForm = Ember.Component.extend({
  layoutName: 'components/mlf-login-form',
  classNames: ['mlf-login-form'],
  title: '用户登录',
  copyright: '&copy; 2011-2014 北京梦立方网络科技有限公司',
  registerable: false,
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
  tags: [],
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
  valueDidChange: (function() {
    return this.$().val(this.get('value')).trigger('change');
  }).observes('value'),
  resetSelection: (function() {
    if (!Ember.isEmpty(this.get('tags'))) {
      return this.processChildElements();
    }
  }).observes('tags.@each')
});

Ember.Handlebars.helper('tagging-select2', Menglifang.Widgets.TaggingSelect2);


})();
(function() {


Menglifang.Widgets.BasicTableColumn = Ember.Object.extend({
  title: null,
  width: 100,
  cellContentPath: null
});

Menglifang.Widgets.BasicTableCell = Ember.Component.extend(Menglifang.Widgets.StyleBindingsMixin, {
  tagName: 'td',
  classNames: ['mlf-basic-table-cell'],
  styleBindings: ['textAlign:text-align'],
  textAlignBinding: 'column.textAlign',
  defaultTemplate: function(context, options) {
    options = {
      data: options.data,
      hash: {}
    };
    return Ember.Handlebars.helpers.bind.call(context, "view.value", options);
  },
  init: function() {
    this.valuePathDidChange();
    return this._super();
  },
  valuePathDidChange: (function() {
    var formatValue, valuePath;
    formatValue = this.get('column.formatCellContent');
    valuePath = 'row.' + this.get('column.cellContentPath');
    if (!valuePath) {
      return;
    }
    return Ember.defineProperty(this, 'value', Ember.computed(function() {
      if (formatValue) {
        return formatValue(this.get(valuePath));
      } else {
        return this.get(valuePath);
      }
    }).property(valuePath));
  }).observes('row', 'column.cellContentPath')
});

Menglifang.Widgets.BasicTableRow = Ember.Component.extend({
  tagName: 'tr',
  layoutName: 'components/mlf-basic-table-row',
  classNames: ['mlf-basic-table-row'],
  classNameBindings: ['selected:info'],
  indexedBinding: 'parentView.indexed',
  columnsBinding: 'parentView.columns',
  index: (function() {
    return this.get('contentIndex') + 1;
  }).property('contentIndex')
});

Menglifang.Widgets.BasicTableSelectableRow = Menglifang.Widgets.BasicTableRow.extend({
  selectionBinding: 'parentView.selection',
  selected: (function(key, value) {
    if (value != null) {
      if (value) {
        this.get('selection').add(this.get('content'));
      } else {
        this.get('selection').remove(this.get('content'));
      }
      return value;
    } else {
      return this.get('selection').contains(this.get('content'));
    }
  }).property('selection.length')
});

Menglifang.Widgets.BasicTableSingleSelectableRow = Menglifang.Widgets.BasicTableSelectableRow.extend({
  click: function() {
    this.get('selection').clear();
    this.get('selection').add(this.get('content'));
    return this.triggerAction({
      action: 'selectRow',
      actionContext: this
    });
  }
});

Menglifang.Widgets.BasicTableMultipleSelectableRow = Menglifang.Widgets.BasicTableSelectableRow.extend({
  layoutName: 'components/mlf-basic-table-multiple-selectable-row',
  multipleBinding: 'parentView.multiple'
});

Menglifang.Widgets.BasicTableBody = Ember.CollectionView.extend({
  tagName: 'tbody',
  classNames: ['mlf-basic-table-body'],
  itemViewClass: (function() {
    if (!this.get('rowSelectable')) {
      return Menglifang.Widgets.BasicTableRow;
    }
    if (this.get('multiple')) {
      return Menglifang.Widgets.BasicTableMultipleSelectableRow;
    } else {
      return Menglifang.Widgets.BasicTableSingleSelectableRow;
    }
  }).property('rowSelectable', 'multiple'),
  indexed: false,
  multiple: false,
  rowSelectable: false,
  selection: null,
  columns: [],
  single: (function() {
    return !this.get('multiple') && this.get('rowSelectable');
  }).property('multiple', 'rowSelectable')
});

Menglifang.Widgets.BasicTableHeadCell = Ember.Component.extend(Menglifang.Widgets.StyleBindingsMixin, {
  tagName: 'td',
  classNames: ['mlf-basic-table-head-cell'],
  styleBindings: ['minWidth:min-width', 'textAlign:text-align'],
  minWidthBinding: 'content.width',
  textAlignBinding: 'content.textAlign',
  defaultTemplate: function(context, options) {
    options = {
      data: options.data,
      hash: {}
    };
    return Ember.Handlebars.helpers.bind.call(context, "view.content.title", options);
  }
});

Menglifang.Widgets.BasicTableSelectAllCell = Menglifang.Widgets.BasicTableHeadCell.extend({
  content: Ember.Object.create({
    width: 30,
    textAlign: 'center'
  }),
  layoutName: 'components/mlf-basic-table-select-all-cell',
  checkedDidChange: (function() {
    var action;
    action = this.get('checked') ? 'selectAll' : 'deselectAll';
    return this.triggerAction({
      action: action
    });
  }).observes('checked')
});

Menglifang.Widgets.BasicTableHeadRow = Ember.CollectionView.extend({
  tagName: 'tr',
  classNames: ['mlf-basic-table-head-row'],
  itemViewClass: Menglifang.Widgets.BasicTableHeadCell,
  hasIndexCellBinding: 'parentView.hasIndexCell',
  hasSelectAllCellBinding: 'parentView.hasSelectAllCell',
  didInsertElement: function() {
    if (this.get('hasIndexCell')) {
      this._createIndexCell();
    }
    if (this.get('hasSelectAllCell')) {
      return this._createSelectAllCell();
    }
  },
  _createIndexCell: function() {
    return this.unshiftObject(Menglifang.Widgets.BasicTableHeadCell.create({
      content: Ember.Object.create({
        width: 30,
        textAlign: 'center',
        title: '#'
      })
    }));
  },
  _createSelectAllCell: function() {
    return this.unshiftObject(Menglifang.Widgets.BasicTableSelectAllCell.create());
  }
});

Menglifang.Widgets.BasicTableHead = Ember.CollectionView.extend({
  tagName: 'thead',
  classNames: ['mlf-basic-table-head'],
  itemViewClass: Menglifang.Widgets.BasicTableHeadRow,
  hasIndexCell: false,
  hasSelectAllCell: false
});

Menglifang.Widgets.BasicTableAction = Ember.Component.extend({
  tagName: 'a',
  layoutName: 'components/mlf-basic-table-action'
});

Menglifang.Widgets.BasicTableActionGroup = Ember.CollectionView.extend({
  classNames: ['mlf-basic-table-action-group'],
  itemViewClass: Menglifang.Widgets.BasicTableAction
});

Menglifang.Widgets.BasicTableTopBar = Ember.Component.extend({
  tagName: 'caption',
  classNames: ['mlf-basic-table-top-bar'],
  barActions: [],
  leftActions: Ember.computed.filterBy('barActions', 'position', 'left'),
  rightActions: Ember.computed.filterBy('barActions', 'position', 'right')
});

Menglifang.Widgets.BasicTable = Ember.Component.extend({
  init: function() {
    this._super();
    if (Ember.isNone(this.get('selection'))) {
      return this.set('selection', new Ember.Set());
    }
  },
  tagName: 'table',
  classNames: ['table', 'table-bordered', 'table-hover', 'mlf-basic-table'],
  classNameBindings: ['clickable:table-clickable'],
  layoutName: 'components/mlf-basic-table',
  multiple: false,
  selection: null,
  indexed: false,
  rowSelectable: false,
  topActions: [],
  hasTopActions: Ember.computed.notEmpty('topActions'),
  clickable: (function() {
    return !this.get('multiple') && this.get('rowSelectable');
  }).property('multiple', 'rowSelectable'),
  headContent: (function() {
    var headContent;
    headContent = Ember.A();
    headContent.pushObject(this.get('columns') || []);
    return headContent;
  }).property('columns.@each', 'indexed'),
  click: function(evt) {
    var view;
    view = Ember.View.views[evt.target.id];
    if (this._clickFromAction(view)) {
      return this.triggerAction({
        action: view.get('content.name')
      });
    }
  },
  _clickFromAction: function(target) {
    return target && target.constructor === Menglifang.Widgets.BasicTableAction;
  },
  actions: {
    selectRow: function(row) {
      this.get('selection').clear();
      this.get('selection').add(row.get('content'));
      return this.triggerAction({
        action: 'select',
        actionContext: row.get('content')
      });
    },
    selectAll: function() {
      return this.get('selection').addEach(this.get('content'));
    },
    deselectAll: function() {
      return this.get('selection').clear();
    }
  }
});

Ember.Handlebars.helper('basic-table', Menglifang.Widgets.BasicTable);


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


Menglifang.Widgets.BsPaginationButton = Ember.Component.extend({
  tagName: 'li',
  layoutName: 'components/mlf-bs-pagination-button',
  classNameBindings: ['disabled:disabled', 'active:active'],
  currentBinding: 'parentView.current',
  disabled: (function() {
    var page;
    page = this.get('content.page');
    return page !== this.get('content.text') && page === this.get('current');
  }).property('current', 'content.{page, text}'),
  active: (function() {
    var page;
    page = this.get('content.page');
    return page === this.get('content.text') && page === this.get('current');
  }).property('current', 'content.{page, text}'),
  actions: {
    page: function(page) {
      return this.triggerAction({
        action: 'page',
        actionContext: page
      });
    }
  }
});

Menglifang.Widgets.BsPagination = Ember.CollectionView.extend({
  tagName: 'ul',
  classNames: ['pagination'],
  classNameBindings: ['sizingClassName'],
  itemViewClass: Menglifang.Widgets.BsPaginationButton,
  start: 1,
  current: 1,
  size: 9,
  total: 1,
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
  prev: (function() {
    if (this.get('current') > 1) {
      return this.get('current') - 1;
    } else {
      return 1;
    }
  }).property('current'),
  next: (function() {
    if (this.get('current') < this.get('total')) {
      return this.get('current') + 1;
    } else {
      return this.get('total');
    }
  }).property('current', 'total'),
  end: (function() {
    if (this.get('start') + this.get('size') - 1 >= this.get('total')) {
      return this.get('total');
    } else {
      return this.get('start') + this.get('size') - 1;
    }
  }).property('start', 'total'),
  content: (function() {
    var content, _i, _ref, _ref1, _results,
      _this = this;
    content = Ember.A();
    content.pushObject(Ember.Object.create({
      page: 1,
      text: '&laquo;'.htmlSafe()
    }));
    content.pushObject(Ember.Object.create({
      page: this.get('prev'),
      text: '&lsaquo;'.htmlSafe()
    }));
    (function() {
      _results = [];
      for (var _i = _ref = this.get('start'), _ref1 = this.get('end'); _ref <= _ref1 ? _i <= _ref1 : _i >= _ref1; _ref <= _ref1 ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this).map(function(i) {
      return content.pushObject(Ember.Object.create({
        page: i,
        text: i
      }));
    });
    content.pushObject(Ember.Object.create({
      page: this.get('next'),
      text: '&rsaquo;'.htmlSafe()
    }));
    content.pushObject(Ember.Object.create({
      page: this.get('total'),
      text: '&raquo;'.htmlSafe()
    }));
    return content;
  }).property('start', 'end', 'current')
});

Ember.Handlebars.helper('bs-pagination', Menglifang.Widgets.BsPagination);


})();
(function() {


Menglifang.Widgets.BsSwitch = Ember.Checkbox.extend({
  didInsertElement: function() {
    return this.$().bootstrapSwitch();
  }
});

Ember.Handlebars.helper('bs-switch', Menglifang.Widgets.BsSwitch);


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

Ember.View.reopen({
  init: function() {
    var _this = this;
    this._super();
    return Ember.keys(this).forEach(function(key) {
      if (key.substr(0, 5) === 'data-') {
        return _this.get('attributeBindings').pushObject(key);
      }
    });
  }
});


})();