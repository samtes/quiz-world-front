import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor("application").setProperties({
      title: "Admin URL generator",
      subTitles: [{title: "CUSTOM", class: "active", page: "generator.custom"}, {title:"RANDOM", class: "inactive", page: "generator.random"}]
    });
  }
});
