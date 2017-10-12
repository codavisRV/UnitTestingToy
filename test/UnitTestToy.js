// JS Unit Testing
 
const expect = require('chai').expect;
const functions = require('../functions.js');
// Easy: Create the tests below for a function that will take in two integer parameters.
// • Write a test that will verify that the function returns the two integers multiplied together.
// • Write a test that will verify that the function returns false if invalid parameters are passed in.
// • Write a function that will make these tests succeed.


describe('Easy: Multiply tests', () => {
    it ('Should return two integers properly multiplied', () => {
        var a = 5;
        var b = 10;

        expect(functions.multiply(a, b)).to.equal(50);
    }); 

    it('Should return false if invalid parameters are given.', () => {
        var a = '5';
        var b = {};
        expect(functions.multiply(a, b)).to.be.false;
    })
})


// Medium: Create the tests below for a function that will take in a single object parameter with two properties, a string and a single character. 
// • Write a test that will verify that the function returns the first instance where that character is found in the string.
// • Write a test that will verify that the function returns false if the character is not found in the string.
// • Write a test that will verify that the function returns false if the parameter passed into the function is invalid.
// • Write a function that will make these tests succeed.

describe('Medium: look for character in string', () => {
    
    it ('Should return the index of where the character first appears in the string', () => {
        var obj = {
            content: "This is a string",
            char: "i"
        }
        expect(functions.returnChar(obj)).to.equal(2);
    });

    it('Should return false if the character is not found in the string', () => {
        var obj = {
            content: "a string",
            char: "z"
        }
        expect(functions.returnChar(obj)).to.be.false;
    });

    it('Should return false if parameter is not valid', () => {
        var obj = "a string";
        expect(functions.returnChar(obj)).to.be.false;
    });

})


// Hard: Create the tests below for a function that will take in an object of N people. Each person will have a string age property and a string location property.  The function will return an entire original object with each person’s age + 5 years. Note that the properties should be returned as a string since they were passed in as a string.
// • Write a test that will verify that the function returns an object with a single person’s age modified correctly.
// • Write a test that will verify that the function returns an object with 5 people with their ages modified correctly.
// • Write a test that will verify that the function returns false if an invalid parameter is passed in.
// • Write a function that will make these tests succeed.

describe('Hard: Update ages in objects', () => {
    it("Should modify an object with just one person correctly", () => {
        var obj = {
            Chris: {
                Age: '26',
                Location: 'Charlotte',
            }
        };
        expect(functions.makeOlder(obj)).to.deep.equal({
            Chris: {
                Age: '31',
                Location: 'Charlotte',
            }
        });
    });
    
    it("Should modify multiple objects correctly", () => {
        var obj = {
            Chris: {
                Age: '26',
                Location: 'Charlotte',
            },
            Jake: {
                Age: '30',
                Location: 'Charlotte',
            },
            Bob: {
                Age: '22',
                Location: 'Charlotte',
            },
            Cindy: {
                Age: '25',
                Location: 'Charlotte',
            },
            Herman: {
                Age: '50',
                Location: 'Charlotte',
            },
        };
        expect(functions.makeOlder(obj)).to.deep.equal({
            Chris: {
                Age: '31',
                Location: 'Charlotte',
            },
            Jake: {
                Age: '35',
                Location: 'Charlotte',
            },
            Bob: {
                Age: '27',
                Location: 'Charlotte',
            },
            Cindy: {
                Age: '30',
                Location: 'Charlotte',
            },
            Herman: {
                Age: '55',
                Location: 'Charlotte',
            },
        });

    });

    it("Should return false if invalid parameter is passed", () => {
        var obj = "a string";
        var obj2 = false;
        var obj3 = 10;

        expect(functions.makeOlder(obj)).to.be.false;
        expect(functions.makeOlder(obj2)).to.be.false;
        expect(functions.makeOlder(obj3)).to.be.false;
    }); 

});



// Example Parameter --
// {
//     Chris: {
//         Age: ’26’,
//         Location: ‘Charlotte',
//     },
//     Jonathan: {
//         Age: ’32’,
//         Location: ‘Atlanta’,
//     },
// }
// Example Returned Object —
// {
//     Chris: {
//         Age: ’31’,
//         Location: ‘Charlotte',
//     },
//     Jonathan: {
//         Age: ’37’,
//         Location: ‘Atlanta’,
//     },
// }
