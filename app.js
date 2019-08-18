var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    express = require('express'),
    exphbs  = require('express-handlebars'),
    html = fs.readFileSync('index.html');

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home', {
        showTitle: true,
        title: "Clymer Test App",
        foo: "Test App",
        bar: function () {
            return "Another test"
        }
    });
});

app.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
