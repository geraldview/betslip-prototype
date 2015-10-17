/**
 * Created by Gary on 10/17/2015.
 */
angular.module('myApp.market.market-directive', ['myApp.market.market-controller'])
    .directive('market', function() {
        return {
            restrict: 'E',
            scope: {},
            controller: 'MarketCtrl',
            templateUrl: 'components/market/market-directive.html'
        };
    });