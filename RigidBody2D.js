/*jslint devel: true */
/*global document, PlayerShip */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    ns.rigidBody2D = function (proto) {
        var that;
        
        that = Object.create(proto || {});
        
        that.velocity = {x: 0.0, y: 0.0};
        that.angularRotation = 0.0;
        that.gameObject = null;
        that.setGameObject = function (gameObject) {
            that.gameObject = gameObject;
        };
        
        that.update = function () {
            var dr, dt, dx, dy;
            dt = ns.Time.deltaTime;
            //console.log('vel x: ' + that.velocity.x.toFixed(2) + ' y: ' + that.velocity.y.toFixed(2)
            //            + ' rot: ' + that.angularRotation.toFixed(2));
            // rotate
            dr = dt * that.angularRotation;
            that.gameObject.transform.rotation += dr;
            // move
            dt = ns.Time.deltaTime;
            dx = dt * that.velocity.x;
            dy = dt * that.velocity.y;
            that.gameObject.transform.x += dx;
            that.gameObject.transform.y += dy;
        };
        
        return that;
    };
}(Dwarf));