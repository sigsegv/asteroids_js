/*jslint devel: true */
/*global document, PlayerShip */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    ns.renderer = function (proto) {
        var that;
        
        that = Object.create(proto || {});
        
        that.ctx = ns.Engine.instance.ctx;
        
        that.draw = null;
        
        that.visible = true;
        
        that.draw = function () {
            console.log('Renderer.draw');
        };
        
        return that;
    };
}(Dwarf));