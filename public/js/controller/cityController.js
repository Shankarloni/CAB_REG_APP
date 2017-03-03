'use strict';

module.exports = function($scope, $http) {


  var refresh = function () {
        $http.get('/city/getCity').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.citList = response;
                $scope.cit = "";

        });
    };
    refresh();

  $scope.addCity = function (city) {
                                $http.post('/city/addCity', city).success(function (response) {
                                console.log(response);
                                console.log("CREATE IS SUCCESSFUL");
                                refresh();
                            });

                          };

    $scope.removeCity = function (city) {
    $http.delete('/city/deleteCity/' + city._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editCity = function (city) {
         $http.get('/city/getCity/' + city._id).success(function (response) {
            $scope.cit = response[0];
        });
    };

    $scope.updateCity = function () {
        console.log("REACHED UPDATE");
        console.log($scope.cit._id);
        $http.put('/city/updateCity/' + $scope.cit._id, $scope.cit).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};
