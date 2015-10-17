/**
 * Created by Gary on 10/17/2015.
 */
angular.module('myApp.betslip.betslip-directive', ['myApp.betslip.betslip-controller'])
    .directive('betslip', function() {
        return {
            restrict: 'E',
            scope: {},
            controller: 'BetslipCtrl',
            templateUrl: 'components/betslip/betslip-directive.html'
        };
    });