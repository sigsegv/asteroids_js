/*jslint devel: true */
/*global document, PlayerShip */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    ns.circleCollider2D = function (proto) {
        var that;
        
        that = Object.create(ns.collider2D(proto));
        
        that.center = { x : 0.0, y : 0.0 };
        that.radius = 1.0;
        
//        that.onCollisionEnter2D = function () {
//            
//        };
//        
//        that.onCollisionExit2D = function () {
//            
//        };
//        
//        that.onCollisionStay2D = function () {
//            
//        };
        
//        that.update = function () {
//            
//        };
        
        return that;
    };
}(Dwarf));