//Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";
//Do not change code below this line
a -= 1;
b += 5;
c = c + " String!";
console.log(b);

var myStr = 'I am a"double quoted" string inside  double quotes';
console.log(myStr);
var myStr = `'<a href="http://www.example.com" target="_blank">'`;
console.log(myStr);

/*****
 CODE OUTPUT
 \'  single quote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \tab
\b backspace
\f form feed
 *****/
var myStr = "FirstLine\n\t\\SecondLine\nThird Line";
console.log(myStr);
// Example
var ourStr = "I come first. " + "I come second.";
console.log(ourStr);

var ourStr = "I come 1st. ";
ourStr += "I come 2nd.";
console.log(ourStr);

var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
console.log(ourStr);

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr);
console.log(ourStr);

var firstNameLength = 0;
var firstName = "Alina";
firstNameLength = firstName.length;
console.log(firstNameLength);

var firstLetterOfFirstName = "";
var firstName = "Alina";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

var myStr = "Jello World";
myStr = "Hello World"; //Fix Me
console.log(myStr);

var firstName = "Andrei";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);
var lastName = "Iute";
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

var firstName = "Alina";
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);
var lastName = "Babileva";
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    myAdverb +
    ".";
  return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

var ourArray = ["John", 23];

var ourArray = [
  ["the universe", 42],
  ["everything", 010101],
];

var baieti = ["Andrei", "Dorin", "Lili"];
var fete = ["Alina", "Alina2", "Alina3"];

console.log(baieti[0]);
console.log(fete[0]);

console.log(baieti[0] + " + " + fete[0] + " = " + "love");
console.log(baieti[1] + " + " + baieti[2] + " = " + "huinea");

// console.log(baieti)

// function add(n1, n2) {
//     var sum = n1 + n2
//     return sum
// }

// let sum = add(1, 1)

// console.log(sum)

// function div(n1, n2){
//     var res = n1 / n2
//     return res
// }
// let res = div(2, 4)
// console.log(res)

// function sqr(n){
//     return n*n
// }
// console.log(sqr(3))

// function sub(n1,n2){
//     return n1-n2
// }

// function pow3(x){
//     return x*x*x
// }

// function isLiliSmart(iq) {
//     if ( iq === 0 ) {
//         console.log("Lili, dulapul meu e mai destept ca tine")
//         return 0
//     } else if (iq > 0 && iq < 90) {
//         console.log("Lili, naruto da bacu mai bine ca tine ")

//     } else {
//         console.log("Lili, spala velesa")
//     }
// }

// console.log(isLiliSmart(0))

function add(n1, n2) {
  return n1 + n2;
}

add([1, 2], [1, 2]);

function sub(n1, n2) {
  return n1 - n2;
}

nums = [1, 2, 3, 4, 5];

console.log(add(nums[0], nums[4]));

var ourArray = [50, 60, 70];
var ourData = ourArray[0]; //equals 50
console.log(ourData);

var ourArray = [29, 75, 96];
ourArray[1] = 43; //ourArray now equals [29, 43, 96]
console.log(ourArray);

var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
  [15, ["andrei", 16]],
];

var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [
    [7, 4, 28, 14],
    [[4, 10], 26, 7],
  ],
];

var myData0 = myArray[0][0]; // 1
var myData1 = myArray[2][2]; // 9

console.log(a[3][1][0][0]);

var lst = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// addNumsInList(index_1, index_2, lst)

// function addNumsInList (index_1, index_2,lst){
//     return lst[index_1] + lst[index_2]
// }

// console.log(addNumsInList(4 ,5 ,lst))

var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
var myData = myArray[0][0];

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); //ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop(); // removedFromOurArray now equals 3, and ourArray now equals [1, 2]

var ourArray = [2, 3, 4];
var removedFromOurArray = ourArray.shift(); // removedFromOurArray now equals 2, and ourArray now equals [3, 4]

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); //now ourArray equals ["J", "cat"]
ourArray.unshift("Happy"); //now ourArray equals ["Happy","J", "cat"];
console.log(ourArray);

var myList = [
  ["cereal", 3],
  ["milk", 2],
  ["bananas", 4],
  ["juice", 1],
  ["eggs", 10],
]; //shopping list
console.log(myList);

function ourReusableFunction() {
  console.log("Heyya, World");
}
ourReusableFunction();
ourReusableFunction();

function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); //Outputs 5

var myGlobal = 10;
function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += "oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}
myLocalScope();

var outerWear = "T-Shirt";
function myOutFit() {
  var outerWear = "sweater";
  return outerWear;
}
console.log(myOutFit());
console.log(outerWear);

