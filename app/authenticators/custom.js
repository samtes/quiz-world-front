import Ember from "ember";
import Base from "ember-simple-auth/authenticators/base";
import ENV from "quiz-world-front/config/environment";

export default Base.extend({
  tokenEndpoint: ENV.LOGIN_TOKEN_ENDPOINT,

  restore(data) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(ident, password, key) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: this.tokenEndpoint,
        type: "POST",
        data: {
          username: ident,
          password: password,
          key: key
        }
      }).then(response => {
        Ember.run(() => {
          resolve({
            token: response.token,
            userID: response.userID
          });
        });
      }, function (xhr, status, error) {
        var response;

        if(error === "Unauthorized"){
          response = JSON.parse(xhr.responseText);
        } else {
          response = { message: "Authentication failed. The server may be down" };
        }

        Ember.run(function () {
          reject(response.message);
        });
});
    });
  },

  invalidate(data) {
    return new Ember.RSVP.Promise(resolve => {
      Ember.$.ajax({
        url: this.tokenEndpoint,
        type: "DELETE"
      }).always(() => {
        resolve();
      });
    });
  }
});
