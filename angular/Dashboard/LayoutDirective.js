;(function(){
    "use strict";
    angular.module("LayoutManagement").directive("setLayout",setLayoutDirective);
    function setLayoutDirective(){
        var directive={};
        directive.restrict="A";
        directive.templateUrl="angular/Dashboard/views/layout-template.html";
        directive.link=function(scope,element,attrs,ngModel){
            var layoutKeyValue=attrs.setLayout;
            scope.selectedLayout=scope.layouts[layoutKeyValue];
        }

        return directive;

    }
})();
