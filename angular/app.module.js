;(function(){
    "use strict";
    angular.module("LayoutManagement",["ngRoute","ngStorage","ui.bootstrap.tpls","ui.bootstrap.accordion","checklist-model"]);
    angular.module("LayoutManagement").config(configuration);
    configuration.$inject=["$routeProvider"];
    function configuration($routeProvider){
        $routeProvider.when('/',{
            "controller":"DashboardController",
            "templateUrl":"angular/Dashboard/views/dashboard.html"
        }).when('/settings',{
            "controller":"SettingsController",
            "templateUrl":"angular/Settings/views/settings.html"
        }).otherwise({
           redirectTo:'/'
        });
    }
    angular.module("LayoutManagement").run(run);
    run.$inject=["$rootScope","$location","$localStorage","LayoutFactory","CONSTANT"];
    function run($rootScope,$location,$localStorage,LayoutFactory,CONSTANT){

        if(typeof $localStorage.user !==CONSTANT.UNDEFINED){
            LayoutFactory.resetSelectedLayouts($localStorage.user.selectedLayouts);
        }else{
            $localStorage.selectedLayouts=[];
        }
        console.log(LayoutFactory.getSelectedLayouts());
    }
})();