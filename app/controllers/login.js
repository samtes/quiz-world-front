import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      let { identification, password, key } = this.getProperties('identification', 'password', 'key');
      this.get('session').authenticate('authenticator:custom', identification, password, key).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
