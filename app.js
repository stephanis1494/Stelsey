const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

//syncing message store JSON
fs.readFile('messages.json', 'utf8', function(err, data) {
    if (err) throw err;
    console.log('messages.json read');
});


//to render static files from dist directory
app.use(express.static('dist'))

//body parser middleware to read POST data
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//render home page
app.get('/', function(req, res) {
    res.sendFile('index.html')
})

//render bio page
app.get('/bio', function(req, res) {
    res.sendFile(__dirname + '/dist/bio.html')
})

//render sPortal page
app.get('/sPortal', function(req, res) {
    res.sendFile(__dirname + '/dist/sportal.html')
})

//render social page
app.get('/social', function(req, res) {
    res.sendFile(__dirname + '/dist/social.html')
})

//render contact page
app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/dist/contact.html')
})

//catching post requests from contact form
app.post('/', function(req, res) {
    var data = {
        name: req.body.Name,
        email: req.body.Email,
        message: req.body.Message
    }
    res.set('Content-Type', 'application/json')
    console.log('Form received on server ')
    var data = JSON.stringify(data, null, 2)
    fs.writeFile('messages.json', data, finished)

    function finished(err) {
        console.log('write successful')
    }
    res.end('yes');
})


//listening port
app.listen(3000, () => console.log('listening on port 3000'))
