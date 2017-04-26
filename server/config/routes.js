var <OBJECTCONTROLLER> = require('../controllers/OBJECTS.js');

module.exports = function(app){
	//index: Showing collection
	app.get('/<OBJECT>', function(req, res) {
		<OBJECTCONTROLLER>.index(req, res);
	});
	//create: creating into db
	app.post('/<OBJECT>', function(req, res) {
		<OBJECTCONTROLLER>.create(req, res);
	});
	//for editing, PUT/POST functionality basically equivalent
	app.put('/<OBJECT>/:id', function(req, res) {
		<OBJECTCONTROLLER>.update(req, res);
	});
	//deleting
	app.delete('/<OBJECT>/:id', function(req, res) {
		<OBJECTCONTROLLER>.delete(req, res);
	});
	
};