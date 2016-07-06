/*global Directory, Backbone, JST*/

Directory.Views = Directory.Views || {};

(function () {
  'use strict';

  Directory.Views.EngineerView = Marionette.ItemView.extend({
    template: JST['app/scripts/templates/EngineerView.hbs'],
    tagName: 'div',
    className: 'engineer',
    events: {},
  });

})();
