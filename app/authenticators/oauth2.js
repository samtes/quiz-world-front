import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from "quiz-world-front/config/environment";

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: ENV.LOGIN_TOKEN_ENDPOINT
});
