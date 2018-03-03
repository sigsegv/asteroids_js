/*jslint devel: true */
/*global PlayerShip */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    
    ns.time = function () {
        var that, lastTime;
        that = ns.gameObject();
        lastTime = null;
        
        /**
         * The time in seconds it took to complete the last frame 
         */
        that.deltaTime = 0.0;
        
        that.start = function () {
            lastTime = Date.now();
        };
        
        that.update = function () {
            var thisTime = Date.now();
            that.deltaTime = (thisTime - lastTime) / 1000.0; // ms to s
            //console.log('seconds ' + that.deltaTime.toFixed(4));
            lastTime = thisTime;
        };
        
        return that;
    };
    
}(Dwarf));