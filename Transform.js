/*jslint devel: true */
/*global PlayerShip */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    ns.transform = function (proto) {
        var that;
        
        that = Object.create(proto || {});
        
        that.x = 0.0;
        that.y = 0.0;
        that.rotation = 0.0;
        //that.children = [];
        that.id = 'transform #' + (Math.random() * 100.0).toFixed(0);
        
        return that;
    };
}(Dwarf));