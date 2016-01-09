import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.find("key");
  },
  setupController (controller, models) {
    this.controllerFor("application").setProperties({
      title: "Quiz results",
      subTitles: [
        { title:"RESULTS", class: "active", page: "results" },
        { title:"ADMIN", class: "inactive", page: "admin" }
      ]
    });

    this.set("results", models)
  }
});
