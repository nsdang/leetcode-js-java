/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    else if (rowIndex === 1) return [1,1];
    
    let result = [[1],[1,1]];
    let row;
    for (let i = 1; i < rowIndex; i++){
        row = [1];
        for (let j = 0; j < result[i].length-1; j++){
            row.push(result[i][j] + result[i][j+1]);
        }
        row.push(1);
        result.push(row);
    }
    return result[rowIndex]; 
};