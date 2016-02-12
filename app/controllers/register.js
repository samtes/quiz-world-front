import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    createUser () {
      var user = this.getProperties("email", "password", "confirmPassword", "key");

      this.store.createRecord("user", user).save().then(record => {

        this.get('session').authenticate('authenticator:custom', user.email, user.password, user.key).catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
      }, reason => {
          this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
