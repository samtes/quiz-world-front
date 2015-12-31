import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor("application").setProperties({
      title: "Admin Panal"
    });

    controller.set("buttons", [
      { button: "ADD OR UPDATE QUESTIONS", page: "generator" },
      { button: "VIEW RESULTS", page: "generator" },
      { button: "GENERATE URL", page: "generator" }
    ]);
  }
});
