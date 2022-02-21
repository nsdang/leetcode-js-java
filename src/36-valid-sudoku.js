/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    for (let i = 0; i < board.length; i++){
        if (!isValidCol(i,board) || !isValidRow(i,board))   return false;
    }
    let l = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
    for (let i of l){
        if(!isValidSub(i,board)) return false;
    }
    
    return true;
};

var isValidCol = function(index, board){
    let hash = {};
  
    for (let i = 0; i < board.length; i++){
        if (hash[board[i][index]] === true) return false;
        if (board[i][index] !== '.')   hash[board[i][index]] = true;
    }
    
    return true;
};

var isValidRow = function(index,board){
    let hash = {};
  
    for (let i = 0; i < board.length; i++){
        if (hash[board[index][i]] === true) return false;
        if (board[index][i] !== '.')    hash[board[index][i]] = true;
    }
    return true;
};

var isValidSub = function(index,board){
    let hash = {};
    let startRow = index[0]*3;
    let endRow = startRow + 2;
    let startCol = index[1]*3;
    let endCol = startCol + 2;
        
    for (let i = startRow; i <= endRow; i++){
        for (let j = startCol; j <= endCol; j++){
            if (hash[board[i][j]] === true) return false;
            if (board[i][j] !== '.')    hash[board[i][j]] = true;
        }
    }
    return true;
}

//approach: using set
//as I loop through the board's col and row, I will make sure to put the element inside the set
//we know same row, col and the subBox cannot have the same value more than once, if it does, return false

var isValidSudoku = function(board) {
    let set = new Set();
    
    for(let r = 0; r < board.length; r++){
        for(let c = 0; c < board[r].length; c++){
            let val = board[r][c];
            
            if(val === '.')
                continue;
            
            //basically, formula is 3 * row + col --> to turn 2d array into 1d array
            //using Math.floor(row/3) + Math.floor(col/3) --> so we can find row and col of our sub box 
            let boxNum = 3 * Math.floor(r/3) + Math.floor(c/3);
            
            let inRow = `row: ${r}, value: ${val}`;
            let inCol = `col: ${c}, value: ${val}`;
            let inSubBox = `subBox: ${boxNum}, value: ${val}`;
            
            if(set.has(inRow) || set.has(inCol) || set.has(inSubBox))
                return false;
            
            set.add(inRow);
            set.add(inCol);
            set.add(inSubBox);
        }
    }
    return true;
};