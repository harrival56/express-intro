const { mean, median, mode, verifyNum, err } = require("./helper")


describe("verify number function", () => {
    test("should return error if non number", () => {
        let result = verifyNum([2,4,5,"fun"])
        expect(result).not.toEqual(Array)
        expect(result).toEqual(expect.any(String))
    })
})

describe("Error function", () => {
    test("should return error message", () => {
        expect(err("this is err msg")).toEqual("this is err msg")
    })
})

describe("Mean function", function(){
    test("should return the average number", function(){
        let result = mean([1,2,3,4])
        expect(result).toEqual(2.5)
    })
})

describe("median function", () => {
    test("shuold return the median of a group of numbers", () => {
        let result = median([1,6,5,2,3,3,4,3,3])
        expect(result).toEqual(3)
    })
})

describe("mode function", () => {
    test("should return the most occured number", () => {
        let result = mode([2,4,3,4,3,4,5,3,4])
        expect(result).toEqual(4)
    })
})