const assert = require('assert');
const CarpetQuote = require("../carpet_quote");

describe("Carpet Quote", () => {
    it('is room area * price per sq m un-rounded', () => {
        const length = 10.0;
        const width = 15.0;
        const pricePerSqMtr = 10.0;
        const roundUp = false;
        assert.equal(new CarpetQuote().quote(length, width, pricePerSqMtr, roundUp), 1500.0)
    });

    it('is ceiling of room area * price per sq m rounded up', () => {
        const length = 10.5;
        const width = 15.5;
        const pricePerSqMtr = 10.0;
        const roundUp = true;
        assert.equal(new CarpetQuote().quote(length, width, pricePerSqMtr, roundUp), 1630.0)
    });
})