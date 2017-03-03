'use strict';

module.exports = function($scope, $http) {

  var refresh = function () {
        $http.get('/showtime/getShowtime').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.showtimeList = response;
            $scope.showtime = "";

        });
    };
     refresh();

       $scope.addShowtime = function (showtime) {
         $http.post('/showtime/addShowtime', showtime).success(function (response) {
              console.log(response);
              console.log("CREATE IS SUCCESSFUL");
              refresh();
        });
    };


    $scope.removeShowtime = function (showtime) {
        $http.delete('/showtime/deleteShowtime/' + showtime._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };
};
