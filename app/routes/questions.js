import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model () {
    return this.store.findAll("question").then(questions => {
      return this.store.find("key", this.get("session.data.authenticated.key")).then(key => {
        this.set("correct", key.get("correct"));
        this.set("wrong", key.get("wrong"));
        return key.get("questions");
      }).then(questions => {
        return questions;
      });
    });
  },

  afterModel (model, transition) {
    let correctAnswers = this.get("correct");
    let wrongAnswers = this.get("wrong").map(item => {
      return item.question;
    });

    this.controllerFor("question").set("key", this.get("session.data.authenticated.key"));
    let questions = model.filter(item => {
      return  correctAnswers.indexOf(item.id) === -1 && wrongAnswers.indexOf(item.id) === -1;
    });

    if (questions.length > 0) {
      this.transitionTo("question", questions[0]);
    } else {
      this.transitionTo("completed");
    }
  }
});
