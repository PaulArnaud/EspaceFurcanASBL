var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require("cors");
var passport = require("passport");
var mongoose = require("mongoose");

// Models
require('./models/Service');
require('./models/User');
require('./models/Reservation');
require('./models/SocialCategory');

// Database Connection

const db = require("./config/keys").mongoURI;

mongoose.connect(db, { useNewUrlParser: true });

mongoose.connection.on("error", error => {
  console.log("Database connection error:", error);
});

mongoose.connection.once("open", () => {
  console.log("Connected to Database!");
});

var data = require('./Data');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var servicesRouter = require("./routes/services");
var socialcategoryRouter = require("./routes/socialcategory");
var reservationRouter = require('./routes/reservations');

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/services", servicesRouter);
app.use("/socialcategory", socialcategoryRouter);
app.use("/reservations",reservationRouter);

require("./helpers/passport")(passport);

app.use(passport.initialize());
app.use(passport.session());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

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