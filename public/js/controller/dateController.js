'use strict';

module.exports = function($scope, $http) {

  var refresh = function () {
        $http.get('/showtime/getShowtime').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.dateList = response;
            $scope.date = "";

        });
    };
     refresh();

       $scope.addDate = function () {
         $http.post('/date/adddate', date).success(function (response) {
              console.log(response);
              console.log("CREATE IS SUCCESSFUL");
              refresh();
        });
    };


    $scope.removeDate = function (date) {
        $http.delete('/date/deletedate/' + date._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };
};
