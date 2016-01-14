import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return Ember.RSVP.hash({
      results: Ember.A(this.store.find("key")),
      users: Ember.A(this.store.find("user"))
    });
  },
  setupController (controller, models) {
    this.controllerFor("application").setProperties({
      title: "Quiz results",
      subTitles: [
        { title:"RESULTS", class: "active", page: "results" },
        { title:"ADMIN", class: "inactive", page: "admin" }
      ]
    });
    let results = this._prepareResultsData(models);
    controller.set("results", results);
  },
  _prepareResultsData (models) {
    let results = models.results;
    let users = models.users;

    results.forEach(item => {
      if (item.get("questions").length === item.get("correct").length + item.get("wrong").length) {
        item.status = "Completed";
        item.class = "completed";
      } else if (item.get("correct").length + item.get("wrong").length > 0) {
        item.status = "In progress";
        item.class = "progress";  
      } else {
        item.status = "Pending";
        item.class = "pending";
      }

      item.user = "None";
      if (item.get("userId")) {
        users.forEach(user => {
          if (user.get("id").toString() === item.get("userId")) {
            item.user = user.get("email");
          }
        });
      }
    });

    return results;
  }
});
