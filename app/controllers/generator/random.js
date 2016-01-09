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
        console.log("success", record.get("content"));
        Ember.$(".generated-url").text("Generated session => ".concat(record.get("content"))).show();
      }).catch(reason => {
        console.log("error", reason.error || reason.detail);
      });
    }
  }
});
