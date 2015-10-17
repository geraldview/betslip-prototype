/**
 * Created by Gary on 10/17/2015.
 */
angular.module('myApp.betslip.bet.bet-controller', [])
    .controller('BetCtrl', ['$scope', 'betService', function($scope, betService) {
        $scope.addBet = function(bet) {
            betService.addBet(bet);
        };
        $scope.removeBet = function(bet) {
            betService.removeBet(bet);
        };
    }]);
