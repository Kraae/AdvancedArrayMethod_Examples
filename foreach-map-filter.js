/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(numbers){
    let newNumbers = [];
    numbers.forEach(n => {
        newNumbers.push(n * 2);
     })
     return newNumbers;
}

    

//})


/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
//forEach is not a good idea because this is only for even numbers not all of the numbers. forEach calls each number and not every number will not be useful since we only are using even numbers
//filter is better because 
//% is mod or remainder
function onlyEvenValues(n){
    let newN = [];
     n.forEach(function(val) {
     if (n % 2 === 0) { 
    newN.push(n);
 return newN;
}})}
  


/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAn dLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
        
    function showFirstAndLast(letters){
        let newL = [];
        letters.forEach (n => {
         newL.push(str.at(0) && str[str.at(-1)]); //or letter[letter.length - 1];
        })
         return newL;
     }}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/

function addKeyAndValue(arr,i,value) {
   arr.forEach(obj => {
    obj[i] = value;
    })
    return arr; 
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
    arr.forEach(function(val) {
    if (['a','e','i','o','u'].indexOf(vowel) >-1) {
        str[vowel]+1;
    } else {
        str[vowel] = 1;
    }
    return str;
    })
    }
//or 

function vowelCount(str) {
    let vowel = vowel.toLowerCase();
    let str = {};
    if(['a','e','i','o','u'].indexOf(vowel) >-1) {
        str[vowel]+1;
    } else {
        str[vowel] = 1;
    }
    return str;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////map
/*map does not mutate the array it just makes an entirely new one
//const newArray = existingArray.map(function(value, index, array))(
    always use return
    creates a new array over the old one, performs a callback for each value
)
function map(arr, callback) {
  let newArr;
  for (let i = 0; i < arr.length; ++i) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(array) {
return array.map((value) => value * 2);
};
/*

function doubleValues(arr) {
    const newArr = arr.map(function, val) {
        return val * 2
    }
}

Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]                 
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map(function(value, index) { 
        return value * index;
})
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    return arr.map(function(value) {
        return value[key];
    });
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    //return arr.map(function(val) {})
      return arr.map((value) => `${val.first} ${val.last}`);
   }


/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/
///////////////////////////////////////////////////////////////////////////////////////////////filter
/*
function filter(arr, callback) {
    let newArr;
    for (let i = 0; i < arr.length; ++i) {
      if (callback(arr[i], i, arr)) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  */


function filterByValue(value, key) {
    return arr.filter(function(value) {
        return value[key] !==undefined;
    });
}

/*
function filterByValue(val, key) {
    return val.filter(function(name) {
     `${name}:${instructor}` 
      })
     }
  function filterByValue(arr, key) {
    let newarray;
    return val[key]  }
*/
      
   
/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
   return arr.filter(function(i) {
    return i === searchValue; 
   })
   }
/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
  return arr.filter(function(val)  {
    return val[key] === searchValue;
   }) [0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    return arr.filter(function(val)  {
        let vowels = "aeiou";
        let newArr = str.loLowerCase().split("").filter(function(char) {
            if(vowels.indexOf(char) == -1);
            return char;
        })
    })

}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
 return arr.filter(function(val) {
    return val % 2 ! == 0; 
 }).map(function(val) {
    return val * 2;
 })
}
