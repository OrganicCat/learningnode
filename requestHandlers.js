var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

function start2(request, response) {
	response.render('index', { title: 'Express' });
}

function start(response, request) {
	console.log("Request handler 'start' was called");

	var body = '<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html; '+
		'charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="/upload" enctype="multipart/form-data" method="post">'+
		'<input type="file" name="upload">'+
		'<input type="submit" value="Upload file" />'+
		'</form>'+
		'</body>'+
		'</html>';

	
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();

}

function upload(response, request) {
	console.log("Request handler 'upload' was called");

	// Create form object using formidable
	var form = new formidable.IncomingForm();
	form.parse(request, function(error, fields, files) {
		// workaround for windows, deletes file before replacing
		fs.rename(files.upload.path, "test/cats.jpg", function(error) {
			if(error) {
				fs.unlink("test/cats.jpg");
				fs.rename(files.upload.path, "test/cats.jpg");
			}
		});
	});

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("received image: <br/>");
	response.write("<img src='/show' />")
	response.end();
	
}

function show(response) {
	console.log("Request handler 'show' was called");
	response.writeHead(200, {"Content-Type": "image/jpeg"});
	fs.createReadStream("test/cats.jpg").pipe(response);
}

exports.start = start;
exports.start2 = start2;
exports.upload = upload;
exports.show = show;