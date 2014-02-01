module("Basic Tests");

test("Components", function() {
    notEqual(null, Ember.Menglifang.LoginFormComponent, "Ember.Menglifang.LoginFormComponent exists");
});

test("Templates", function() {
    notEqual(null, Ember.TEMPLATES['components/login-form'], "Ember.TEMPLATES['components/login-form'] exists");
});
