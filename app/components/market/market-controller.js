/**
 * Created by Gary on 10/17/2015.
 */
angular.module('myApp.market.market-controller', ['myApp.betslip.bet-service'])
    .controller('MarketCtrl', ['$scope', '$rootScope', 'betService', function($scope, $rootScope, betService) {
        $scope.market = {
            id: 1,
            name: 'Geelong v Hawthorn Correct Scores',
            dateTime: '2015-10-20 15:00:00',
            status: 'Open'
        };

        $scope.availableBets = [
            {id: 1, name: '1-0', price: 2.00, cost: ''},
            {id: 2, name: '2-1', price: 3.00, cost: ''},
            {id: 3, name: '3-2', price: 4.00, cost: ''},
            {id: 4, name: '4-3', price: 5.00, cost: ''},
            {id: 5, name: '5-4', price: 3.50, cost: ''},
            {id: 6, name: '3-1', price: 2.50, cost: ''},
            {id: 7, name: '1-1', price: 1.60, cost: ''},
            {id: 8, name: '2-2', price: 12.00, cost: ''},
            {id: 9, name: '4-2', price: 21.00, cost: ''},
            {id: 10, name: '5-3', price: 25.00, cost: ''}
        ];

        $scope.addToBetslip = function(bet) {
            delete bet.cost;
            delete $scope.betPlaced;
            !!betService.getBets().find(function(b) { return b.id === bet.id; }) ?
            betService.removeBet(bet) : betService.addBet(bet);
        };

        $scope.betInSlip = function(bet) {
            return betService.betInSlip(bet.id);
        };

        $scope.addAll = function() {
            if (!!betService.getBets().length) { betService.clearBets(); return; }
            $scope.availableBets.forEach(function(b) {
                $scope.addToBetslip(b);
            });
        };

        $scope.betslipHasSomething = function() {
            return !!betService.getBets().length;
        };

        $rootScope.$on('BET_PLACED', function(scope, data) {
            $scope.betPlaced = data;
        });
    }]);
