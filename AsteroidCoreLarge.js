/*jslint devel: true */
/*global Transform, gameObject */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";

    ns.asteroidCoreLarge = function (proto) {
        var that;
        
        that = Object.create(ns.component(proto));
        
        that.id = 'asteroidCoreLarge';
        
        that.start = function () {
            
        };
        
        that.update = function () {
            
        };
        
        that.onCollisionEnter2D = function (collision2D) {
            var asteroid = ns.Asteroid.createSmall();
            asteroid.transform.x = that.gameObject.transform.x + 21.0;
            asteroid.transform.y = that.gameObject.transform.y + 21.0;
            asteroid.rigidBody2D.velocity.x = that.gameObject.rigidBody2D.velocity.x + 10.0;
            asteroid.rigidBody2D.velocity.y = that.gameObject.rigidBody2D.velocity.y + 10.0;
            asteroid = ns.Asteroid.createSmall();
            asteroid.transform.x = that.gameObject.transform.x - 21.0;
            asteroid.transform.y = that.gameObject.transform.y - 21.0;
            asteroid.rigidBody2D.velocity.x = that.gameObject.rigidBody2D.velocity.x - 10.0;
            asteroid.rigidBody2D.velocity.y = that.gameObject.rigidBody2D.velocity.y - 10.0;
            asteroid = ns.Asteroid.createSmall();
            asteroid.transform.x = that.gameObject.transform.x;
            asteroid.transform.y = that.gameObject.transform.y;
            asteroid.rigidBody2D.velocity.x = that.gameObject.rigidBody2D.velocity.x;
            asteroid.rigidBody2D.velocity.y = that.gameObject.rigidBody2D.velocity.y;
            ns.Asteroid.free(that.gameObject);
        };
        
        return that;
    };
}(Dwarf));