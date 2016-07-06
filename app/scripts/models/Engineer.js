/*global Directory, Backbone*/

Directory.Models = Directory.Models || {};

(function () {
  'use strict';

  Directory.Models.Engineer = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: function() {
      return {
        squads: new Directory.Collections.Squads()
      };
    },

    validate: function(attrs, options) {
      if (!attrs.name || attrs.name.length < 1) {
        return "Name is required";
      }
      if (!attrs.username || attrs.username.length < 1) {
        return "Username is required";
      }
      if (!attrs.squads || attrs.squads.length < 1) {
        return "At least one squad membership is required";
      }
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
