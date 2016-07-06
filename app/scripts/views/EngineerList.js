/*global Directory, Backbone, JST*/

Directory.Views = Directory.Views || {};

(function () {
  'use strict';

  Directory.Views.EngineerList = Marionette.CompositeView.extend({
    template: JST['app/scripts/templates/EngineerList.hbs'],
    getChildView: function() { return Directory.Views.EngineerView; },
    childViewContainer: '.engineers',
    tagName: 'div',
    className: 'engineer-list',
    events: {
      'click button[data-action=refresh]': 'refresh'
    },
    
    refresh: function() {
      this.collection.load();
    }
  });

})();
