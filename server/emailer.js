'use strict';

var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');


var mailIt = function(req, res){
	var data = req.body;

	// console.log(' !! req.body.name: ' + req.body.name);
 // 	var json = {
	// 			status: 'ok'
	// 		}

	// res.send(json)

	var auth = {
	  auth: {
	    api_key: 'key-0bb5a0c19d75bd53cbe9e202339b9174',
	    domain: 'chriscraigguitar.com'
	  }
	}

	var nodemailerMailgun = nodemailer.createTransport(mg(auth));

	nodemailerMailgun.sendMail({
	  from: data.email, // sender address
	  to: 'giarcjc@gmail.com', // An array if you have multiple recipients.
	  subject: 'cjcraig.com submission from: ' + data.name, 
	  'h:Reply-To': data.email,
	  //You can use "html:" to send HTML email content. It's magic!
	  // html: '<b>Wow Big powerful letters</b>',
	  //You can use "text:" to send plain-text content. It's oldschool!
	  text: data.message
	}, function (err, info) {
	  if (err) {
	    console.log('Error: ' + err);
	    res.status(500).json({ error: 'message not sent due to email failure: ' + err })
	  }
	  else {
	    console.log('Response: ' + info);
	    var json = {
				status: 'ok'
			}
		res.send(json);
	  }
	});











}




module.exports = mailIt;