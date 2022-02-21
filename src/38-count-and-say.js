/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    if (n === 1)    return "1";
    return f(countAndSay(n-1));
};

var f = function(n) {
    let i = 1;
    let count = 1;
    let say = n[0];
    let str = "";
    while (i <= n.length){
        if (i === n.length) str = str.concat(count+say);
        else if (n[i] === say)   count++;
        else {
            str = str.concat(count+say);
            count = 1;
            say = n[i]
        }
        i++;
    }
    return str;
}