function minusSeven(num) {
  return num - 7;
}
console.log(minusSeven(10));

function timesFive(num) {
  return num * 5;
}
console.log(timesFive(10));

var changed = 0;
function change(num) {
  return (num + 5) / 3;
}
changed = change(10);
console.log(changed);
var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed);

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No,it's false";
}
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
console.log(trueOrFalse(true));

function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict("7"));
/*
3===3
3==='3'
*/

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(10, "10"));

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual(10));

function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testStrictNotEqual(10));

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 110";
  }
  return "10 or Under";
}
console.log(testGreaterThan(10));

function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 Or Over";
  }
  return "Less than 10";
}
console.log(testGreaterOrEqual(10));

function testLessThan(val) {
  if (val < 25) {
    return "Over 100";
  }
  if (val < 55) {
    return "Over 110";
  }
  return "55 or Over";
}
console.log(testLessThan(10));

function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smalller than or equal to 12";
  }
  if (val <= 24) {
    return "Smalller than or equal to 24";
  }
  return "More than 24";
}
console.log(testLessOrEqual(10));

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
console.log(testLogicalAnd(30));

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    //  || is equal to "or"
    return "outside";
  }
  return "inside";
}
console.log(testLogicalOr(15));

function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or smaller";
  }
  return result;
}
console.log(testElse(3));

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "smaller than 5";
  } else {
    return "between 5 and 10";
  }
}
console.log(testElseIf(7));

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "less than 10";
  } else {
    return "greater thaor equal to 10";
  }
}
console.log(orderMyLogic(3));

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  }
}
console.log(testSize(25));

var names = [
  "hole-in-one!",
  "eagle",
  "birdie",
  "par",
  "bogey",
  "double bogey",
  "go gome",
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes <= par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes <= par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}
console.log(golfScore(5, 4));

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  return answer;
}
console.log(caseInSwitch(4));

function andreipidar(num1, num2) {
  switch (num2) {
    case 1:
      return num1;
    case 2:
      return num1 * num1;
    case 3:
      return num1 * num1 * num1;
    case 4:
      return num1 * num1 * num1 * num1;
  }
}
console.log(andreipidar(2, 1));
console.log(andreipidar(2, 2));
console.log(andreipidar(2, 3));
console.log(andreipidar(2, 4));

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numbers2 = [10, 9, 8, 7, 7, 7, 7, 8, 9, 10];

function evenOrOdd(list) {
  var number = list.pop();
  if (number % 2 == 0) {
    return true;
  }
  return false;
}

// console.log(evenOrOdd(numbers))
// console.log(evenOrOdd(numbers))
// console.log(evenOrOdd(numbers))
// console.log(evenOrOdd(numbers))
// console.log(evenOrOdd(numbers))
// console.log(evenOrOdd(numbers))
// console.log(evenOrOdd(numbers))
// console.log(evenOrOdd(numbers))

console.log(evenOrOdd(numbers2));
console.log(evenOrOdd(numbers2));
console.log(evenOrOdd(numbers2));
console.log(evenOrOdd(numbers2));
console.log(evenOrOdd(numbers2));
console.log(evenOrOdd(numbers2));
console.log(evenOrOdd(numbers2));
console.log(evenOrOdd(numbers2));

function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}
console.log(switchOfStuff("8"));

function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "high";
      break;
  }
  return answer;
}
console.log(sequentialSizes(1));

function chainToSwitch(val) {
  var answer = "";
  switch (val) {
    case "bob":
      answer = "marley";
      break;
    case 42:
      answer = "the answer";
      break;
    case 1:
      answer = "there is no #1";
      break;
    case 99:
      answer = "missed me by this much";
      break;
    case 7:
      answer = "ate nine";
      break;
  }
  return answer;
}

console.log(chainToSwitch(99));

function isLess(a, b) {
  return a < b;
}
console.log(isLess(10, 15));

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-3, 2));

var count = 0;
function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }
  return count + " " + holdbet;
}

cc(2);
cc("K");
cc(10);
cc("K");
cc("A");
console.log(cc(4));

var ourDog = {
  name: "Crypto Pidar",
  legs: 5,
  tails: 2,
  friends: ["no"],
};
ourDog.name = "Crypto Pes";
ourDog.bark = "gaf-gaf nahui";
delete ourDog.friends;
var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};
var playerNumber = 16;
var player = testObj[playerNumber];

function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
  };
  result = lookup[val];
  return result;
}
console.log(phoneticLookup("charlie"));

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
};
function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "not found";
  }
}
console.log(checkObj("hello"));

