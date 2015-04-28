import DS from 'ember-data';

export default DS.Model.extend({
  stcc: DS.attr('number'),
  slis: DS.hasMany('sli', { inverse: 'origin', async: true } ),
  rev: DS.attr('string'),
});
