'use strict';

module.exports=function($scope,$http){

  var refresh=function(){

      $http.get('/city/getCity').success(function (response) {
        $scope.cityList = response;
      });
      $http.get('/theatre/getTheatre/').success(function (response) {
        $scope.theatreList=response;
      });
      $http.get('/showtime/getShowtime').success(function(response){
        $scope.showtimeList = response;
      });
      $http.get('/movie/getMovie').success(function (response) {
          $scope.movieList=response;
      });

      $http.get('/mapping/getMapping').success(function(response){
        console.log("READ IS SUCCESSFUL");
        $scope.mapList = response;
        $scope.mapp  = "";
      });
  };
  refresh();


  $scope.addMapping=function(){

    $http.post('/mapping/addMapping', $scope.mapp).success(function(response){
      console.log(response);
      console.log("MAPPING DONE SUCCESSFULY");
      refresh();
    });

        var val='true';
        $http.put('/movie/updateMovie/'+ $scope.mapp.Movie +'/'+val).success(function (response) {
            console.log(response);
          });


    };

   $scope.removeMapping = function (mapp) {
      $http.delete('/mapping/deleteMapping/' + mapp._id).success(function (response) {
          console.log(response);
          console.log('DELETED SUCCESSFULLY');
          refresh();
      });



      var val='false';
          $http.put('/movie/updateMovie/'+ mapp.Movie +'/'+val).success(function (response) {
            console.log(response);
          });
      };
  };
