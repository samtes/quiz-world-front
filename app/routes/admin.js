import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor("application").setProperties({
      title: "Admin Panal",
      subTitles: [
        { title:"ADMIN", class: "active", page: "admin" }
      ]
    });

    controller.set("buttons", [
      { button: "ADD OR UPDATE QUESTIONS", page: "adder" },
      { button: "VIEW RESULTS", page: "results" },
      { button: "GENERATE URL", page: "generator" }
    ]);
  }
});
