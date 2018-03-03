/*global document */
/*jslint devel: true */
var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    
    ns.gameManager = function () {
        var that;
        
        that = ns.gameObject();
        that.name = 'GameManager';

        that.addComponent(ns.gameManagerCore());
        
        that.visible = false;
        
        return that;
        
    };
    
}(Dwarf));