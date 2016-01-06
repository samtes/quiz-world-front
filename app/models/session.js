import DS from 'ember-data';

export default DS.Model.extend({
  difficulty: DS.attr("string"),
  quantity: DS.attr("string"),
  type: DS.attr("array")
});
