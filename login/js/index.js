angular
    .module('App', ['ngMaterial'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('grey')
            .accentPalette('blue');
    })
    .controller('AppCtrl', function($scope, $mdSidenav) {
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };
    });
