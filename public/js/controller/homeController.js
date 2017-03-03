'use strict';

module.exports = function($scope, $http) {
  $scope.home = 'home';

  var refresh = function () {
         $http.get('/movie/getMovie').success(function (response) {
             console.log('READ IS SUCCESSFUL');
             $scope.movieList = response;

         });
     };

     refresh();

     $scope.setMovie=function(movi){
   sessionStorage.setItem('xyz',movi);
   // $location.path('/details');
 };

};
