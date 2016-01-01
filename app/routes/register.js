import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor("application").setProperties({
      title: "Registration Page",
      subTitles: [
        { title: "LOGIN", class: "inactive", page: "login" },
        { title: "REGISTER", class: "active", page: "register" }
      ]
    });
  }
});
