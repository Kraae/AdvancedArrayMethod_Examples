/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string.
The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

2findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/
//find only returns the first answer that passes through where as filter is a find all 

function findUserByUsername(usersArray, username) {
return findUsersArr.find(function(users){
return users.username === username;
})
}

function findUserByUsername(usersArray, username) {
  return arr.find(users.username) === username;
}

function findUserByUsername(usersArray, username) {
  return users.username === username;
}
//console.log(username);

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. 
The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user){
    return user.username === username;
  })
  if(foundIndex === -1) return;

  return usersArray.splice(foundIndex,1)[0]
}

function removeUser(usersArray, username) {
  let newIndex = usersArray.findIndex(function(user) {
    return user.username === username //returns newIndex
  })
  //console.log(newIndex);
  username.splice(newIndex, 1);//removes the newIndex (removes object from the array) 
  if (newIdex === -1) {
   // console.log("not found");
  //} else {
  //  console.log("object found");
  }
  } 


