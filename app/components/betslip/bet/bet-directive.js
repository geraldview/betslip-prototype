/**
 * Created by Gary on 10/17/2015.
 */
angular.module('myApp.betslip.bet.bet-directive', ['myApp.betslip.bet.bet-controller'])
    .directive('bet', function() {
        return {
            restrict: 'E',
            scope: {bet: '='},
            controller: 'BetCtrl',
            templateUrl: 'components/betslip/bet/bet-directive.html'
        };
    });
