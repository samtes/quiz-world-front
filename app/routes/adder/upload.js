import Ember from 'ember';

export default Ember.Route.extend({
  setupController (controller, model) {
    this.controllerFor("application").setProperties({
      title: "Quiz Uploader",
      subTitles: [
        { title: "ADD QUIZ", class: "inactive", page: "adder.add" },
        { title:"FIND QUIZ", class: "inactive", page: "adder.find" },
        { title:"UPLOAD QUIZ", class: "active", page: "adder.upload" },
        { title:"ADMIN", class: "inactive", page: "admin" }
      ]
    });
  }
});
