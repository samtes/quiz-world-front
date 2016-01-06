import Ember from 'ember';

export default Ember.Controller.extend({
  difficulty: 'Low',
  difficulities: ["High", "Medium", "Low"],

  actions: {
    generateUrl: function () {
      var types = this.getProperties("html", "css", "js", "qa");
      var newtype = [];

      for (var key in types) {
        if (types[key] === true) {
          newtype.push(key);
        }
      }

      var credentials = this.getProperties("difficulty", "quantity");
      credentials.type = newtype;
      console.log(credentials);

      this.store.createRecord("session", credentials).save().then(function (record) {
        console.log("success", record);
      }, function (reason) {
        console.log("error", reason);
      });
    }
  }
});
