angular.module("shopper").directive('quickViewDirective', ['ngDialog', function(ngDialog) {
    return {
        restrict: 'A',
        scope: { passedScope: '=' },
        template: template: './views/quick-view.html',
        link: function($scope, element){
            element.on('click',function(){
                ngDialog.open({
                    template: '<div>By updating i need it to reflect in the root scope:<br /><br />' +
                              '<input type="text" ng-model="passedObject"/></div>',
                    plain: true,
                    scope: $scope,
                    controller: ['$scope', function($scope){
                        $scope.$watch('passedObject', function(passedObject){
                            //What do i need to do? it seems like the scope at this level is updating how come the parent is not?
                            if(window.console){console.log('updated with: ' + passedObject);}
                            //$scope.$apply();
                        });
                    }]
                })
            });
        }
    };
}]);
