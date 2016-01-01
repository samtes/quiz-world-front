import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor("application").setProperties({
      title: "Login Page",
      subTitles: [
        { title: "LOGIN", class: "active", page: "login" },
        { title: "REGISTER", class: "inactive", page: "register" }
      ]
    });
  }
});
