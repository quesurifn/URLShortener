var express = requrie('express');
var app = express();

app.get('/', function(req, res){
  //route to serve up the homepage
});

app.post('/api/shorten', function(req, res){
  //route to create and return a shortened URL
});

app.get('/:encoded_id', function (req, res){
//route to redirect the visitor totheir original url
});

var server = app.listen(3000, function(){
  console.log("server listening on port 3000");
});
