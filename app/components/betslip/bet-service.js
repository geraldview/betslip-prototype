/**
 * Created by Gary on 10/17/2015.
 */
angular.module('myApp.betslip.bet-service', []).factory('betService', function() {
    var bets = [];
    return {
        addBet: function(bet) {
            bets.push(bet);
        },
        removeBet: function(bet) {
            bets = bets.filter(function(b) {
                return b.id === bet.id ? null : b;
            });
        },
        clearBets: function() {
           bets = [];
        },
        getBets: function() {
            return bets.sort(function(a, b) { return a.id < b.id ? -1 : 1; });
        },
        betInSlip: function(id) {
            return !!bets.find(function(b) { return b.id === id; });
        }
    };
});