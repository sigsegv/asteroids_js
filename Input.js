/*jslint devel: true, bitwise: true */
/*global document, window, PlayerShip */

var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    
    ns.KeyCode = {
        W: 0x57,
        A: 0x41,
        S: 0x53,
        D: 0x44,
        Q: 0x51,
        E: 0x45,
        T: 0x54,
        Space: 0x20,
        Escape: 0x1B
    };
    
    ns.input = function (proto, spec) {
        var that, keysPressed, keysDown, keysUp;
        
        that = Object.create(proto || {});
        
        keysPressed = {};
        keysDown = {};
        keysUp = {};
        
        function filterInput(keyCode) {
            // some key events come lower case, but to support DOM_VK_X we make lower case
            if (keyCode > 0x60 && keyCode < 0x7B) {
                return keyCode & 0xDF;
            }
            return keyCode;
        }
        
        function onKeyDown(event) {
            //console.log('keyDown');
            var k = filterInput(event.which);
            delete keysUp[k];
            keysDown[k] = true;
            keysPressed[k] = true;
        }
        
        function onKeyUp(event) {
            //console.log('keyUp');
            var k = filterInput(event.which);
            keysUp[k] = k;
            delete keysDown[k];
            delete keysPressed[k];
        }
        
        function onKeyPress(event) {
            var k = filterInput(event.which);
            keysPressed[k] = true;
            if (!keysDown.hasOwnProperty(k)) {
                keysDown[k] = true;
            }
        }
        
        that.onBlur = function () {
            keysPressed = {};
            keysDown = {};
            keysUp = {};
        };
        
        that.onFocus = function () {
            keysPressed = {};
            keysDown = {};
            keysUp = {};
        };
        
        if (spec && spec.root) {
            spec.root.addEventListener('keydown', onKeyDown);
            spec.root.addEventListener('keyup', onKeyUp);
            //spec.root.addEventListener('keypress', onKeyPress);
        }
        
        that.getKey = function (keyCode) {
            var k = filterInput(keyCode);
            return keysPressed[k];
        };
        
        that.getKeyDown = function (keyCode) {
            var k = filterInput(keyCode);
            return keysDown[k];
        };
        
        that.getKeyUp = function (keyCode) {
            var k = filterInput(keyCode);
            return keysUp[k];
        };
            
        that.framePre = function () {
            
        };
        
        that.framePost = function () {
            //keysPressed = {};
            keysDown = {};
            keysUp = {};
        };
        
        return that;
    };
}(Dwarf));