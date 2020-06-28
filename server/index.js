const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');

app = express();
app.use('/', serveStatic(path.join(__dirname, '../dist')));

const port = process.env.PORT || 8080;
app.listen(port);
console.log(path.join(__dirname, '../dist'));

console.log('server started on', port);
