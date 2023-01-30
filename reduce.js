/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
   return arr.reduce(function(acc, cur, i) {
    return acc = acc.concat(val[key]);
   },[]);
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
/*
function vowelCount(str) {
    const str = vowels.reduce((acc, cur) => {
    const vowels = "aeiou";
    const vwlcnt = cur.vowels;
    if (acc[vwlcnt] = acc[vwlcnt] +1);
    } else {
        (acc[vwlcnt] = 1);
    }
    return acc; 
    
   {};)}
console.log(str);


function vowelCount(str) {
    const result = vowels.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) +1;
        return acc;
    }, {});

}
console.log(result)

*/
function vowelCount(str){
    return str.split("").reduce(function(acc,val) {
        var val = value.toLowerCase(); 
			if (["a","e","i","o","u"].indexOf(val) >-1) {
          		if (val in acc) {
                    acc[val]++;
                } else {
                    acc[val] = 1;
                     }
						}
          			return acc;
      },{});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
*/  
/*  
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]


function addKeyAndValue(arr, key, val) {
    const result = keyAndVal.reduce(function(acc, val, i) {
        let key = keyAndVal[0];
        let i = keyAndVal[1];
        arr[key][i] = val;
        return arr;
    }, {});

     console.log(result);
 
}
*/ 
function addKeyAndValue(arr, key, val) {
    const result = keyAndVal.reduce(function(acc, val, i) {
        arr[key][i] = value;
        return arr;
    }, {});

     console.log(result);
    
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. 
The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray.
 If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    const result = arr.reduce(function(acc, val){
        if(callback(val)){
            acc[0].push(val);
        } else {
            acc[1].push(next);
        }
        return acc; 
    }, [[],[]]);
}
/*
function partition(arr, callback) {
    const partition = (arr, val) => 
    arr.reduce((acc, val, i, arr) => {
        acc[fn(val, i arr) 0 : 1 ].push(val);
        callback(val)
        return acc; 
    }, [[],[]]);
}
*/