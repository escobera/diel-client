import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return Ember.A([
        { name: "Rafael Barbosa 1" },
        { name: "Rafael Barbosa 2" },
        { name: "Rafael Barbosa 3" }
      ]);
    }
});
