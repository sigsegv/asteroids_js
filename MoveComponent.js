/*jslint devel: true */
/*global Transform*/

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";

    ns.moveComponent = function (proto) {
        var that;

        that = Object.create(proto || {});
        
        that.gameObject = null;
        
        that.update = function () {
            console.log('MoveComponent.update');
        };
        
        this.lateUpdate = function () {
            console.log('MoveComponent.lateUpdate');
        };
        /*
        this.fixedUpdate = function () {
            console.log('GameObject.fixedUpdate');
        };*/
        
        that.start = function () {
            console.log('MoveComponent.start');
        };
        
        return that;
    };
}(Dwarf));