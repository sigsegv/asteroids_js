(function (ns) {
    "use strict";
    if (typeof Object.create !== 'function') {
        Object.create = function (o) {
            function F() {}
            F.prototype = o;
            return new F();
        };
    }
    Math.PI2 = 2.0 * Math.PI;
    Math.PI1_2 = Math.PI / 2.0;
    
    // http://jsperf.com/new-array-vs-splice-vs-slice/19
    if (typeof Array.prototype.clone !== 'function') {
        Array.prototype.clone = function () {
            var b, i;
            b = [];
            i = this.length;
            while (i > 0) {
                i -= 1;
                b[i] = this[i];
            }
            return b;
        };
    }
    
    if (typeof Array.prototype.remove !== 'function') {
        Array.prototype.remove = function (obj) {
            var i;
            if (null === obj) {
                return;
            }
            i = this.indexOf(obj);
            if (i >= 0) {
                this.splice(i, 1);
            }
        };
    }
}());

/*****************************
 * PSUEDO CLASSICAL

function Constructor(...) {
    var privateMember = value;
    function privateMember(...) { }
    
    this.privilegedMember = function(...) { privateMember(); }
};
Constructor.prototype.publicMember = function (...) { privilegedMember() ; }

*******************************/

/******************************
Prototypical
var constuctor = function(proto, spec, my) {
    var that, private vars
    my = my || {};
    // add shared to my
    that = a new object
    // that = Object.create(proto);
    // add prviliged methods to that
    // var privateMember = function ( ) { }
    that.privateMember = privateMember;
    
    return that;
};

******************************/

/*jslint devel: true */
/*global PlayerShip */
/*
var Dwarf = Dwarf || {};
(function (ns) {
    "use strict";
    
    
    
}(Dwarf));

*/