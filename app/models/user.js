import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr("string"),
  password: DS.attr("string"),
  confirmPassword: DS.attr("string"),
  key: DS.attr("string"),
  role: DS.attr("string")
});
