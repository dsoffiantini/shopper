angular.module("shopper").directive('loadDispatcher', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                scope.$emit('$imageLoaded');
            });
        }
    };
})
