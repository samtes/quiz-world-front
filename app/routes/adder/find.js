import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor("application").setProperties({
      title: "Quiz Search",
      subTitles: [
        { title: "ADD QUIZ", class: "inactive", page: "adder.add" },
        { title:"FIND QUIZ", class: "active", page: "adder.find" },
        { title:"UPLOAD QUIZ", class: "inactive", page: "adder.upload" }
      ]
    });
  }
});
