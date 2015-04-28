import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('user', function() {});
  this.resource('commodity', function() {});
  this.resource('publication', function() {});
  this.resource('raw-publication', function() {});
  this.resource('sli', function() {});
  this.resource('station', function() {});
  this.resource('cost', function() {});
});
