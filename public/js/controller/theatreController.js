'use strict';

module.exports = function($scope, $http) {


  var refresh = function () {

   $http.get('/city/getCity').success(function (response) {
     $scope.cityList = response;
    });


        $http.get('/theatre/getTheatre').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.theatreList = response;
            $scope.theatre = "";
        });
    };
    refresh();

    $scope.addTheatre = function (theatre) {

    $http.post('/theatre/addTheatre', theatre).success(function (response) {
     console.log(response);
     console.log("CREATE IS SUCCESSFUL");
     refresh();
        });
    };

    $scope.removeTheatre = function (theatre) {
        $http.delete('/theatre/deleteTheatre/' + theatre._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editTheatre = function (theatre) {
         $http.get('/theatre/getTheatre/' + theatre._id).success(function (response) {
            $scope.theatre = response[0];
        });
    };

    $scope.updateTheatre = function () {
        console.log("REACHED UPDATE");
        console.log($scope.theatre._id);
        $http.put('/theatre/updateTheatre/' + $scope.theatre._id, $scope.theatre).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};
