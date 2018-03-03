/*jslint devel: true */
/*global Transform, gameObject */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    
    ns.Photon = {};
    ns.Photon.photons = [];
    ns.Photon.create = function () {
        var photon = null;
        ns.Photon.photons.some(function (p, index) {
            if (!p.active) {
                photon = p;
                photon.active = true;
                return true;
            }
            return false;
        });
        if (!photon) {
            photon = ns.photon();
            ns.Photon.photons.push(photon);
        }
        ns.CollisionSystem.add(photon.collider2D);
        ns.Engine.instance.add(photon);
        return photon;
    };
    
    ns.Photon.free = function (photon) {
        if (photon) {
            ns.CollisionSystem.remove(photon.collider2D);
            photon.active = false;
            ns.Engine.instance.remove(photon);
        }
    };
    
    ns.photon = function (proto) {
        var that, photonCore, radius;
        
        that = ns.gameObject();
        that.name = 'Photon';
        radius = 5.0;
        console.log('new Photon');
        
        that.setRigidBody2D(ns.rigidBody2D());
        that.setCollider2D(ns.circleCollider2D());
        that.collider2D.radius = radius;
        that.addComponent(ns.photonCore());
        that.active = true;
        
        that.draw = function () {
            var ctx;
            ctx = ns.Engine.instance.ctx;
            ctx.save();
            ctx.transform(1, 0, 0, 1, that.transform.x, that.transform.y);
            ctx.rotate(this.transform.rotation);
            ctx.fillStyle = 'rgb(255,255,255)';
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI2);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        };
        
        return that;
    };
    
}(Dwarf));