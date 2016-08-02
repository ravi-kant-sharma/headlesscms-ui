    //var mainApp = angular.module("content-module",[]);
    'use strict';

    angular.module('myApp', [])
      .controller('ContentController', function($scope, $http) {
        /*$scope.$watch('search', function() {
          fetch();
        });

        $scope.search = "Sherlock Holmes";
    */
        $scope.value = "Test";
        $scope.fetch = function() {
         /* $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
            .then(function(response) {
              $scope.details = response.data;
            });

          $http.get("http://www.omdbapi.com/?s=" + $scope.search)
            .then(function(response) {
              $scope.related = response.data;
            });
            */
          /* $http({
                    method : "GET",
                    url : "http://localhost:4502/bin/headless?query=/content/geometrixx-outdoors/en",
                    crossDomain: "true", 
                    xhrFields: {
                        withCredentials: true,
                        username:'admin',
                        password:'admin'
                    },
                }).then(function(respnse){
                        $scope.value = respnse.data;
           });*/




    var settings = {
      "async": true,
      "crossDomain": true,
      "dataType":"text",
      //"url": "http://localhost:4502/bin/headless?query=/content/geometrixx-outdoors/en/jcr:content",
      "url": "http://localhost:4502/bin/headless?query=/content/dam/geometrixx-outdoors/activities/hiking/PDP_2_c05.jpg",
      "method": "GET",
      xhrFields: {
              withCredentials: true,
          username:'admin',
          password:'admin'
     },
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data"
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
       $scope.value = response;
       $scope.$apply();
    });
        }
      });