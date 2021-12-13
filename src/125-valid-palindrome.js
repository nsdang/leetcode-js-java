/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const newS = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    if (newS.length % 2 === 0){
        let midI = newS.length/2;
        for (let i = midI-1, j = midI; i >= 0, j <newS.length; i--, j++){
            if (newS[i] !== newS[j])    return false;
        }
    }
    else {
        let midI = Math.floor(newS.length/2);
        for (let i = midI-1, j = midI+1; i >= 0, j <newS.length; i--, j++){
            if (newS[i] !== newS[j])    return false;
        }
    }
    return true;
};