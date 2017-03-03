'use strict';

module.exports = function($scope, $http) {
  $scope.seattype = 'seattype';

  var refresh = function (seattype) {
        $http.get('/seattype/getSeattype').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.seatList = response;
                $scope.seat = "";

        });
    };
    refresh();

  $scope.addSeattype = function (seattype) {
                                $http.post('/seattype/addSeattype', seattype).success(function (response) {
                                console.log(response);
                                console.log("CREATE IS SUCCESSFUL");
                                refresh();
                            });


       console.log($scope.contact);

    };

    $scope.removeSeattype = function (seattype) {
      // console.log(id);
        $http.delete('/seattype/deleteseattype/' + seattype._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editSeattype = function (seattype) {
         $http.get('/seattype/getSeattype/' + seattype._id).success(function (response) {
            $scope.seat = response[0];
        });
    };

    $scope.updateSeattype = function () {
        console.log("REACHED UPDATE");
        console.log($scope.seat._id);
        $http.put('/seattype/updateSeattype/' + $scope.seat._id, $scope.seat).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};
