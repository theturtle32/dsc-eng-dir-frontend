/*global Directory, Backbone, JST*/

Directory.Views = Directory.Views || {};

(function () {
  'use strict';

  Directory.Views.SquadMembershipSelector = Marionette.ItemView.extend({
    template: JST['app/scripts/templates/SquadMembershipSelector.hbs'],
    tagName: 'tr',
    className: 'squad-membership-selector',
    events: {
      'change input': 'handleCheckboxChanges'
    },
    
    handleCheckboxChanges: function(event) {
      var t = $(event.target);
      var checkboxes = t.closest('tr').find('input[type=checkbox]');
      
      // Clear other checked boxes
      checkboxes.not(t).attr('checked', null);
      this.membership = {
        name: this.model.get('name'),
        model: this.model,
        membership: checkboxes.filter(':checked').data('membership') || 'none'
      };
      this.trigger('membership-changed', this.membership);
    }
  });

})();
