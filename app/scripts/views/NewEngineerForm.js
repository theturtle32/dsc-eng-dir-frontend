/*global Directory, Backbone, JST*/

Directory.Views = Directory.Views || {};

(function () {
  'use strict';

  Directory.Views.NewEngineerForm = Marionette.CompositeView.extend({

    template: JST['app/scripts/templates/NewEngineerForm.hbs'],
    getChildView: function() { return Directory.Views.SquadMembershipSelector; },
    childViewContainer: 'table.squad-memberships tbody',

    tagName: 'form',

    className: 'new-engineer',

    events: {
      'submit': 'handleSubmit'
    },
    
    childEvents: {
      'membership-changed': 'handleMembershipChanged'
    },

    initialize: function () {
      // this.listenTo(this.model, 'change', this.render);
      this.listenTo(Directory.squads, 'update', this.render);
    },
    
    handleMembershipChanged: function(childView, squad) {
      var squads = this.model.get('squads');
      squads = squads.filter(function(s) { return s.get('name') !== squad.name });
      switch (squad.membership) {
        case 'none':
          break;
        case 'current':
          squads.push(_.extend(squad.model.toJSON(), { current: true }));
          break;
        case 'former':
          squads.push(_.extend(squad.model.toJSON(), { current: false }));
          break;
      }
      this.model.set('squads', new Directory.Collections.Squads(squads));
    },

    handleSubmit: function(event) {
      event.preventDefault();
      var s = this;
      this.model.set('name', this.$el.find('input[name=name]').val());
      this.model.set('username', this.$el.find('input[name=username]').val());
      if (!this.model.isValid()) {
        return this.showValidationError();
      }
      console.log(this.model.toJSON());
      $.ajax({
        method: 'POST',
        url: '/engineers',
        data: JSON.stringify(this.model.toJSON()),
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        success: function() {
          s.hideValidationError();
          Directory.engineers.load();
        }
      });
    },
    
    showValidationError: function() {
      this.$el.find('.validation-error').text(this.model.validationError).show();
    },
    
    hideValidationError: function() {
      this.$el.find('.validation-error').text('').hide();
    }

  });

})();
