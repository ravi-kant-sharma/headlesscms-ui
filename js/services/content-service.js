var contentService = mainApp.factory('contentService',['$http','$scope',function($http,$scope){
    return{
        getContent : function(){
                $http({
                method : "GET",
                url : "http://localhost:4502/bin/headless?query=/content/geometrixx-outdoors/en"
            }).then(function(respnse){
                    $scope.value = respnse.data;
            });
        }
    }
}]);

