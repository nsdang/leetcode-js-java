/**

@param {string} s

@return {number}
*/
var lengthOfLastWord = function (s) {
  // Solution 1:
  let arrayOfString = s
    .split(" ")
    .filter((word) => word !== " " && word !== "");
  console.log(arrayOfString);
  return arrayOfString[arrayOfString.length - 1].length;

  // Solution 2:
  // let i = s.length - 1;
  // let result = 0;
  // while (i >= 0 && s[i] === " ") i--;
  // while (i >= 0 && s[i] !== " ") {
  // result++;
  // i--;
  // }
  // return result;
};
