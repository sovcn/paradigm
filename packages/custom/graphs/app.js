'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Graphs = new Module('graphs');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Graphs.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Graphs.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Graphs.menus.add({
    title: 'View Graphs',
    link: 'all graphs',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Graphs.menus.add({
	    title: 'New Graph',
	    link: 'create graph',
	    roles: ['authenticated'],
	    menu: 'main'
	  });
  
  Graphs.aggregateAsset('css', 'graphs.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Graphs.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Graphs.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Graphs.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Graphs;
});
