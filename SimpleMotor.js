/*jslint devel: true */
/*global document, PlayerShip */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    ns.simpleMotor = function (proto) {
        var that;
        
        that = Object.create(ns.component(proto));
        
        that.velocity = {x: 0.0, y: 0.0};
        that.angularRotation = 0.0;
        
        that.update = function () {
            if(that.gameObject) {
                // rotate
                dr = dt * that.angularRotation;
                if (!positive) {
                    dr *= -1.0;
                }
                that.transform.rotation += dr;
                // move
                var dt, dx, dy, dr;
                dt = ns.Time.deltaTime;
                dx = dt * velocity_x;
                dy = dt * velocity_y;
                that.transform.x += dx;
                that.transform.y += dy;
            }
        };
        
        return that;
    };
}(Dwarf));