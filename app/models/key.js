import DS from 'ember-data';

export default DS.Model.extend({
  difficulty: DS.attr("string"),
  quantity: DS.attr("string"),
  type: DS.attr("array"),
  content: DS.attr("string"),
  correct: DS.attr("array"),
  wrong: DS.attr("array"),
  questions: DS.attr("array")
});