var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Beau Carnes",
    title: "Cereal Man",
    release_year: 2003,
    formats: ["youtube video"],
  },
];

var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
        "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)


var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "treets",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

/////////////////////////////////////
var collection= {
    "2548": {
        "album": "Slippery Whe Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {  
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop]=value;
    }
    return collection;
}
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));


var myArray= [];

var i=0;
while(i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);


var ourArray = [];

for (var i=1; i<6; i++) {
    ourArray.push(i);
}
console.log(ourArray)

var ourArray = [];

for (var i=0; i<10; i+=2) {
    ourArray.push(i);
}

console.log(ourArray)

var myArray=[];

for (var i=1; i<10; i+=2) {
    myArray.push(i);
}
console.log(myArray);



var ourArray = [];

for (var i = 10; i>0; i -= 2) {
    ourArray.push(i);
}
console.log(ourArray);


var ourArray = [9, 10, 11, 12];
var ourTotal = 0;

for (var i=0; i< ourArray.length; i++) {
    ourTotal += ourArray[i];
}
console.log(ourTotal);


function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product);


var myArray = [];
var i = 10;

 do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);


////////////////////////
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "060987645",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "060235419",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "079856321",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Java Script", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
  for (var i = 0; i < contacts.length; i++){
      if(contacts[i].firstName === name){
        return contacts[i][prop] || "No such proprety";
      }
  }
  return "No such contact";
}

var data = lookUpProfile("Sherlock", "lastName");
console.log(data);


function randomFraction() {

    return Math.random();
}

console.log(randomFraction());


var randomNumbersBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());


function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(1, 9));


function convertToInteger(str) {

    return parseInt(str);
}

console.log(convertToInteger("59"));


function convertToInteger(str){

    return parseInt(str, 2);
}
console.log(convertToInteger("10010011"));


//condition ? statement-if-true : statement-if-false;
function checkEqual(a, b) {
 return a === b ? true : false;

 //return a ===b
}
console.log(checkEqual(1, 2));


function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"

}
console.log(checkSign(-9));



 function checkScope() {
   "use strict";
      let i = "function scope";
      if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
      }
      console.log("Function scope i is: ", i);
      return i;
 }
checkScope();


function printManyTimes(str) {
  "use strict";

  var SENTENCE = str + " is cool!";

  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

} 
printManyTimes("freeCodeCamp");


const s = [5, 7, 2];
function editInPlace() {
  "use strict";

  // s = [2, 5, 7];
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

}
editInPlace();

console.log(s);


function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS)

  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(PI);



const magic = () =>  new Date();



var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5])); 



const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


const increment = (function() {
  return function increment(number, value = 1) {
    return number + value;
  
};
})();
console.log(increment(5, 2));
console.log(increment(5));


const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); 



const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = [...arr1];
  arr1[0] = 'potato'
})();
console.log(arr2);


var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x; //x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

const { x : o, y : l, z : m} = voxel; // o = 3.6, l = 7.4, m = 6.54


const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";

  const { today : tempOfTomorrow } = avgTemperatures; 

  return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));



const LOCAL_FORECAST = {
  today: { min: 72, max: 83},
  tomorrow: { min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
  "use strict";

  const { today : {max : maxOfTomorrow }} = forecast;

  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));



const [p, u, , r] = [1, 2, 3, 4, 5, 6];
console.log(p, u, r);

let t = 8, q = 6;
(() => {
  "use strict";
  [t, q] = [q, t] 
})();
console.log(t);
console.log(q);


const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

  const [  , , ...arr] = list;

  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);


const stats = {
  max: 56.78,
  standart_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function (){
  return function half({max, min}) {
    return (max + min) / 2.0;
  };
})();
console.log(stats);
console.log(half(stats));


const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, myname is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);


const result = { 
  succes:["max length", "no-amd", "preffer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li`);
  }

  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);


const createPerson = (name, age, gender) => ( { name, age, gender});
console.log(createPerson("Zodiac Hasbro", 56, "male"));


const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);


class SpaceShuttle {
  constructor(targetPlanet) {
  this.targetPlanet = targetPlanet;
  };
};
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);



function makeClass() {
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name)


class Book {
  constructor(author) {
    this._author = author;
  }
  //getter
  get writer(){
    return this._author;
  }
  //setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}



function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = 5/9 * (temp - 32);
    }
    get temperature(){
      return this._temp;
    }
    set temperature(updatedTemp){
      this._temp = updatedTemp
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);




