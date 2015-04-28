import DS from 'ember-data';

export default DS.Model.extend({
  price: DS.attr('number'),
  origin: DS.belongsTo('station', { inverse: 'slis', async: true } ),
  rev: DS.attr('string'),
});
