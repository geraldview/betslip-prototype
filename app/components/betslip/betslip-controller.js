/**
 * Created by Gary on 10/17/2015.
 */
angular.module('myApp.betslip.betslip-controller', [])
    .controller('BetslipCtrl', ['$scope', '$rootScope', 'betService', function($scope, $rootScope, betService) {
        $scope.getBets = function() {
            return betService.getBets();
        };

        $scope.getMultiBets = function() {
            return betService.getMultiBets();
        };

        $scope.resetBetslip = function() {
            betService.clearBets();
        };

        $scope.totalCost = function() {
            var single = (betService.getBets().reduce(function(total, bet) {
                total += parseFloat(bet.cost || 0);
                return total;
            }, 0) || 0),
            multi = (betService.getMultiBets().reduce(function(total, bet) {
                total += parseFloat(bet.cost || 0) * bet.combin;
                return total;
            }, 0) || 0);

            return {single: single.toFixed(2), multi: multi.toFixed(2), total: (single + multi).toFixed(2)};
        };

        $scope.placeBets = function() {
            $rootScope.$emit('BET_PLACED', betService.getBets());
            betService.clearBets();
        };
    }]);