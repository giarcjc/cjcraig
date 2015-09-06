'use strict';
 
var path = require('path');
var errors = require('./components/errors');
var bodyParser = require('body-parser');


var sendMail = require('./emailer');
 
module.exports = function (app) {

	app.use(bodyParser.json()); // for parsing application/json
	app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
	app.route('/contact').post(sendMail);

  // All undefined asset routes should return a 404
  app.route('/:url(app|components|bower_components)/*')
   .get(errors[404]);
 
  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function (req, res) {
      res.sendFile(path.join(app.get('appPath'), 'index.html'));
    });
};