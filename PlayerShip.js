/*global document */
/*jslint devel: true */
var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    
    ns.playerShip = function () {
        var that, playerShipCore, mainGun;
        
        that = ns.gameObject();
        that.name = 'PlayerShip';
        
        playerShipCore = ns.playerShipCore();
        that.addComponent(playerShipCore);
        that.setRigidBody2D(ns.rigidBody2D());
        mainGun = ns.mainGun();
        that.addComponent(mainGun);
        that.addComponent(ns.wrapAround());
        that.setCollider2D(ns.circleCollider2D());
        that.collider2D.radius = 16.0;
        ns.CollisionSystem.add(that.collider2D);
        
        that.draw = function () {
            var ctx, h_width, h_height;
            ctx = ns.Engine.instance.ctx;
            h_width = 8.0;
            h_height = 16.0;
            ctx.save();
            //console.log('x' + that.transform.x.toFixed(2) + ' y' + that.transform.y.toFixed(2));
            ctx.transform(1, 0, 0, 1, that.transform.x, that.transform.y);
            ctx.rotate(this.transform.rotation);
            ctx.fillStyle = 'rgb(255,0,255)';
            ctx.beginPath();
            ctx.moveTo(0, h_height);
            ctx.lineTo(h_width, -h_height);
            ctx.lineTo(0.0, -h_height / 2.0);
            ctx.lineTo(-h_width, -h_height);
            ctx.closePath();
            ctx.fill();
            if (playerShipCore.main_thruster) {
                ctx.save();
                ctx.fillStyle = 'rgb(255,0,0)';
                ctx.beginPath();
                ctx.moveTo(0.0, -h_height / 1.8);
                ctx.lineTo(h_width / 2.0, -h_height);
                ctx.lineTo(0.0, -h_height * 2.0);
                ctx.lineTo(-h_width / 2.0, -h_height);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
            /*if (port_thruster) {
                ctx.save();
                ctx.fillStyle = 'rgb(255,0,0)';
                ctx.beginPath();
                ctx.moveTo(h_width / 1.9, -h_height / 1.5);
                ctx.lineTo(h_width / 2.0, -h_height);
                ctx.lineTo(0.0, -h_height * 2.0);
                ctx.lineTo(-h_width / 2.0, -h_height);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }*/
            if (mainGun.recharging) {
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.beginPath();
                ctx.arc(0, 0, 2.0, 0, Math.PI2);
                ctx.closePath();
                ctx.fill();
            }
            ctx.restore();
        };
        
        //that.addComponent(ns.moveComponent());
        
        return that;
        
    };
    
}(Dwarf));