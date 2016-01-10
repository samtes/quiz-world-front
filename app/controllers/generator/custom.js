import Ember from 'ember';

export default Ember.Controller.extend({
  quantity: 20,
  difficulty: 'Low',
  difficulities: ["High", "Medium", "Low"],

  actions: {
    generateUrl () {
      var types = this.getProperties("html", "css", "js", "qa");
      var newtype = [];

      for (var key in types) {
        if (types[key] === true) {
          newtype.push(key);
        }
      }
      var difficultyMapping = { Low: 1, Medium: 2, High: 3 };
      var credentials = this.getProperties("difficulty", "quantity");

      credentials.difficulty = difficultyMapping[credentials.difficulty];
      credentials.type = newtype;

      this.store.createRecord("key", credentials).save().then(record =>{
        Ember.$(".success").text("Key successfully created.").show().fadeOut(4000);
        Ember.$(".generated-url").text("Generated session => ".concat(record.get("content"))).show();
      }).catch(reason => {
        console.log("error", reason.error || reason);
      });
    }
  }
});
