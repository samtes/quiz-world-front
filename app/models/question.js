import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr("string"),
  difficulty: DS.attr("string"),
  type: DS.attr("string"),
  options: DS.attr("array"),
  time: DS.attr("string"),
  ids: DS.attr("array")
});
