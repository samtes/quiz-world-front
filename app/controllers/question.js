import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitQuiz () {
      this.store.findRecord("key", this.get("key")).then(key => {
        key.set("questionId", this.get("model.id"));
        key.set("answer", this.get("option"));
        key.save().then(response => {
          this.transitionToRoute("questions");
        });
      });
    },

    selected (option, elm) {
      this.set("option", option);
      Ember.$(".question_container").find(".selected").removeClass("selected");
      Ember.$("#".concat(elm)).addClass("selected");
    }
  }
});
