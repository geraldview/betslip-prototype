/**
 * Created by Gary on 10/17/2015.
 */
angular.module('myApp.betslip.betslip-controller', [])
    .controller('BetslipCtrl', ['$scope', '$rootScope', 'betService', function($scope, $rootScope, betService) {
        $scope.getBets = function() {
            return betService.getBets();
        };

        $scope.resetBetslip = function() {
            betService.clearBets();
        };

        $scope.totalCost = function() {
            return (betService.getBets().reduce(function(total, bet) {
                total += parseFloat(bet.cost || 0);
                return total;
            }, 0) || 0).toFixed(2);
        };

        $scope.placeBets = function() {
            $rootScope.$emit('BET_PLACED', betService.getBets());
            betService.clearBets();
        };
    }]);