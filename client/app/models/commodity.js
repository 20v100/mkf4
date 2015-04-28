import DS from 'ember-data';

export default DS.Model.extend({
  com: DS.attr('number'),
  comDescription: DS.attr('string'),
  businessUnitCode: DS.attr('number'),
  businessUnitDescription: DS.attr('string'),
  majorSubgroupCode: DS.attr('number'),
  majorSubgroupDescription: DS.attr('string'),
  subgroupCode: DS.attr('number'),
  subgroupDescription: DS.attr('string'),
  publications: DS.hasMany('publication', { inverse: "coms", async: true } )
});
