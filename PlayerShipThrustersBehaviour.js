/*jslint devel: true */
/*global Transform*/

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";

    ns.playerShipThrustersBehaviour = function (proto) {
        var that, main_thruster, port_thruster, starboard_thruster, retro_thrusters;
        that = Object.create(proto);
        
        main_thruster = port_thruster = starboard_thruster = retro_thrusters = false;
        
        that.start = function () {
            
        };
        
        that.update = function () {
            main_thruster = ns.Input.getKey(ns.KeyCode.W));
            port_thruster = ns.Input.getKey(ns.KeyCode.A));
            retro_thrusters = ns.Input.getKey(ns.KeyCode.S));
            starboard_thruster = ns.Input.getKey(ns.KeyCode.D));
        };
        
        return that;
    };
}(Dwarf));