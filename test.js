function expressSetup(app) {
	app.get('/', function(req, res){
	  res.render('layout', { title: 'Express' });
	});
}

exports.expressSetup = expressSetup;