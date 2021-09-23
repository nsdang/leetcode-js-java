/**

@param {string} s

@return {boolean}
*/
var isValid = function (s) {
  s.replace(/\s/g, "");

  if (s.length % 2 !== 0) return false;
  else if (s.length === 0) return true;

  const validPair = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let stack = [];

  for (var i = 0; i < s.length; i++) {
    if (Object.values(validPair).includes(s[i])) stack.push(s[i]);
    else if (validPair[s[i]] === stack[stack.length - 1]) stack.pop();
    else return false;
  }
  return stack.length === 0;
};
