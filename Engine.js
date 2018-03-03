/*jslint devel: true */
/*global PlayerShip, window, GameObject*/
var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    
    console.log(ns + '.Engine');
    
    ns.Engine = function (spec) {
        var that, gameObject, playerShip, time, timespec, root, canvas, ctx, visitComponents, visitBody, gameObjects;
        
        that = this;
        root = spec.root;
        canvas = spec.canvas;
        that.canvas = canvas;
        gameObjects = [];
        
        //gameObject = ns.gameObject();
        ctx = ns.Engine.prototype.ctx = spec.canvas.getContext('2d');
        
        console.log('CTOR Engine');
        
        visitComponents = function (gameObject, method) {
            var components;
            if (gameObject) {
                components = gameObject.getComponents();
                components.forEach(function (component, obj) {
                    if (component.enabled) {
                        component[method]();
                    }
                });
            }
        };
        
        visitBody = function (gameObject) {
            if (gameObject && gameObject.rigidBody2D) {
                gameObject.rigidBody2D.update();
            }
        };
        
        that.rect = function () {
            return ns.rect(0, 0, canvas.width, canvas.height);
        };
        
        that.outOfBounds = function (transform) {
            return !that.rect().contains(transform);
        };
        
        that.add = function (gameObject) {
            if (gameObjects.indexOf(gameObject) === -1) {
                gameObjects.push(gameObject);
            }
        };
        
        that.remove = function (gameObject) {
            var index = gameObjects.indexOf(gameObject);
            if (index > -1) {
                gameObjects.splice(index, 1);
            }
        };
        
        this.initImpl = function () {
            ns.Time = ns.time();
            ns.CollisionSystem = ns.collisionSystem();
            ns.Input = ns.input(null, {'root': root, 'canvas': canvas});
            
            playerShip = ns.playerShip();
            playerShip.transform.x = canvas.width / 2.0;
            playerShip.transform.y = canvas.height / 2.0;
            playerShip.transform.rotation = Math.PI;
            
            that.add(playerShip);
            
            that.add(ns.gameManager());
        };
        
        this.startImpl = function () {
            ns.Time.start();
            
            gameObjects.forEach(function (gameObject, index) {
                visitComponents(gameObject, 'start');
            });
        };
        
        this.updateImpl = function () {
            var components, gameObjs;
            gameObjs = [];
            gameObjects.forEach(function (gameObject, index) {
                gameObjs.push(gameObject);
            });
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ns.Input.framePre();
            ns.Time.update();
            // update components
            gameObjs.forEach(function (gameObject, index) {
                visitComponents(gameObject, 'update');
            });
            // move bodies
            gameObjs.forEach(function (gameObject, index) {
                visitBody(gameObject);
            });
            ns.CollisionSystem.update();
            // render
            gameObjs.forEach(function (gameObject, index) {
                if (gameObject.visible) {
                    gameObject.draw();
                }
            });
            ns.Input.framePost();
            ctx.restore();
        };
        
    };
    
    ns.Engine.prototype.init = function () {
        this.initImpl();
    };
    
    ns.Engine.prototype.start = function () {
        this.startImpl();
    };
    
    ns.Engine.prototype.update = function () {
        this.updateImpl();
    };
    
    ns.Engine.prototype.onBlur = function () {
        ns.Input.onBlur();
    };
    
    ns.Engine.prototype.onFocus = function () {
        ns.Input.onFocus();
    };
    
    ns.Engine.prototype.ctx = null;
    
//    ns.Engine.prototype.add = function (canvas) {
//        if (!canvas) {
//            console.log('adding null canvas to display');
//        }
//        this.addImpl(canvas);
//    };
    
    ns.Engine.instance = null;
    
}(Dwarf));