var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);



var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


app.post('/:channel/', function(req, res){
  console.log('channel:'+req.params.channel+'->'+ req.body.msg)
  io.emit(req.params.channel, req.body.msg);
  res.json({});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

