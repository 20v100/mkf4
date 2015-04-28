import Ember from 'ember';

export default Ember.Controller.extend({
  
  actions: {
    newUser: function() {  
      var pub = this.store.createRecord('user', {
        name: 'Sainte-Rose et belle rose',
        height: 6,
        firstName: 'Rose & Eva:',
        age: 11,
      });
      pub.save();
    }
  }
});
