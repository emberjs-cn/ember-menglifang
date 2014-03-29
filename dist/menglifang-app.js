(function() {

var Menglifang, Mlf, _ref;


})();
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
  VERSION: '0.2.5',
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
  refreshAccessTokens: false,
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
  init: function() {
    return localStorage.setItem('menglifang-app:url', window.location.href);
  },
  afterModel: function() {
    var _this = this;
    return Ember.run.next(this, function() {
      return _this.controllerFor('authenticated').send('currentPathDidChange');
    });
  },
  parentRoute: function() {
    var current, handlerInfos, parent,
      _this = this;
    handlerInfos = this.router.router.state.handlerInfos;
    if (!handlerInfos) {
      return;
    }
    parent = null;
    current = null;
    handlerInfos.forEach(function(h) {
      current = h.handler;
      if (current === _this) {
        return false;
      }
      return parent = current;
    });
    return parent;
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
    return this.get('modelName').underscore();
  }).property('modelName'),
  afterCancelRoute: (function() {
    return this.get('modelName').underscore().pluralize();
  }).property('modelName'),
  afterDestroyRoute: (function() {
    return this.get('modelName').underscore().pluralize();
  }).property('modelName'),
  removeConfirmationName: '',
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
  beforeSave: Ember.K,
  afterSave: Ember.K,
  beforeConfirmRemove: function() {
    Ember.deprecate('`ModelManager#beforeConfirmRemove` is droped, please use `ModelManager#beforeRemove` instead.');
    return true;
  },
  beforeRemove: Ember.K,
  afterRemove: Ember.K,
  actions: {
    revertChanges: function() {
      if (this.get('model.isDirty')) {
        return this.get('model').rollback();
      }
    },
    save: function() {
      var _this = this;
      if (!this.beforeSave()) {
        return;
      }
      return this.get('model').save().then(function() {
        Notifier.success("保存" + (_this.get('humanModelName')) + "成功");
        _this.afterSave();
        return _this.transitionToRoute(_this.get('afterSaveRoute'), _this.get('model'));
      }, function() {
        return Notifier.error("保存" + (_this.get('humanModelName')) + "失败");
      });
    },
    cancel: function() {
      this.get('model').rollback();
      return this.transitionToRoute(this.get('afterCancelRoute'));
    },
    remove: function() {
      return Bootstrap.ModalManager.show(this.get('removeConfirmationName'));
    },
    confirmRemove: function() {
      var _this = this;
      Bootstrap.ModalManager.hide(this.get('removeConfirmationName'));
      if (!(this.beforeConfirmRemove() && this.beforeRemove())) {
        return false;
      }
      this.get('model').deleteRecord();
      return this.get('model').save().then(function() {
        Notifier.success("删除" + (_this.get('humanModelName')) + "成功");
        _this.afterRemove();
        return _this.transitionToRoute(_this.get('afterDestroyRoute'));
      }, function() {
        return Notifier.error("删除" + (_this.get('humanModelName')) + "失败");
      });
    }
  }
});


})();
(function() {

var get;

get = Ember.get;

Menglifang.App.Pageable = Ember.Mixin.create({
  isPageable: true,
  total: 0,
  pageSize: 20,
  currentPage: 0,
  windowSize: 9,
  startPage: (function() {
    var currentPage, startPage, totalPages;
    currentPage = get(this, 'currentPage');
    totalPages = get(this, 'totalPages');
    if (totalPages <= this.windowSize) {
      return 1;
    }
    startPage = currentPage - Math.floor(this.windowSize / 2) > 1 ? currentPage - Math.floor(this.windowSize / 2) : 1;
    if (startPage + (this.windowSize - 1) >= totalPages) {
      startPage = totalPages - this.windowSize + 1;
    }
    return startPage;
  }).property('currentPage'),
  totalPages: (function() {
    return Math.ceil(get(this, 'total') / get(this, 'pageSize')) || 0;
  }).property('total', 'pageSize'),
  actions: {
    page: function(page) {
      return this.set('currentPage', page);
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


  data.buffer.push("<form class=\"form-horizontal form-fluid\" role=\"form\">\n  <h2>修改密码</h2>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\" for=\"old-password\">旧密码</label>\n    <div class=\"col-sm-9\">\n      ");
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


  data.buffer.push("<form class=\"form-horizontal form-fluid\" role=\"form\">\n  <h2>个人信息</h2>\n  <h4>基本信息</h4>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">用户名</label>\n    <div class=\"col-sm-9\">\n      <p class=\"form-control-static\">");
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

Ember.TEMPLATES["app"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers['side-bar'] || (depth0 && depth0['side-bar']),options={hash:{
    'brand': ("view.brand"),
    'menus': ("view.sidebar.menus"),
    'starterItems': ("view.sidebar.starterItems")
  },hashTypes:{'brand': "ID",'menus': "ID",'starterItems': "ID"},hashContexts:{'brand': depth0,'menus': depth0,'starterItems': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "side-bar", options))));
  data.buffer.push("\n<div class=\"mlf-app-main\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
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
  data.buffer.push("\n\n  ");
  stack1 = helpers.view.call(depth0, "Menglifang.App.MainContentView", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }

  stack1 = helpers.view.call(depth0, "Menglifang.App.AppView", {hash:{
    'brand': ("brand"),
    'sidebar': ("availableSidebar")
  },hashTypes:{'brand': "ID",'sidebar': "ID"},hashContexts:{'brand': depth0,'sidebar': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/bs-modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.body", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression((helper = helpers['bs-button'] || (depth0 && depth0['bs-button']),options={hash:{
    'title': ("title"),
    'clicked': ("clicked"),
    'dismiss': ("dismiss"),
    'targetObjectBinding': ("view.targetObject")
  },hashTypes:{'title': "ID",'clicked': "ID",'dismiss': "ID",'targetObjectBinding': "STRING"},hashContexts:{'title': depth0,'clicked': depth0,'dismiss': depth0,'targetObjectBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-button", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n            <h4 class=\"modal-title\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n        </div>\n        <div class=\"modal-body\">\n            ");
  stack1 = helpers['if'].call(depth0, "body", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div class=\"modal-footer\">\n            ");
  stack1 = helpers.each.call(depth0, "footerButtons", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n</div>\n");
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

  data.buffer.push("<form class=\"form-horizontal form-fluid\" role=\"form\">\n  <h2>");
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
    'name': ("removeConfirmationName"),
    'fade': (true),
    'footerButtons': ("removeConfirmationButtons"),
    'title': ("removeConfirmationTitle")
  },hashTypes:{'name': "ID",'fade': "BOOLEAN",'footerButtons': "ID",'title': "ID"},hashContexts:{'name': depth0,'fade': depth0,'footerButtons': depth0,'title': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bs-modal", options));
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
    if (window.location.href !== localStorage.getItem('menglifang-app:url')) {
      localStorage.clear();
    }
    Ember.SimpleAuth.Session.reopen({
      account: (function() {
        var accountId;
        accountId = this.get('account_id');
        if (!Ember.isEmpty(accountId)) {
          return container.lookup('store:main').find('user', accountId);
        }
      }).property('accountId')
    });
    container.register('app:authenticators:devise', Menglifang.App.DeviseAuthenticator);
    return Ember.SimpleAuth.setup(container, application, {
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

Ember.Handlebars.helper('format-date', function(value, options) {
  var format;
  if (!value) {
    return '';
  }
  format = options.hash['format'] || "YYYY-MM-DD HH:mm:ss";
  return new Handlebars.SafeString(moment(value).format(format));
});

Ember.Handlebars.helper('time-ago', function(value, options) {
  if (!value) {
    return '';
  }
  return new Handlebars.SafeString(moment(value).fromNow());
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
  brand: {
    name: 'MLF'
  },
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
        if (!Ember.isEmpty(Ember.keys(route.params))) {
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
    },
    triggerMenu: function(menu) {
      return this.transitionToRoute(menu.items.get('firstObject.route'));
    }
  }
});


})();
(function() {


Menglifang.App.LoginController = Ember.Controller.extend(Ember.SimpleAuth.LoginControllerMixin, {
  authenticator: 'app:authenticators:devise',
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
  removeConfirmationName: 'removeUserConfirmation',
  beforeRemove: function() {
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





})();
(function() {


Menglifang.App.AppView = Ember.View.extend({
  layoutName: 'app',
  classNames: ['mlf-app'],
  brand: {},
  sidebar: {}
});


})();
(function() {


Menglifang.App.MainContentView = Ember.View.extend({
  classNames: ['mlf-main-content'],
  didInsertElement: function() {
    if ($.browser.msie && $.browser.version === '8.0') {
      return this.$().height($(window).height() - 60);
    }
  }
});


})();
(function() {


Menglifang.App.AuthenticatedView = Ember.View.extend({
  classNames: ['mlf-authenticated']
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
    var _this = this;
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
    return this.get('session.account').then(function(account) {
      return account;
    }, function() {
      return _this.transitionTo('login');
    });
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
(function() {


Menglifang.App.PageRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.Object.create(params);
  },
  setupController: function(controller, model) {
    var page;
    page = model && model.get('page') ? parseInt(model.get('page')) : 1;
    controller = this.currentController();
    return controller.set('currentPage', page);
  },
  renderTemplate: function() {
    var parentRouteName, template;
    parentRouteName = this.parentRoute().get('routeName');
    template = parentRouteName;
    return this.render(template, {
      controller: this.currentController()
    });
  },
  currentController: function() {
    return this.controllerFor(this.parentRoute().get('routeName').camelize());
  }
});


})();