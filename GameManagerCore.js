/*jslint devel: true */
/*global Transform, gameObject */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";

    ns.gameManagerCore = function (proto) {
        var that, asteroids, level;
        asteroids = null;
        level = 0;
        
        that = Object.create(ns.component(proto));
        
        that.update = function () {
            var index, num_asteroids;
            if (ns.Asteroid.num_asteroids === 0) {
                level = level + 1;
                num_asteroids = level + 3;
                ns.Asteroid.max_velocity = 50.0 + (50.0 * level);
                for (index = 0; index < num_asteroids; index += 1) {
                    ns.Asteroid.createLarge();
                }
            }
        };
        
        return that;
    };
}(Dwarf));