/*global Directory, $*/


window.Directory = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');
    
    Directory.engineers = new Directory.Collections.Engineers();
    Directory.squads = new Directory.Collections.Squads();
    
    Directory.engineers.load();
    Directory.squads.load();
    
    this.applicationLayout = new Directory.Views.ApplicationLayout();
    this.applicationLayout.render();
    $('#application-layout').replaceWith(this.applicationLayout.$el);
  }

};
