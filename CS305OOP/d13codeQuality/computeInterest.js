"use strict";

const assert = require("assert");

function computeSalesCommission(isSalaried, salesAmnt) {
    let Commission = 0;
    if (isSalaried) {
        if (salesAmnt < 300) {
            Commission = 0;
        } else if (salesAmnt >= 300 && salesAmnt <= 500) {
            Commission = salesAmnt * 0.01;
        } else if (salesAmnt > 500) {
            Commission = ((salesAmnt - 500) * 0.02) + 5;
        }
    } else if (!isSalaried) {
        if (salesAmnt >= 300 && salesAmnt <= 500) {
            Commission = salesAmnt * 0.02;
        } else if (salesAmnt > 500) {
            Commission = ((salesAmnt - 500) * 0.03) + 10;
        }
    }

    return Commission;

}

describe("test of ComputSalesCommission", function () {
    it("tests salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
});
