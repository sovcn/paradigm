'use strict';

var graphs = require('../controllers/graphs');

// The Package is past automatically as first parameter
module.exports = function(Graphs, app, auth, database) {	
	
  /*app.get('/graphs/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/graphs/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/graphs/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/graphs/example/render', function(req, res, next) {
    Graphs.render('index', {
      package: 'graphs'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });*/
  
  
  // Set up JSON API
  app.get('/graphs', graphs.all);
  app.get('/graphs/user', graphs.allForUser);
  app.post('/graphs', auth.requiresLogin, graphs.create);
  app.get('/graphs/:graphId', graphs.show);
  app.put('/graphs/:graphId', auth.requiresLogin, graphs.update);
  app.delete('/graphs/:graphId', auth.requiresLogin, graphs.destroy);
  
// Finish with setting up the graphId param
  app.param('graphId', graphs.graph);
  
};
