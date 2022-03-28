"use strict";
/* global Account require  */
// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

/**
 * A saving Account class
 * 
 * Provides the basic functionality that every saving account should have
 */
class SavingsAccount extends Account{
    /**
     * Constructor for creating a new saving Account object
     * 
     * @param {number} number the number for this account
     * @param {number} interest the accumulated interest for that acoount.
     */
    constructor(number,interest){
        super(number);
        this._interest = interest;
    }


    /**
     * Getter for the 'private' interest field
     * 
     * @returns {number} the account number
     */
    getInterest() {
        return this._interest;
    }

    /**
     * Setter for the 'private' interest  field
     * @param {number} interest interest for the account.
     * @returns {undefined} no return just set.
     */
    setInterest(interest) {
     this._interest = interest;
    }
    /**
     * Adding the interest to the balance.
     * @returns {undefined} deposite the interest in the savings account.
     */
    addInterest(){
        
            this._balance += (this._balance * (this._interest/100)); 
    }

    /**
     * @returns {string} representation of this account
     */
    toString(){
       return  `SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest}`;
    }
    /**
     * @returns {String} how much interest is added 
     */
    endOfMonth(){
        this.addInterest();
        return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest}`;
    }

}





/* global exports */
//  exports.SavingsAccount = SavingsAccount;