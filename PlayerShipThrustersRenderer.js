/*jslint devel: true */
/*global document, PlayerShip */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    ns.playerShipThrustersRenderer = function () {
        var that;
        
        that = Object.create(ns.renderer());
        
        that.draw = function () {
            var ctx, h_width, h_height;
            ctx = that.ctx;
            h_width = 8.0;
            h_height = 16.0;
            ctx.save();
            //if (gameObject.main_th
            ctx.transform(1, 0, 0, 1, that.gameObject.transform.x, that.gameObject.transform.y);
            ctx.rotate(that.gameObject.transform.rotation);
            ctx.fillStyle = 'rgb(255,0,255)';
            ctx.beginPath();
            ctx.moveTo(0, h_height);
            ctx.lineTo(h_width, -h_height);
            ctx.lineTo(0.0, -h_height / 2.0);
            ctx.lineTo(-h_width, -h_height);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        };
        
        return that;
    };
}(Dwarf));