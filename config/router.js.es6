var Router = Ember.Router.extend();

Router.map(function() {
  this.resource('contacts', function() {
    this.route('new');
    this.route('show', {path: ':contact_id'});
    this.route('edit', {path: ':contact_id/edit'});
  });
});

export default Router;
