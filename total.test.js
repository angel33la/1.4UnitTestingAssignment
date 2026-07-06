// requirements
// tdd - create tests for module that will obscure credit card number except for last 4 digits
// test to make sure the function obscrures the credit card numbers that are between the length of 12 and 16 digits
// test to make sure the function returns an error message if the credit card number is less than 12 digits or greater than 16 digits or return "invalid credit card"
// have positive and negative test cases for the function
// input: 123456789012
// output: ********9012

// create a module that takes in prices in an array and resuts the total of the prices in the array

const total = require("./total");

describe("Total Module tests", () => {
    test("As a user I want to be able to get the total after submitting various prices", () => {
        expect(total([2.5, 78.12, 12.89])).toEqual(93.51);
    });
});

// module that obscure credit card # except the last 4 digits & returns error message if the credit card # is less than 12 digits or more than 16 digits
describe("Obscure Credit Card Module tests", () => {
    const obscureCreditCard = require("./obscureCreditCard");

    test("returns obscured card number for valid 12-16 digit credit card numbers", () => {
        expect(obscureCreditCard("123456789012")).toEqual("********9012");
        expect(obscureCreditCard("1234567890123")).toEqual("*********0123");
        expect(obscureCreditCard("1234567890123456")).toEqual("************3456");
    });

    test("returns invalid credit card for numbers shorter than 12 digits or longer than 16 digits", () => {
        expect(obscureCreditCard("1234567890")).toEqual("invalid credit card");
        expect(obscureCreditCard("12345678901234567")).toEqual(
            "invalid credit card",
        );
        expect(obscureCreditCard("")).toEqual("invalid credit card");
    });

    test("returns invalid credit card for non-string input", () => {
        expect(obscureCreditCard(123456789012)).toEqual("invalid credit card");
        expect(obscureCreditCard(null)).toEqual("invalid credit card");
        expect(obscureCreditCard(undefined)).toEqual("invalid credit card");
    });
});