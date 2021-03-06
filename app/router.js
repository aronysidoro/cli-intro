import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', {path: '/users'}, function() {
    this.route('detail');
  });
});

export default Router;
