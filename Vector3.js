/*jslint devel: true */
/*global */
/*
var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    
    ns.Vector3 = {};
    
    ns.vector3 = function (x, y, z) {
        var that;
        
        that = Object.create({});
        
        that.x = x || 0.0;
        that.y = y || 0.0;
        that.z = z || 0.0;
        
        that.magnitude = function () {
            return Math.sqrt(that.x * that.x + that.y * that.y + that.z * that.z);
        };
        
        that.normalized = function () {
            var mag = this.magnitude();
            return ns.vector3(this.x / mag, this.y / mag, this.z / mag);
        };
        
        that.dot = function (other) {
            
            return 0.0;
        };
        
        that.cross = function (other) {
            
            return this;
        };
        
        that.add = function (other) {
            var v = ns.Vector3.copy(this);
            v.x += other.x;
            v.y += other.y;
            v.z += other.z;
            return v;
        };
        
        that.subtract = function (other) {
            var v = ns.Vector3.copy(this);
            v.x -= other.x;
            v.y -= other.y;
            v.z -= other.z;
            return v;
        };
        
        that.toString = function () {
            return '<' + that.x.toFixed(2) + ', ' + that.y.toFixed(2) + ', ' + that.z.toFixed(2) + '>';
        };
        
        return that;
    };
    
    ns.Vector3.copy = function (other) {
        return ns.vector3(other.x, other.y, other.z);
    };
    
    ns.Vector3.test = function () {
        console.log('Vector3 Unit Test');
        console.log('Test Add');
        var v1, v2, v3, scalar;
        v1 = ns.vector3(1, 2, 3);
        v2 = ns.vector3(4, 5, 6);
        v3 = v1.add(v2);
        if (v3.x !== 5.0 || v3.y !== 7.0 || v3.z !== 9.0) {
            console.log('Failed Add');
        } else {
            console.log('Add Passed');
        }
        console.log('Test Subtract');
        v3 = v1.subtract(v2);
        if (v3.x !== -3.0 || v3.y !== -3.0 || v3.z !== -3.0) {
            console.log('Failed Subtract');
        } else {
            console.log('Passed Subtract');
        }
        console.log('Test Magnitude');
        scalar = v1.magnitude();
        console.log('magnitude should be ~3.74, and is ' + scalar.toFixed(2));
        console.log('Test Normal');
        v3 = v1.normalized();
        scalar = v3.magnitude();
        if (scalar !== 1.0 || v3.x !== 1.0 || v3.y !== 1.0 || v3.z !== 1.0) {
            console.log('Failed Normal');
        } else {
            console.log('Passed Normal');
        }
        console.log('Test Cross');
        console.log('Test Dot');
        scalar = v1.dot(v2);
        if (scalar !== 26.0) {
            console.log('Failed Dot');
        } else {
            console.log('Passed Dot');
        }
        console.log('Test Cross');
        v1 = ns.vector3(1.0, 2.0, 3.0);
        v1 = ns.vector3(4.0, 5.0, 6.0);
        v3 = v1.cross(v2);
        if (v3.x !== -2.0 || v3.y !== 4.0 || v3.z !== -2.0) {
            console.log('Failed Cross');
        } else {
            console.log('Passed Cross');
        }
        console.log('Vecto3 Unit Test Complete');
    };
}(Dwarf));*/