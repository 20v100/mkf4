import DS from 'ember-data';

export default DS.Model.extend({
  totalCost: DS.attr('number'),
  waybillDate: DS.attr('date'),
  waybillID: DS.attr('string')
});
