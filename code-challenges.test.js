// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
//Function name: fibonacciArray
//Test: 
describe("fibonacciArray", () => {
    // Description of function
    it("takes in a number greater than 2 and returns an array of the same length, containing the numbers of the Fibonacci sequence", () => {
        // const fibonacciArray = (number) => {
        //     for (var fibonacci = [1,1], i = 1; i < number-1; i++)
        //     fibonacci.push(fibonacci[i] + fibonacci[i-1])
        //     return fibonacci
        // }
        ////Function: fibonacciArray, Variable: number, expected output
        expect(fibonacciArray(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacciArray(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])

    })

})
// Fail received: 
// fibonacciArray › takes in a number greater than 2 and returns an array of the same length, containing the numbers of the Fibonacci sequence
//     ReferenceError: fibonacciArray is not defined

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// // // b) Create the function that makes the test pass.
//Input: number
const fibonacciArray = (number) => {
// The first two indexes of the array will have 1 as their value. I found an example on stack overflow that had zero in the [0] position, resulting in an output of an array that was one number longer than the intended output each time. By setting a value of 1 to the first two index postions, and subtracting 1 from the length of the output array, I was able to create a function that meets the criteria of this challenge. 
    for (var fibonacci = [1,1], i = 1; i < number-1; i++)
//Use the push() method to add the current index and previous index together, pushing them to the array. 
    fibonacci.push(fibonacci[i] + fibonacci[i-1])
    return fibonacci
}
// console.log(fibonacciArray(6))
// console.log(fibonacciArray(10)
// _______________________________________________________________________________________________________________________________________


// // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
// Function name: oddOnlyArray
// Function takes in an array and returns a new array of only odd numbers sorted from least to greatest 
// Variables: fullArr1 and fullArr2
// Use filter method to return an array with only odd numbers 
// Use sort method to sort odd numbers from least to greatest 

// // a) Create a test with expect statements for each of the variables provided.

describe("oddOnlyArray", () => {
    // Description of function
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
        // const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        // const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        // const oddOnlyArray = (array) => {
        //     let newArr = []
        //     for(let i=0; i<array.length; i++){
        //         if(array[i] % 2 !== 0){
        //             newArr.push(array[i]).sort
        //         }
        // //         }
        //         return newArr.sort((a, b) => a - b),newArr.filter(array => typeof array == 'number')
        //     }
        //Function: oddOnlyArray, Variable: fullArr1, expected output
        expect(oddOnlyArray(fullArr1)).toEqual([-9, 7, 9, 199])
        //Function: oddOnlyArray, Variable: fullArr2, expected output
        expect(oddOnlyArray(fullArr2)).toEqual([-823, 7, 23])
      })
})


//Fail received: 
//oddOnlyArray › takes in an array and returns a new array of only odd numbers sorted from least to greatest
 //   ReferenceError: oddOnlyArray is not defined

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// // b) Create the function that makes the test pass.
//Function expression: oddOnlyArray
     const oddOnlyArray = (array) => {
            let newArr = []
// Iterate over the length of the array
            for(let i=0; i<array.length; i++){
//Determine odd values
                if(array[i] % 2 !== 0){
//Sort odd values from least to greatest
                    newArr.push(array[i]).sort
                }
            }
//Use filter() method to filter out integers to avoid returning strings and booleans
                return newArr.sort((a, b) => a - b),newArr.filter(array => typeof array == 'number')
        }
// _______________________________________________________________________________________________________________________________________

// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
//Function name: accumulatingArray
//Function takes in an array and returns an array of the accumulating sum. An empty array should return an empty array. 
// Variables: numbersToAdd1, numbersToAdd2, numbersToAdd3
// Use map() method to return an array with the same amount of numbers 
// What I used to better understand the math behind the accumulating sum: 
//numbersToAdd1
//at [0], add itself = 2
//at [1], add itself + [0] = 6
//at [2], add itself + [1] + [0] = 51 
//at [3], add itself + [2] + [1] + [0] = 60

//numbersToAdd2
//at [0], add itself = 0
//at [1], add itself + [0] = 7
//at [2], add itself + [1] + [0] = -1
//at [3], add itself + [2] + [1] + [0] = 11

// a) Create a test with expect statements for each of the variables provided.

describe("accumulatingArray", () => {
    // Description of function
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
        // const numbersToAdd1 = [2, 4, 45, 9]
        // const numbersToAdd2 = [0, 7, -8, 12]
        // const numbersToAdd3 = []
        //Function expression: accumulatingArray
        // const accumulatingArray = (array) => {
        //     if (array = array.map((element,index) => array.slice(0,index + 1).reduce((a,b) => a + b))) {
        //      return array
        //     } else if(array === []) {
        //         return []
        //     }
        // }
        //Function: accumulatingArray, Variable: numbersToAdd1, expected output
        expect(accumulatingArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
        //Function: accumulatingArray, Variable: numbersToAdd2, expected output
        expect(accumulatingArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
        //Function: accumulatingArray, Variable: numbersToAdd3, expected output
        expect(accumulatingArray(numbersToAdd3)).toEqual([])
      })
})

// //Fail received: 
// //accumulatingArray › takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// //ReferenceError: accumulatingArray is not defined

const numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// // Expected output: []


// b) Create the function that makes the test pass.
//Function expression: accumulatingArray
const accumulatingArray = (array) => {
//Use reduce() method to return the value of the accumulated sum of elements
    if (array = array.map((element,index) => array.slice(0,index + 1).reduce((a,b) => a + b))) {
     return array
//Use conditional statement to return empty array if an empty array is found
    } else if(array === []) {
        return []
    }
}
// console.log(accumulatingArray(numbersToAdd1))
// console.log(accumulatingArray(numbersToAdd2))
// console.log(accumulatingArray(numbersToAdd3))
 
//Closing notes: 
//I spent a lot of time researching different methods and approaches, primarily on W3Schools and stack overflow, only after reaching the limitations of my current skills. The only method I used in this challenge that was new to me is the reduce() method, which proved to be exactly what I needed for this accumulating sum challenge. I understand I most likely didn't code the functions properly within the tests, and would like further instruction on the correct way to declare variables within tests so as not to repeat these mistakes. 
