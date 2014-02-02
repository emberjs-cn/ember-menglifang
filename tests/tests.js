module("Basic Tests");

test("Components", function() {
    notEqual(null, Ember.Menglifang.LoginFormComponent, "Ember.Menglifang.LoginFormComponent exists");
    notEqual(null, Ember.Menglifang.App, "Ember.Menglifang.App exists");
    notEqual(null, Ember.Menglifang.Sidebar, "Ember.Menglifang.Sidebar exists");
});

test("Templates", function() {
    notEqual(null, Ember.TEMPLATES['components/login-form'], "Ember.TEMPLATES['components/login-form'] exists");
    notEqual(null, Ember.TEMPLATES['app'], "Ember.TEMPLATES['app'] exists");
    notEqual(null, Ember.TEMPLATES['sidebar'], "Ember.TEMPLATES['sidebar'] exists");
});
