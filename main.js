'use strict';
/* Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions:
map,
filter,
reduce,
every,
some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.*/

module.exports = {

  sum: (arr, base) => {
    return base + arr.reduce((total, num)=>{
      return total + num;
    });
  },

  // sum: (arr, base) => {
  //   let sum = base;
  //   for (var i = 0; i < arr.length; i++){
  //     sum += arr[i];
  //   }
  //   return sum;
  // },

  someObjsContainProp: (arr, prop) => {
    return arr.some((obj)=>{
      return obj.hasOwnProperty(prop);
    });
  },

  // someObjsContainProp: (arr, prop) => {
  //   for(var i = 0; i < arr.length; i++){
  //     if(arr[i].hasOwnProperty(prop)){
  //       return true;
  //     }
  //   }
  //   return false;
  // },

  convertNameArrayToObject: (arr) => {
    return arr.map((str)=>{
      let obj = {};
      obj.first = str[0];
      obj.last = str[1];
      return obj;
    });
  },

  // convertNameArrayToObject: (arr) => {
  //   let nameObj = [];
  //   for(var i = 0; i < arr.length; i++){
  //     let obj = {};
  //     obj.first = arr[i][0];
  //     obj.last = arr[i][1];
  //     nameObj.push(obj);
  //   }
  //   return nameObj;
  // },

  objContainsProp: (arr, prop) => {
    return arr.every((obj)=>{
      return obj.hasOwnProperty(prop);
    });
  },

  // objContainsProp: (arr, prop) => {
  //   for (var i = 0; i < arr.length; i++){
  //     if(!arr[i].hasOwnProperty(prop)){
  //       return false;
  //     }
  //   }
  //   return true;
  // },

  stringMatch: (arr, str) => {
    return arr.filter((element)=>{
      return element.includes(str);
    });
  },

  // stringMatch: (arr, str) => {
  //   let matches = [];
  //   for(var i = 0; i < arr.length; i++){
  //     if (arr[i].includes(str)){
  //       matches.push(arr[i]);
  //     }
  //   }
  //   return matches;
  // },
};
