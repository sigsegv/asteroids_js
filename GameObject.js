/*jslint devel: true */
/*global Transform*/

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    
    ns.gameObject = function (proto) {
        var that, components;
        
        that = Object.create(proto || {});
        
        components = [];
        
        that.transform = ns.transform();
        that.visible = true;
        that.name = 'GameObject';
        //that.motor = null;
        that.rigidBody2D = null;
        that.collider2D = null;
        
        that.toString = function () {
            return this.name + ' ' + this.transform.id + ' x: ' + this.transform.x.toFixed(2) + ' y: ' + this.transform.y.toFixed(2);
        };
        
        that.addComponent = function (component) {
            components.push(component);
            component.setGameObject(that);
        };
        
        that.removeComponent = function (id) {
            components.some(function (component, index) {
                if (component.id === id) {
                    component.setGameObject(null);
                    components.splice(index, 1);
                    return true;
                }
                return false;
            });
        };
        
        that.getComponents = function () {
            return components.clone();
        };
        
        that.setRigidBody2D = function (rigidBody2D) {
            this.rigidBody2D = rigidBody2D;
            rigidBody2D.setGameObject(this);
        };
        
        that.setCollider2D = function (collider2D) {
            that.collider2D = collider2D;
            collider2D.setGameObject(that);
        };
        
        return that;
    };
    
    ns.GameObject = {
        factory : function (proto) {
            var gameObject = ns.gameObject(proto || {});
            gameObject.transform = ns.transform();
            return gameObject;
        }
    };
    
}(Dwarf));