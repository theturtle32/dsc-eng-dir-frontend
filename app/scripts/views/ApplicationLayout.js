/*global Directory, Backbone, JST*/

Directory.Views = Directory.Views || {};

(function () {
  'use strict';

  Directory.Views.ApplicationLayout = Marionette.LayoutView.extend({

    template: JST['app/scripts/templates/ApplicationLayout.hbs'],

    tagName: 'div',

    className: 'engineering-directory',

    events: {},
    
    regions: {
      engineerList: '.engineer-list-container',
      squadList: '.squad-list-container',
      newEngineerForm: '.new-engineer-form-container'
    },

    initialize: function () {
    },

    onRender: function () {
      console.log("onRender");
      this.engineerListView = new Directory.Views.EngineerList({
        collection: Directory.engineers
      });
      this.newEngineerForm = new Directory.Views.NewEngineerForm({
        model: new Directory.Models.Engineer(),
        collection: Directory.squads
      });
      this.showChildView('engineerList', this.engineerListView);
      this.showChildView('newEngineerForm', this.newEngineerForm);
    }

  });

})();
