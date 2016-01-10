import Ember from 'ember';

export default Ember.Controller.extend({
  difficulty: 'Low',
  difficulities: ["High", "Medium", "Low"],
  type: "CSS",
  types: ["CSS", "HTML", "JavaScript", "Quality Assurance"],

  _populateArray (options, correct) {
    let array = [];

    for (let prop in options) {
      let obj = { option: options[prop] };

      if (prop === correct) {
        obj.correct = true;
      }

      array.push(obj);
    }

    return array;
  },

  actions: {
    addQuestion () {
      let options = this.getProperties("one", "two", "three", "four");
      let difficultyMapping = { Low: 1, Medium: 2, High: 3 };
      let typeMapping = { CSS: "css", HTML: "html", "JavaScript": "js", "Quality Assurance": "qa" };
      let correct = this.get("correct");
      let array = this._populateArray(options, correct);

      let params = this.getProperties("question", "type", "difficulty");
      params.difficulty = difficultyMapping[params.difficulty];
      params.type = typeMapping[params.type];
      params.options = array;

      this.store.createRecord("question", params).save().then(() => {
        Ember.$(".success").text("Question successfully added.").show().fadeOut(4000);
        this.setProperties({
          "question": "",
          "type": "",
          "difficulty": "",
          "one": "",
          "two": "",
          "three": "",
          "four": "",
          "checked": ""
        });
      }).catch(reason => {
        console.log("error ==> ", reason);
      });
    },

    cancelQuestion () {
      console.log("Cancels question action .....");
    }
  }
});
