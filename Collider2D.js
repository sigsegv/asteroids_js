/*jslint devel: true */
/*global document, PlayerShip */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    ns.collider2D = function () {
        var that;
        
        that = {};
        
        that.gameObject = null;
        that.setGameObject = function (gameObject) {
            that.gameObject = gameObject;
        };
        
        that.onCollisionEnter2D = function (collision2D) {
            var components = that.gameObject.getComponents();
            components.forEach(function (component) {
                component.onCollisionEnter2D(collision2D);
            });
        };
        
        that.onCollisionExit2D = function () {
            
        };
        
        that.onCollisionStay2D = function () {
            
        };
        
        that.update = function () {
            
        };
        
        return that;
    };
}(Dwarf));