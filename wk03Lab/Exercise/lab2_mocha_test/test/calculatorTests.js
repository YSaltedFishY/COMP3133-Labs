//run npm test to test mocha files
//Remember to change script in package.json

const assert = require('assert')
const calculator = require('../app/calculator')

describe("Validating calculator functions", () =>{
    it("add(5,2) should return 7", () => {
        assert.equal(calculator.add(5,2),7)
    })

    it("add(8,2) should return 4", () => {
        assert.equal(calculator.add(8,2),7)
    })

    it("sub(5,2) should return 3", () => {
        assert.equal(calculator.sub(5,2),3)
    })

    it("sub(9,2) should return 7", () => {
        assert.equal(calculator.sub(9,2),3)
    })

    it("mul(5,2) should return 10", () => {
        assert.equal(calculator.mul(5,2),10)
    })

    it("mul(7,7) should return 49", () => {
        assert.equal(calculator.mul(7,7),10)
    })

    it("div(10,2) should return 5", () => {
        assert.equal(calculator.div(10,2),5)
    })

    it("div(30,5) should return 6", () => {
        assert.equal(calculator.add(30,6),8)
    })
})