// mocha test cases to validate Arithmetic functions percentage and square

const assert = require('assert')
const Arithemetic = require('../Arithmetic')

describe("Validating Arithemetic functions", () =>{
    it("square(3) should return 9", () => {
        assert.equal(Arithemetic.square(3), 9)
    })

    it("square(12) should return 144", () => {
        assert.equal(Arithemetic.square(12), 144)
    })

    it("square(4) should not return 8", () => {
        assert.notEqual(Arithemetic.square(4), 8)
    })

    it("square(2) should return 4", () => {
        assert.equal(Arithemetic.square(2), 5)
    })

    it("percentage(20, 50) should return 40",()=>{
        assert.equal(Arithemetic.percentage(20,50), 40)
    })

    it("percentage(20, 100) should return 20",()=>{
        assert.equal(Arithemetic.percentage(20,100), 20)
    })
    
    it("percentage(20, 20) should return 100",()=>{
        assert.equal(Arithemetic.percentage(20,20), 100)
    })
})