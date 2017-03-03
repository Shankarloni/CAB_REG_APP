var express = require('express');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('cookie-session');

var movies = require('./routes/movie-crud');
var city = require('./routes/city-crud');
var showtime = require('./routes/showtime-crud');
var theatre = require('./routes/theatre-crud');
var seattype = require('./routes/seattype-crud');
var mappings = require('./routes/mapping-crud');
var paymentdetail = require('./routes/paymentdetail-crud');
var authin   = require('./routes/auth');

var bodyParser=require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/movie', movies);
app.use('/city', city);
app.use('/showtime', showtime);
app.use('/theatre', theatre);
app.use('/mapping', mappings);
app.use('/paymentdetail', paymentdetail);
app.use('/', authin);


var mongo = require('mongodb');
var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/test';
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});

app.use(passport.initialize());
app.use(passport.session());

// Only load this middleware in dev mode (important).
if (app.get('env') === 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');

  var config = require('./webpack.config');

  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/build",

    headers: { "X-Custom-Webpack-Header": "yes" },

    stats: {
      colors: true
    }
  }));

}



var server = app.listen(7000, function () {
  console.log('listening on port 7000');
});
