/*jslint devel: true */
/*global Transform, gameObject */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";

    ns.asteroidCore = function (proto) {
        var that;
        
        that = Object.create(ns.component(proto));
        
        that.name = 'asteroidCore';
        
        that.start = function () {
            
        };
        
        that.update = function () {
            
        };
        
        that.onCollisionEnter2D = function (collision2D) {
            ns.Asteroid.free(that.gameObject);
        };
        
        return that;
    };
}(Dwarf));