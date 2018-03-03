/*jslint devel: true */
/*global Transform, gameObject */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";

    ns.wrapAround = function (proto) {
        var that;
        
        that = Object.create(ns.component(proto));
        
        that.start = function () {
            
        };
        
        that.update = function () {
            var playArea;
            if (ns.Engine.instance.outOfBounds(that.gameObject.transform)) {
                playArea = ns.Engine.instance.rect();
                if (that.gameObject.transform.x > playArea.xMax) {
                    that.gameObject.transform.x = playArea.xMin;
                } else if (that.gameObject.transform.x < playArea.xMin) {
                    that.gameObject.transform.x = playArea.xMax;
                }
                if (that.gameObject.transform.y > playArea.yMax) {
                    that.gameObject.transform.y = playArea.yMin;
                } else if (that.gameObject.transform.y < playArea.yMin) {
                    that.gameObject.transform.y = playArea.yMax;
                }
            }
        };
        
        return that;
    };
}(Dwarf));