var assert = require('assert')
const cal = require("../calculator")
console.log(cal)
describe('Calculator', function() {
    describe('add', function() {
        it('should return 12 with add(10,2)', function () {
            assert.equal(cal.add(10,2), 12)
        })

        it('should return 14 with add(10,2)', function () {
            assert.equal(cal.add(10,2), 14)
        })
    })
    describe('mul', function() {
        it('should return 20 with mul(10,2)', function () {
            assert.equal(cal.mul(10,2), 20)
        })

        it('should return 22 with mul(10,2)', function () {
            assert.equal(cal.mul(10,2), 22)
        })
    })
    describe('div', function() {
        it('should return 5 with div(10,2)', function () {
            assert.equal(cal.div(10,2), 5)
        })

        it('should return 6 with div(10,2)', function () {
            assert.equal(cal.div(10,2), 6)
        })
    })
    describe('sub', function() {
        it('should return 8 with sub(10,2)', function () {
            assert.equal(cal.sub(10,2), 8)
        })

        it('should return 10 with sub(10,2)', function () {
            assert.equal(cal.sub(10,2), 10)
        })
    })
})