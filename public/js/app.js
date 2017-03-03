'use strict';


var angular = require('angular');
require('angular-route');

var app = angular.module('movieApp', [ 'ngRoute' ]);

require('../css/app.scss');

require('./controller');

app.config(function($routeProvider) {

  $routeProvider

  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
  })
  .when('/booking', {
    templateUrl: 'views/booking.html',
    controller: 'BookingController',
  })
  .when('/cancellation', {
    templateUrl: 'views/cancellation.html',
    controller: 'CancellationController',
  })

  .when('/movie', {
    templateUrl: 'views/movie.html',
    controller: 'MovieController',
    resolve: {
        logincheck: checkLoggedin
        }
  })
  .when('/theatre', {
    templateUrl: 'views/theatre.html',
    controller: 'TheatreController',
    resolve: {
        logincheck: checkLoggedin
        }
  })

  .when('/city', {
     templateUrl: 'views/city.html',
     controller:'CityController',
     resolve: {
        logincheck: checkLoggedin
        }
   })

   .when('/admin', {
      templateUrl: 'views/admin.html',
      controller:'AdminController',
      resolve: {
      logincheck: checkLoggedin
      }
  })

   .when('/login', {
      templateUrl: 'views/login.html',
      controller:'LoginController',
      })

  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterController',
    })


    .when('/showtime', {
         templateUrl: 'views/showtime.html',
         controller:'ShowtimeController',
         resolve: {
        logincheck: checkLoggedin
        }
       })

      .when('/seats', {
        templateUrl: 'views/seats.html',
        controller:'seatsController',
    })

    .when('/mapping', {
        templateUrl: 'views/mapping.html',
        controller: 'MappingController',
        resolve: {
        logincheck: checkLoggedin
        }
    })

    .when('/show',{
     templateUrl : 'views/show.html',
     controller  :'BookingController',
   })

   .when('/paymentdetail',{
    templateUrl : 'views/paymentdetail.html',
     controller  :'PaymentdetailController',
   })

   .when('/feedback',{
    templateUrl : 'views/feedback.html'
  })

  .otherwise({
    redirectTo: '/home'
  });
});


var checkLoggedin = function($q, $timeout, $http, $location, $rootScope)
{
    var deferred = $q.defer();

    $http.get('/loggedin').success(function(user)
    {
        $rootScope.errorMessage = null;
        // User is Authenticated
        if (user !== '0')
            deferred.resolve();
        // User is Not Authenticated
        else
        {
            $rootScope.errorMessage = 'You need to log in.';
            deferred.reject();
            $location.url('/login');
        }
    });

    return deferred.promise;
};


app.controller("NavCtrl", function($rootScope,$scope, $http, $location){
  $scope.logout= function()
  {
     $http.post("/logout").success(function(){
       $location.path('/login');
     });
  }

});
