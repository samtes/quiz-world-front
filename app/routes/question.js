import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.find("question", params.question_id);
  },

  setupController (controller, model) {
    this.controllerFor("application").setProperties({
      title: "Quiz Page",
      subTitles: []
    });
    controller.set("model", model);
  }
});
