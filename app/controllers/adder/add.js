import Ember from 'ember';

export default Ember.Controller.extend({
  difficulty: 'Low',
  difficulities: ["High", "Medium", "Low"],
  type: "CSS",
  types: ["CSS", "HTML", "JavaScript", "Quality Assurance"],

  actions: {
    addQuestion () {
      var options = this.getProperties("opt_one", "opt_two", "opt_three", "opt_four");
      var params = this.getProperties("question", "correct", "type", "difficulty");
      console.log("Adds question action .....", options, params);
    },
    cancelQuestion () {
      console.log("Cancels question action .....");
    }
  }
});
