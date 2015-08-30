var express   = require('express')
  , nunjucks  = require('nunjucks')
  , path      = require('path')

var app = express()


var env = new nunjucks.Environment(
  new nunjucks.FileSystemLoader('views'),
  { autoescape: true }
)

env.express(app)

app.use(express.static(path.join(__dirname, 'pub')))

var router = express.Router()
require('./routes')(router)
app.use(router)

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});