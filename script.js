// Exercise 1: Your Favorite Food
let favoriteFood = "Foufou"
let favoriteMeal = 'lunch'
console.log("I eat " + favoriteFood + " at every " + favoriteMeal)


// Exercise 2 : Series

// Part 1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length
let myWatchedSeriesSentence = myWatchedSeries.join(", ").replace("the big bang theory", "and the big bang theory")
console.log("I watched " + myWatchedSeriesLength + " series : " + myWatchedSeriesSentence)

// Part 2
myWatchedSeries[2] = "friends"
myWatchedSeries.push("peaky blinders")
myWatchedSeries.unshift("mr robots")
myWatchedSeries.splice(myWatchedSeries.indexOf("black mirror"), 1)
console.log("money heist".charAt(2))
console.log(myWatchedSeries)


// Exercise 3 : The Temperature Converter
let temperatureC = 28
let temperatureF = (temperatureC / 5 * 9) + 32
console.log(temperatureC + "°C is " + temperatureF + "°F")


// Exercise 4 : Guess The Answers #1
let c;
let a = 34
let b = 21

console.log(a + b) //first expression
    // Prediction: It will output 55 because a and b are both numbers
    // Actual: 55

a = 2

console.log(a + b) //second expression
    // Prediction: It will output 23 because a is now equal to 2
    // Actual: 23

console.log(c)
    // Prediction: It will output undefined because no value was assigned to c
    // Actual: undefined

console.log(3 + 4 + '5')
    // Prediction: It will output 75 because 3 and  are numbers so 3+5 is equal to 7. And '5' is string so 7 + '5' is equal to 75
    // Actual: 75


// Exercise 5 : Guess The Answers #2
typeof(15)
    // Prediction: number because numbers are all of type number in JS
    // Actual: number
    
typeof(5.5)
    // Prediction: number because numbers are all of type number in JS
    // Actual: number

typeof(NaN)
    // Prediction: I have no idea what this can be. Maybe object
    // Actual: number

typeof("hello")
    // Prediction: string because of the double quotes surrounding the word hello
    // Actual: string

typeof(true)
    // Prediction: boolean
    // Actual: boolean    

typeof(1 != 2)
    // Prediction: boolean, because it's a comparison and comparisons only return true or false which are of type boolean
    // Actual: boolean    

"hamburger" + "s"
    // Prediction: hamburgers, it is a concatenation
    // Actual: hamburgers    

"hamburgers" - "s"
    // Prediction: NaN because both operands are not of type number and they doesn't have numerical values
    // Actual: NaN    

"1" + "3"
    // Prediction: 13. It is a concatenation of strings
    // Actual: 13    

"1" - "3"
    // Prediction: -2 because both operands have numerical values despite being of type string
    // Actual: -2    

"johnny" + 5
    // Prediction: johnny5, it's a concatenation
    // Actual: johnny5    

"johnny" - 5
    // Prediction: NaN, one of the operands does not have numerical value in addition to being of type string
    // Actual: NaN    

99 * "hello"
    // Prediction: NaN, one of the operands does not have numerical value in addition to being of type string
    // Actual: NaN    

1 != 1
    // Prediction: false, it's a comparison and 1 is equal to 1
    // Actual: false    

1 == "1"
    // Prediction: true, it's a comparison and 1 is equal to the numerical value of the string '1'
    // Actual: true

1 === "1"
    // Prediction: false, because the comparison is strict: not only on values but also on types
    // Actual: false


// Exercise 6 : Guess The Answers #3

5 + "34"
    // Prediction: 534, it is a concatenation
    // Actual: 534

5 - "4"
    // Prediction: 1 because both operands have numerical values
    // Actual: 1

10 % 5
    // Prediction: 0 because 10 is divisible by 5
    // Actual: 0

5 % 10
    // Prediction: 5 because 5 is less than 10
    // Actual: 5

"Java" + "Script"
    // Prediction: JavaScript, it is a concatenation
    // Actual: JavaScript

" " + " "
    // Prediction: '  ', it is a concatenation
    // Actual: '  '

" " + 0
    // Prediction: ' 0', it is a concatenation
    // Actual: ' 0'

true + true
    // Prediction: 2 because the two boolean operands have numerical values that are actually 1 and 1
    // Actual: 2

true + false
    // Prediction: 1, because true is numerically equal to 1 and false is numerically equal to 0
    // Actual: 1

false + true
    // Prediction: 1, same as previous
    // Actual: 1

false - true
    // Prediction: -1
    // Actual: -1

!true
    // Prediction: false, the opposite of true
    // Actual: false

3 - 4
    // Prediction: -1
    // Actual: -1

"Bob" - "bill"
// Prediction: NaN, both operands do not have numerical values
// Actual: NaN