const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// app.use((req , res, next) => {
//     console.log("new request made");
//     console.log("host: ", req.hostname);
//     console.log("path: ", req.path);
//     console.log("method: ", req.method);
//     next();
// });

app.get('/', function(req, res) {
    console.log(req.query);
    console.log(path.join(__dirname, './client/index.html'));
    res.sendFile(path.join(__dirname, './client/index.html'));
});

// לטובת קבצי קוד ועיצוב
// שימו לב לשימוש בכוכבית
app.get('/client/*', function(req, res) {
    console.log(req.path);
	res.sendFile(path.join(__dirname, '.' + req.path));
});

app.listen(80, function() {
	console.log('Server is up');
});