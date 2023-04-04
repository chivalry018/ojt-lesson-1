var express = require('express');
var controller = require('./controller');
const memberctrl = require('./memberctrl');

var routes = express.Router();


routes.get('/get-test', function(req, res) {
	controller.getTest(res);
});

routes.get('/get-member/:id', function(req, res) {
	memberctrl.getmember(req.params.id,res);
});
	
routes.post('/add-member', function(req, res) {
	memberctrl.addmember(req.body,res);
});

routes.post('/update-member/:id', function(req, res) {
	memberctrl.updatemember(req.body,res);
});

routes.get('/delete-member/:id', function(req, res) {
	memberctrl.deletemember(req.params.id,res);
});

routes.get('/get-all-members', function(req, res) {
	memberctrl.getallmembers(res);
});

module.exports =  routes