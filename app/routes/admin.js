import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  setupController: function(controller, model) {
    this.controllerFor("application").setProperties({
      title: "Admin Panal",
      subTitles: [
        { title:"ADMIN", class: "active", page: "admin" }
      ]
    });

    controller.set("user", this.get("currentUser"));
    controller.set("buttons", [
      { button: "ADD OR UPDATE QUESTIONS", page: "adder" },
      { button: "VIEW RESULTS", page: "results" },
      { button: "GENERATE URL", page: "generator" }
    ]);
  }
});
