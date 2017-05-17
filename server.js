var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/contactlist', function (req, res) {
	console.log("I received a GET request")

    // res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000. Hooray!");
