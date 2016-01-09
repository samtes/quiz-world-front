import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  setupController () {
    this.controllerFor("application").setProperties({
      title: "Instruction Page",
      subTitles: [
        { title:"ADMIN", class: "inactive", page: "admin" } 
      ]
    });
  }
});
