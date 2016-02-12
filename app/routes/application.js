import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel (transition) {
    this._super(transition);
    if (this.get("session.isAuthenticated")) {
      return this._populateCurrentUser();
    }
  },

  _populateCurrentUser() {
    let userId = this.get("session.data.authenticated.userID");
    this.controllerFor("question").set("key", this.get("session.data.authenticated.key"));

    this.store.find("user", userId).then(user => {
      this.get("currentUser").set("content", user);
    });
  }
});
