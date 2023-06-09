// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2.
  const maxOfThree = function(x, y, z) {
    if (x >= y && x >= z) {
      return x;
    } else if (y >= x && y >= z) {
      return y;
    } else {
      return z;
    }
  };

  console.log(maxOfThree(3, 9, 6));
  
  // 3.
  function isCharAVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
  }
  
  console.log(isCharAVowel('a'));
  
  // 4.
  const sumArray = function(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  };
  
  console.log(sumArray([2, 4, 5]));
  
  // 5.
  function multiplyArray(arr) {
    let product = 1;
    for (let num of arr) {
      product *= num;
    }
    return product;
  }
  
  console.log(multiplyArray([2, 4, 5]));
  
  // 6.
  const numArgs = function() {
    return arguments.length;
  }
  
  console.log(numArgs(1, 2, 3, 4));
  
  // 7.
  function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  console.log(reverseString('rockstar'));
  
  // 8.
  const longestStringInArray = function(arr) {
    let longestLength = 0;
    for (let str of arr) {
      if (str.length > longestLength) {
        longestLength = str.length;
      }
    }
    return longestLength;
  }
  
  console.log(longestStringInArray(['say', 'hello', 'in', 'the', 'morning']));
  
  // 9.
  function stringsLongerThan(arr, num) {
    const result = [];
    for (let str of arr) {
      if (str.length > num) {
        result.push(str);
      }
    }
    return result;
  }
  
  console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));