/*global document */
/*jslint devel: true */
var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    
    ns.playerShip = function (proto) {
        var that;
        that = Object.create(proto);
        
        that.AddComponent(ns.playerShipCore(proto));
        
        return that;
        
    };
    
}(Dwarf));