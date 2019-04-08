var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
//var db = require('../db.js');
var transporter = nodemailer.createTransport({
	host: "smtp-mail.outlook.com", // hostname
	secureConnection: false, // TLS requires secureConnection to be false
	port: 587, // port for secure SMTP
	tls: {
		ciphers:'SSLv3'
	},
	auth: {
		user: 'ngudbhavtest@outlook.com',
		pass: 'NGUdbhav'
	}
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/contact/', function(req, res, next) {
	var mailOptions = {
		from: 'ngudbhavtest@outlook.com', // sender address (who sends)
		to: 'ngudbhav05@hotmail.com', // list of receivers (who receives)
		subject: 'Feedback my wesbite', // Subject line
		text: 'Hello '+req.body.kname+ ' '+ req.body.kmsg + ' by '+req.body.kemail // plaintext body
	};
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
		}
		else{
		}
		res.redirect('/');
	});
});
router.post('/event/app/', function(req, res, next){
	console.log(req.body.date);
	/*db.query('insert into question values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [parseInt(req.body.kroll), req.body.kname, req.body.kemail, req.body.knumber, req.body.kq1, req.body.kq2, req.body.date, req.body.kq3, req.body.kq4, req.body.kq5], function(error, results){
		if(error) throw error;
		else{
			res.send('1');
		}
	});*/
});
router.get('/download/android/', function(req, res, next){
	res.download(__dirname + '/app.apk');
});
module.exports = router;
