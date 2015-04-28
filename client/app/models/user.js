import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),
  height: DS.attr('number'),
  firstName: DS.attr('string'),
});
