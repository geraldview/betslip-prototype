/**
 * Created by Gary on 10/17/2015.
 */
angular.module('myApp.betslip.bet-service', []).factory('betService', function() {
    var bets = [], multiBets = [],
        combinCal = function(a, b) {
            if (a <= b) { return 1; }
            var arr1 = [], arr2 = [], dividor, dividend;
            var i = 0; while (i <= b - 1) { arr1.push(a - i); i++; }
            for (var j = b; j >= 1; j--) { arr2.push(j); }

            dividend = arr1.reduce(function(total, i) { total *= i; return total; }, 1);
            dividor  = arr2.reduce(function(total, i) { total *= i; return total; }, 1);

            console.log(a, b, dividend, dividor);
            return parseInt(dividend / dividor);
        },
        multiCalc = function() {
            multiBets = [];
            var multiNames = {2: 'Double', 3: 'Treble'};
            var totalBets = bets.length;
            if (totalBets < 2) { return; }
            for (var i = totalBets; i >= 2; i--) {
                var multi = {
                    name: (multiNames[i] || i + ' fold'),
                    combin: combinCal(totalBets, i),
                    price: i === totalBets ?
                        bets.reduce(function(total, b) { total *= b.price; return total; }, 1)
                        : null
                };
                multiBets.push(multi);
            }
        };

    return {

        addBet: function(bet) {
            bets.push(bet);
            multiCalc();
        },
        removeBet: function(bet) {
            bets = bets.filter(function(b) {
                return b.id === bet.id ? null : b;
            });
            multiCalc();
        },
        clearBets: function() {
            bets = [];
            multiBets = [];
        },
        getBets: function() {
            return bets.sort(function(a, b) { return a.id < b.id ? -1 : 1; });
        },
        betInSlip: function(id) {
            return !!bets.find(function(b) { return b.id === id; });
        },
        getMultiBets: function() {   console.log(multiBets);
            return multiBets;
        }
    };
});