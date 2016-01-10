import Ember from 'ember';

export default Ember.Controller.extend({
  quantity: 20,
  actions: {
    generateRandomUrl () {
      var credentials = {
        quantity: this.get("quantity"),
        content: "random"
      }

      this.store.createRecord("key", credentials).save().then(record =>{
        Ember.$(".success").text("Key successfully created.").show().fadeOut(4000);
        Ember.$(".generated-url").text("Generated session => ".concat(record.get("content"))).show();
      }).catch(reason => {
        console.log("error", reason.error || reason.detail);
      });
    }
  }
});
