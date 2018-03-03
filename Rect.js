/*jslint devel: true */
/*global document, PlayerShip */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    ns.rect = function (left, top, width, height) {
        var that;
        
        that = Object.create({});
        
        that.x = left || 0.0;
        that.y = top || 0.0;
        that.width = width || 0.0;
        that.height = height || 0.0;
        that.center = { 'x' : ((that.x + that.width) / 2.0), 'y' : ((that.y + that.height) / 2.0) };
        that.xMin = (that.width > 0.0) ? that.x : that.x + that.width;
        that.xMax = (that.width > 0.0) ? that.x + that.width : that.x;
        that.yMin = (that.height > 0.0) ? that.y : that.y + that.height;
        that.yMax = (that.height > 0.0) ? that.y + that.height : that.y;
        
        that.contains = function (vector) {
            var res = false;
            if (!vector) {
                return false;
            }
            res = vector.x > that.xMin && vector.x < that.xMax && vector.y > that.yMin && vector.y < that.yMax;
            return res;
        };
        
        return that;
    };
}(Dwarf));