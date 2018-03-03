/*jslint devel: true */
/*global Transform, gameObject */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";

    ns.playerShipCore = function (proto) {
        var that, rotate, thrust, angularRotation, prograde, retrograde, outOfBounds, reposition, health;
        
        that = Object.create(ns.component(proto));
        
        angularRotation = Math.PI1_2; // 5.0
        prograde = 2.0; // 75
        retrograde = 1.0; // 15
        health = 3;
        
        that.main_thruster = that.port_thruster = that.starboard_thruster = that.retro_thruster = false;
        
        rotate = function (positive) {
            var dr;
            dr = angularRotation;
            if (!positive) {
                dr *= -1.0;
            }
            that.gameObject.rigidBody2D.angularRotation = dr;
        };
        
        thrust = function (progade_thrust) {
            var dx, dy, acc, magnitude;
            acc = progade_thrust ? prograde : -retrograde;
            magnitude = acc;
            dx = magnitude * -Math.sin(that.gameObject.transform.rotation);
            dy = magnitude * Math.cos(that.gameObject.transform.rotation);
            that.gameObject.rigidBody2D.velocity.x += dx;
            that.gameObject.rigidBody2D.velocity.y += dy;
        };
        
        that.start = function () {
            
        };
        
        that.onCollisionEnter2D = function (collision2D) {
            health = health - 1;
            if (health === 0) {
                console.log('Game Over!!!');
            }
        };
        
        that.update = function () {
            
            if (ns.Input.getKey(ns.KeyCode.W)) {
                //console.log('prograde');
                thrust(true);
            }
            if (ns.Input.getKeyDown(ns.KeyCode.A)) {
                //console.log('negative (ccw)');
                rotate(false);
            } else if (ns.Input.getKeyUp(ns.KeyCode.A)) {
                that.gameObject.rigidBody2D.angularRotation = 0.0;
            }
            if (ns.Input.getKey(ns.KeyCode.S)) {
                //console.log('retrograde');
                thrust(false);
            }
            if (ns.Input.getKeyDown(ns.KeyCode.D)) {
                //console.log('positive (cw)');
                rotate(true);
            } else if (ns.Input.getKeyUp(ns.KeyCode.D)) {
                that.gameObject.rigidBody2D.angularRotation = 0.0;
            }

            that.main_thruster = ns.Input.getKey(ns.KeyCode.W);
            that.port_thruster = ns.Input.getKey(ns.KeyCode.A);
            that.retro_thrusters = ns.Input.getKey(ns.KeyCode.S);
            that.starboard_thruster = ns.Input.getKey(ns.KeyCode.D);
        };
        
        return that;
    };
}(Dwarf));