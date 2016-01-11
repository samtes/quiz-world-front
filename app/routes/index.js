import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    beforeModel (transition) {
      this._super(transition);
      if (this.get("session.isAuthenticated")) {
        return this._populateCurrentUser();
      }
    },

    _populateCurrentUser() {
      let userId = this.get("session.data.authenticated.userID");

      this.store.find("user", userId).then(user => {
        return this.get("currentUser").set("content", user);
      }).then(user => {
        if (user.get("role") === "admin") {
          this.transitionTo("admin");
        } else {
          this.transitionTo("instruction");
        }
      });
    }
});
