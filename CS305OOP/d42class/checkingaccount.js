"use strict";
/* global Account  */

// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

/**
 * A checking Account class
 * 
 * Provides the basic functionality that every checking account should have
 */
class  CheckingAccount extends Account{

    /**
     * Constructor for creating a new Account object
     * 
     * @param {number} number the number for this account
     * @param {number} overDraft the limit for withdrawal beyond balance.
     */
    constructor(number,overDraft){
        super(number);
        this._OverDraft = overDraft;
    }


    /**
     * Getter for the 'private' overdaft  field
     * 
     * @returns {number} the overdraft amount.
     */
    getOverdraft() {
        return this._OverDraft;
    }

    /**
     * Setter for the 'private' interest  field
     * @param {number} overDraftAmount the overdraft amount.
     * @returns {undefined} no return just set.
     */
    setOverdraft(overDraftAmount) {
     this._OverDraft = overDraftAmount;
    }

    /**
     * Method to take money out of the account
     * 
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     * @throws {Error} when the account has insufficient amount and excceds the overdraft limit.
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance + this._OverDraft)) {
            throw Error("Insufficient funds, cannot withdraw beyond overdraft limit");
        }
        this._balance -= amount;
    }

     /**
     * @returns {string} representation of this account
     */
    toString(){
       return `CheckingAccount ${this._number}: balance: ${this.getBalance()} overdraft limit: ${this._OverDraft}`;
    }
    /**
     * @returns {String} warning if balance is below zero
     */
     endOfMonth(){
        if(this._balance<0){
            return `Warning, low balance CheckingAccount ${this._number}: balance: ${this.getBalance()} overdraft limit: ${this._OverDraft}`;
        }else{
            return "";
        }
     } 


}















/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//  exports.CheckingAccount = CheckingAccount;