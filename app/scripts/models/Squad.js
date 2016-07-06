/*global Directory, Backbone*/

Directory.Models = Directory.Models || {};

(function () {
  'use strict';

  Directory.Models.Squad = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
