var contentController = mainApp.controller('contentController',function($scope,contentService){
    $scope.value;
    $scope.getContent = function(){
        contentService.getContent()
    };
});