export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('contact', params.contact_id);
  },
  actions: {
    destroyRecord: function() {
      var model = this.get('controller.model');
      var _this = this;
      model.destroyRecord().then(function() {
        _this.transitionTo('contacts.index');
      });
    }
  }
});
