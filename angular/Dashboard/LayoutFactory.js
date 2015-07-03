;
(function () {
    "use strict";

    var selectedLayouts=[];

    LayoutFactory.$inject=["$localStorage"];
    angular.module("LayoutManagement").factory("LayoutFactory", LayoutFactory);
    function LayoutFactory($localStorage) {

        var LayoutServices = {};

        /**
         * Get count of object property
         * @param objectToBeCounted
         * @returns {Number}
         */
        LayoutServices.getObjectCount = function (objectToBeCounted) {
            return Object.keys(objectToBeCounted).length;
        };
        /**
         * Parse child
         * @param info
         * @param children
         * @param iteration
         * @returns {*}
         */
        LayoutServices.test = function (info, children,iteration) {
            var startSeparator,endSeparator;
            switch(parseInt(iteration,10)){
                case 0:
                    startSeparator="{";
                    endSeparator="}";
                    break;
                case 1:
                    startSeparator="(";
                    endSeparator=")";
                    break;
                default :
                    startSeparator="[";
                    endSeparator="]";
            }
            info.hasChild = false;
            var noOfChildren = LayoutServices.getObjectCount(children);
            angular.forEach(children, function (v, k) {
                this.divHierarchy = this.divHierarchy + startSeparator + v.className;
                if (v.hasOwnProperty("child")) {
                    this.hasChild = true;
                    iteration++;
                    LayoutServices.test(this, v.child,iteration);
                } else {
                    this.divHierarchy = this.divHierarchy + endSeparator;
                }
            }, info);
            if (!info.hasChild) {
                info.divHierarchy = info.divHierarchy + "]";
                return info;
            }


        };
        LayoutServices.addSelectedLayout=function(layout){
            selectedLayouts.push(layout);
            $localStorage.selectedLayouts.push(layout);
        }
        LayoutServices.getSelectedLayouts=function(){
            return selectedLayouts;
        }
        LayoutServices.resetSelectedLayouts=function(selectedLayoutsList){
            selectedLayouts=selectedLayoutsList;
        }
        return LayoutServices
    }

})();