angular.module('lvbpApp')
    .directive('lvbpDirective', lvbpDirective);

function lvbpDirective(){

    return {
        restrict: 'E',
        scope: {
            headers: '=',
            teams: '='
        },
        templateUrl: '/views/team.html'
    }

}
