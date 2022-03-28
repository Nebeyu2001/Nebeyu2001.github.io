"use strict";

function Increamenter(start) {

    this.value = start;

}


Increamenter.prototype = {

    increament(amt) {
        this._value = this._value + amt;
    },

    decreament(amt) {
        this._value = this._value - amt;
    }
};





let inc = new Increamenter(100);
console.log(inc.increament(100));