/*global document */
/*jslint devel: true */
var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    
    ns.asteroid = function () {
        var that;
        
        that = ns.gameObject();
        that.name = 'Asteroid';
        that.active = true;
        that.radius = 14.0;
        that.color = 'rgb(128,128,256)';
        
        that.addComponent(ns.wrapAround());
        that.setRigidBody2D(ns.rigidBody2D());
        that.setCollider2D(ns.circleCollider2D());
        that.collider2D.radius = that.radius;
        
        that.draw = function () {
            var ctx, sides, x, y, angle;
            ctx = ns.Engine.instance.ctx;
            ctx.save();
            ctx.transform(1, 0, 0, 1, this.transform.x, this.transform.y);
            ctx.rotate(this.transform.rotation);
            ctx.fillStyle = that.color;
            ctx.beginPath();
            ctx.arc(0, 0, that.radius, 0, Math.PI2);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        };
        
        return that;
    };
    
    ns.Asteroid = {};
    ns.Asteroid.asteroids = [];
    ns.Asteroid.num_asteroids = 0;
    ns.Asteroid.max_velocity = 200.0;
    
    ns.Asteroid.createImpl = function () {
        var asteroid, max_x, max_y, max_velocity;
        asteroid = null;
        ns.Asteroid.asteroids.some(function (a, index) {
            if (!a.active) {
                asteroid = a;
                asteroid.active = true;
                return true;
            }
            return false;
        });
        if (!asteroid) {
            asteroid = ns.asteroid();
            ns.Asteroid.asteroids.push(asteroid);
        }
        
        max_x = ns.Engine.instance.rect().width;
        max_y = ns.Engine.instance.rect().height;
        max_velocity = ns.Asteroid.max_velocity;
        
        asteroid.name = 'Asteroid #' + (Math.random() * 100.0).toFixed(0);
        asteroid.transform.x = (Math.random()) * max_x;
        asteroid.transform.y = (Math.random()) * max_y;
        asteroid.rigidBody2D.angularRotation = 0.0;
        asteroid.rigidBody2D.velocity.x = (Math.random() - 0.5) * max_velocity;
        asteroid.rigidBody2D.velocity.y = (Math.random() - 0.5) * max_velocity;
        ns.CollisionSystem.add(asteroid.collider2D);
        ns.Engine.instance.add(asteroid);
        ns.Asteroid.num_asteroids = ns.Asteroid.num_asteroids + 1;
        return asteroid;
    };
    
    ns.Asteroid.createSmall = function () {
        var asteroid = ns.Asteroid.createImpl();
        asteroid.addComponent(ns.asteroidCore());
        asteroid.collider2D.radius = asteroid.radius = 7.0;
        asteroid.color = 'rgb(128,128,0)';
        return asteroid;
    };
    
    ns.Asteroid.createLarge = function () {
        var asteroid = ns.Asteroid.createImpl();
        asteroid.addComponent(ns.asteroidCoreLarge());
        asteroid.collider2D.radius = asteroid.radius = 21.0;
        asteroid.color = 'rgb(128,128,256)';
        return asteroid;
    };
    
    ns.Asteroid.free = function (asteroid) {
        if (asteroid) {
            asteroid.active = false;
            asteroid.removeComponent('asteroidCore');
            asteroid.removeComponent('asteroidCoreLarge');
            ns.CollisionSystem.remove(asteroid.collider2D);
            ns.Engine.instance.remove(asteroid);
            ns.Asteroid.num_asteroids = ns.Asteroid.num_asteroids - 1;
        }
    };
    
}(Dwarf));