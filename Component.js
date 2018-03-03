/*jslint devel: true */
/*global Transform*/

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";

    ns.component = function (proto) {
        var that;

        that = Object.create(proto || {});
        
        that.gameObject = null;
        that.setGameObject = function (gameObject) {
            that.gameObject = gameObject;
        };
        that.id = '';
        that.enabled = true;
        
        that.update = function () {
            console.log('Component.update');
        };
        
        this.lateUpdate = function () {
            console.log('GameObject.lateUpdate');
        };
        /*
        this.fixedUpdate = function () {
            console.log('GameObject.fixedUpdate');
        };*/
        
        that.start = function () {
            console.log('Component.start');
        };
        
        that.onCollisionEnter2D = function () {
            console.log('onCollisionEnter2D ' + that.gameObject.name);
        };
        
        return that;
    };
}(Dwarf));