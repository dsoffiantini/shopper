angular.module('shopper').controller('productController', function($scope, $state, $stateParams) {



    $scope.tags = [];

    $scope.addTag = function(tag) {
        if ($scope.tags.length === 0) {
            $scope.tags.push({
                name: tag,
                count: 1
            });
        } else {
            for (var i = 0; i < $scope.tags.length; i++) {
                if ($scope.tags[i].name !== tag) {
                    $scope.tags.push({
                        name: tag,
                        count: 1
                    });
                } else {
                    $scope.tags[i].count++;
                }
            }
        }
        return $scope.tags;
    }

});
