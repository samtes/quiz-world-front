import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('register');
  this.route('login');
  this.route('instruction');
  this.route('admin');
  this.route('generator', function() {
    this.route('custom');
    this.route('random');
  });
  this.route('adder', function() {
    this.route('upload');
    this.route('find');
    this.route('add');
  });
});

export default Router;
