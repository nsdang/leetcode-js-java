/*****************************************
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
 * Return the answer in any order.
 * A mapping of digit to letters (just like on the telephone buttons) is given below. 
 * Note that 1 does not map to any letters.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
 const numToLetter = {
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r','s'],
    '8': ['t','u','v'],
    '9': ['w','x','y','z'],
}
 var letterCombinations = function(digits) {
    if (!digits || digits === "")  return [];

    let array = [];
    for (let i = digits.length - 1; i >= 0; i--){
        const num = digits[i];
        if (array.length === 0){
            array = [...numToLetter[num]];  
        }else{
            const newArray = [];
            for (let j of numToLetter[num]){
                for (let k of array){
                    newArray.push(j + k);
                }   
            }
            array = newArray;
        }
    }
    return array;
};

