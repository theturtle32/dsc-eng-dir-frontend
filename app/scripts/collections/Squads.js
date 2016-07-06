/*global Directory, Backbone*/

Directory.Collections = Directory.Collections || {};

(function () {
  'use strict';

  Directory.Collections.Squads = Backbone.Collection.extend({

    model: Directory.Models.Squad,

    load: function() {
      var s = this;
      $.ajax({
        method: 'GET',
        url: '/squads',
        format: 'json',
        success: function(data, textStatus, jqXHR) {
          s.reset(_.sortBy(data, 'name'));
        }
      });
    }
  });

})();
