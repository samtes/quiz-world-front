import DS from "ember-data";
import config from "quiz-world-front/config/environment";
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2',
  host: config.REST_ENDPOINT,
  crossWithCredentials: true,

  shouldReloadAll () {
    return true;
  },

  shouldBackgroundReloadRecord () {
    return false;
  }
});
