/*jslint devel: true */
/*global Transform, gameObject */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";

    ns.photonCore = function () {
        var that, rotate, thrust, angularRotation, prograde, retrograde, outOfBounds, reposition;
        
        that = Object.create(ns.component());
        
        that.start = function () {
            
        };
        
        that.update = function () {
            if (ns.Engine.instance.outOfBounds(that.gameObject.transform)) {
                ns.Engine.instance.remove(that.gameObject);
                ns.Photon.free(that.gameObject);
            }
        };
        
        that.onCollisionEnter2D = function (collision2D) {
            if (collision2D.gameObject.name !== 'PlayerShip') {
                ns.Photon.free(that.gameObject);
            }
        };
        
        return that;
    };
}(Dwarf));