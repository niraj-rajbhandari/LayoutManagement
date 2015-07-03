(function () {
    "use strict";
    angular.module("LayoutManagement").controller("SettingsController", SettingsController);
    SettingsController.$inject = ["$scope", "$rootScope", "$location", "LayoutFactory"];
    function SettingsController($scope, $rootScope, $location, LayoutFactory) {
        $scope.user = {
            selectedLayouts: LayoutFactory.getSelectedLayouts()
        };
        console.log($scope.user.selectedLayouts);
    }
})();