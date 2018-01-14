const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//to render static files from dist directory
app.use(express.static('dist'))

//body parser middleware to read POST data
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//render home page
app.get('/', function (req, res) {
  res.sendFile('index.html')
})

//render contact page
app.get('/contact', function (req, res) {
  res.sendFile(__dirname + '/dist/contact.html')
})

app.post('/contact', function (req, res) {
  var form = req.body.data;
  console.log("your data is " + form.name);
  res.end("yes");
})



//listening port
app.listen(3000, () => console.log('listening on port 3000'))
