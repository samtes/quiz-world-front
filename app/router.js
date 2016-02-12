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
  this.route('results', function() {
    this.route('result');
  });
  this.route('questions');
  this.route('question', { path: "/questions/:question_id" });
  this.route('completed', { path: "/questions/completed" });
  this.route('refresher');
});

export default Router;
