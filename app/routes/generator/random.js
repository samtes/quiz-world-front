import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor("application").setProperties({
      title: "Admin URL generator",
      subTitles: [{title: "CUSTOM", class: "inactive", page: "generator.custom"}, {title:"RANDOM", class: "active", page: "generator.random"}],
    });
  }
});
