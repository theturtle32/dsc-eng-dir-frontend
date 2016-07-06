/*global Directory, Backbone*/

Directory.Collections = Directory.Collections || {};

(function () {
  'use strict';

  Directory.Collections.Engineers = Backbone.Collection.extend({

    model: Directory.Models.Engineer,
    
    load: function() {
      var s = this;
      $.ajax({
        method: 'GET',
        url: '/engineers',
        format: 'json',
        success: function(data, textStatus, jqXHR) {
          s.reset(_.sortBy(data, 'name'));
        }
      });
    }

  });

})();
