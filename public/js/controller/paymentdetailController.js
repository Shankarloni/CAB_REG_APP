'use strict';
module.exports = function($scope, $http,$rootScope,$location) {

var ref=function(){
  $http.get('/mapping/getmapping').success(function(response){
    $scope.mapping=response;
  });
};

  var a= sessionStorage.getItem('cls');
  var c= sessionStorage.getItem('nOfS');
  var f= sessionStorage.getItem('Amt');

  document.getElementById('cls').innerHTML=a;
  document.getElementById('nOfS').innerHTML=c;
  document.getElementById('Amt').innerHTML=f;


var refresh = function () {
        $http.get('/paymentdetail/getPaymentdetail').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.dtlList = response;
                $scope.dtl = "";
        });
    };
    refresh();

  $scope.addPaymentdetail = function (dtl) {
                                $http.post('/paymentdetail/addPaymentdetail', $scope.dtl).success(function (response) {
                                console.log(response);
                                console.log("CREATE IS SUCCESSFUL");
                                refresh();
                            })
                            alert("YOUR MOVIE IS SUCCESSFULLY BOOKED");
                          }
};
