import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor("application").setProperties({
      title: "Quiz results",
      subTitles: [
        { title:"RESULTS", class: "active", page: "results" },
        { title:"ADMIN", class: "inactive", page: "admin" }
      ]
    });
  }
});
