var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/routEmployee');
let bodyParser = require('body-parser');
let demoRouter=require('./routes/demoRoute')

var app = express();

let cors = require('cors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')))

app.use('/', indexRouter);
app.use('/emp', usersRouter);
app.use('/d',demoRouter)


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employee', { useNewUrlParser: true }, async (err) => {

  if (err) {
    console.log('error in db connection', err.toString());
  }
  else {
    console.log('db connection ok.');
  }
})


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
