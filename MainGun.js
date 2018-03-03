/*jslint devel: true */
/*global Transform, gameObject */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";

    ns.mainGun = function () {
        var that, rechargeRate, recharge, fire, velocity;
        
        that = Object.create(ns.component());
        
        rechargeRate = 0.75; // seconds
        recharge = null;
        velocity = 300.0;
        
        fire = function () {
            var projectile, rotation, playerShipHalfHeight;
            playerShipHalfHeight = 16.0;
            if (recharge === null) {
                projectile = ns.Photon.create();
                
                rotation = that.gameObject.transform.rotation;
                projectile.rigidBody2D.velocity.x = Math.sin(-rotation) * velocity + that.gameObject.rigidBody2D.velocity.x;
                projectile.rigidBody2D.velocity.y = Math.cos(rotation) * velocity + that.gameObject.rigidBody2D.velocity.x;
                projectile.transform.x = (Math.sin(-rotation) * (playerShipHalfHeight + 5.0)) + that.gameObject.transform.x;
                projectile.transform.y = (Math.cos(rotation) * (playerShipHalfHeight + 5.0)) + that.gameObject.transform.y;
                
                recharge = rechargeRate;
            }
        };
        
        that.recharging = false;
        
        that.update = function () {
            if (recharge !== null) {
                recharge -= ns.Time.deltaTime;
                if (recharge <= 0.0) {
                    recharge = null;
                }
            }
            if (ns.Input.getKeyUp(ns.KeyCode.Space)) {
                //console.log('fire');
                fire();
            }
            that.recharging = recharge !== null;
        };
        
        that.capacitor = function () {
            if (recharge === null) {
                return 1.0;
            } else {
                return recharge / rechargeRate;
            }
        };
        
        return that;
    };
    
}(Dwarf));