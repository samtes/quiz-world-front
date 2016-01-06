import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createUser () {
      var user = this.getProperties("email", "password", "confirmPassword", "key");

      this.store.createRecord("user", user).save().then(record => {
        console.log(record);
      }).catch(reason => {
        console.log(reason);
      });
    }
  }
});
