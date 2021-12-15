/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let result = [];
    
    var backtrack = ( openingCount, closingCount, currentString ) => {
        if( currentString.length === n*2 )
            result.push(currentString);
        if( openingCount < n ) 
            backtrack( openingCount+1, closingCount, currentString + "(" );           
        if( closingCount < n && closingCount < openingCount ) 
            backtrack( openingCount, closingCount+1, currentString + ")" );
    }
    
    backtrack(0,0,"");
    return result;
};




