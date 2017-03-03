'use strict';

var app = require('angular').module('movieApp');

app.controller('BookingController', require('./bookingController'));
app.controller('CancellationController', require('./cancellationController'));
app.controller('HomeController', require('./homeController'));
app.controller('MovieController', require('./movieController'));
app.controller('TheatreController', require('./theatreController'));
app.controller('CityController', require('./cityController'));
app.controller('ShowtimeController', require('./showtimeController'));
app.controller('AdminController', require('./adminController'));
app.controller('LoginController', require('./loginController'));
app.controller('seatsController', require('./seatsController'));
app.controller('PaymentdetailController', require('./paymentdetailController'));

//app.controller('SeattypeController', require('./seattypeController'));
app.controller('MappingController', require('./mappingController'));
//app.controller('DateController', require('./dateController'));
app.controller('RegisterController',require('./registerController'));
