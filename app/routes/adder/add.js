import Ember from 'ember';

export default Ember.Route.extend({
  setupController (controller, model) {
    this.controllerFor("application").setProperties({
      title: "Quiz Adder",
      subTitles: [
        { title: "ADD QUIZ", class: "active", page: "adder.add" },
        { title:"FIND QUIZ", class: "inactive", page: "adder.find" },
        { title:"UPLOAD QUIZ", class: "inactive", page: "adder.upload" },
        { title:"ADMIN", class: "inactive", page: "admin" }
      ]
    });
  }
});
