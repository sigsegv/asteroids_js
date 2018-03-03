/*jslint devel: true */
/*global document, PlayerShip */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    ns.collisionSystem = function () {
        var that, colliders, collision;
        
        colliders = [];
        
        collision = function (collider1, collider2) {
            // only supports circle colliders...
            var distance, dx, dy;
            dx = (collider1.center.x + collider1.gameObject.transform.x) - (collider2.center.x + collider2.gameObject.transform.x);
            dy = (collider1.center.y + collider1.gameObject.transform.y) - (collider2.center.y + collider2.gameObject.transform.y);
            distance = Math.sqrt(dx * dx + dy * dy);
            return distance < (collider1.radius + collider2.radius);
        };
        
        that = Object.create({});
        
        that.add = function (collider) {
            if (null !== collider) {
                colliders.push(collider);
            }
        };
        
        that.remove = function (collider) {
            if (null !== collider) {
                colliders.remove(collider);
            }
        };
        
        that.update = function () {
            var dt, tempColliders;
            if (colliders.length < 2) {
                return;
            }
            tempColliders = colliders.clone();
            dt = ns.Time.deltaTime;
            tempColliders.forEach(function (collider, index, arr) {
                var other_index, intersect, other;
                for (other_index = index + 1; other_index < tempColliders.length; other_index += 1) {
                    if (other_index !== index) {
                        other = tempColliders[other_index];
                        intersect = collision(collider, other);
                        if (intersect) {
                            console.log('collision between ' + collider.gameObject.name + ' and ' + other.gameObject.name);
                            collider.onCollisionEnter2D({ 'gameObject' : other.gameObject });
                            other.onCollisionEnter2D({ 'gameObject' : collider.gameObject });
                        }
                    }
                }
            });
        };
        
        return that;
    };
    
    ns.CollisionSystem = null;
}(Dwarf));