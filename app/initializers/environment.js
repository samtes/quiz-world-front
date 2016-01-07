import Ember from "ember";
import ENV from "../config/environment";

function initialize (container, application) {
  var hostname = window.location.hostname;
  var backendMapping = {
    "quiz-world-front.herokuapp.com": "https://quiz-world.herokuapp.com",
    "default": "http://localhost:4500"
  }

  ENV.REST_ENDPOINT = backendMapping[hostname] || backendMapping["default"];

  container.lookup("adapter:application").set("host", ENV.REST_ENDPOINT);
  ENV.LOGIN_TOKEN_ENDPOINT = ENV.REST_ENDPOINT.concat("/login");
  ENV["ember-simple-auth"].crossOriginWhitelist = [ENV.REST_ENDPOINT];
}

export default {
  name: "environment",
  initialize: initialize
}
