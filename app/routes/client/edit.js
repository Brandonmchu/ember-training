module.exports = App.ClientEditRoute = Ember.Route.extend({
  model: function(){
    return this.modelFor('client');
  }
});
