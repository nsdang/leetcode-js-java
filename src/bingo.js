/**
 * B-I-N-G-O
 *
 * A Bingo card contain 25 squares arranged in a 5x5 grid (five columns
 * and five rows). Each space in the grid contains a number between 1
 * and 75. The center space is marked "FREE" and is automatically filled.
 *
 * As the game is played, numbers are drawn. If the player's card has
 * that number, that space on the grid is filled.
 *
 * A player wins BINGO by completing a row, column, or diagonal of filled
 * spaces.
 *
 * Your job is to complete the function that takes a bingo card and array
 * of drawn numbers and return 'true' if that card has achieved a win.
 *
 * A bingo card will be 25 element array. With the string 'FREE' as the
 * center element (index 12). Although developers are unscrupulous, they
 * will pass valid data to your function.
 */

 const ROWCOLUMN_LENGTH = 5;
 const TOTAL_VALUE = 75
 const VALUES_PER_ROW = TOTAL_VALUE/ROWCOLUMN_LENGTH;
 
 /* Assumption:  The values in Bingo card follows the structure of
 **                first column: 0 - 15
 **                second column: 16 - 30
 **                third column: 31 - 45
 **                fourth column: 46 - 60
 **                fifth column: 61 - 75
 ** Time Complexity: O(5*n)=O(n) where: n is the number of drawn numbers
 */
 function checkForBingo (bingoCard, drawnNumbers) {
   let filledSpaces = [12];    // contains all the filled space index
   let isFound;                // true if the value is in the bingo card, false otherwise
   let index, count;
 
   for (let i = 0; i < drawnNumbers.length; i++){
     isFound = false;
     count = 0;
     index = 0;
 
     // initialize the column number that going to look at based on the value
     if (drawnNumbers[i] > 4*VALUES_PER_ROW){
       index = 4; 
     }
     else if (drawnNumbers[i] > 3*VALUES_PER_ROW){
       index = 3; 
     }
     else if (drawnNumbers[i] > 2*VALUES_PER_ROW){
       index = 2; 
     }
     else if (drawnNumbers[i] > VALUES_PER_ROW){
       index = 1; 
     }
 
     // Loop through the column to look for FILLED space and put it in filledSpaces array
     while (count < ROWCOLUMN_LENGTH && !isFound){
       if (bingoCard[index] == drawnNumbers[i]){
         filledSpaces.push(index);
         bingoCard[index] = 'FILLED';
         isFound = true;
       }
       count++;
       index += 5;
     }
   }
 
   // Analyze the filledSpaces array for the result
   if(filledSpaces.length < ROWCOLUMN_LENGTH) return false;
 
   for (let i = 0; i < filledSpaces.length; i++){
     if (filledSpaces[i] % ROWCOLUMN_LENGTH == 0){
       let isRowBingo = filledSpaces.includes(filledSpaces[i]+1) && filledSpaces.includes(filledSpaces[i]+2) && filledSpaces.includes(filledSpaces[i]+3) && filledSpaces.includes(filledSpaces[i]+4);
       if (isRowBingo) return true;
     }
 
     if (filledSpaces[i] < ROWCOLUMN_LENGTH){
       let isColBingo = filledSpaces.includes(filledSpaces[i]+5) && filledSpaces.includes(filledSpaces[i]+10) && filledSpaces.includes(filledSpaces[i]+15) && filledSpaces.includes(filledSpaces[i]+20);
       if (isColBingo) return true;
     }
 
     if (filledSpaces[i] == 0){
       let isDiagBingo = filledSpaces.includes(6) && filledSpaces.includes(18) && filledSpaces.includes(24);
       if (isDiagBingo) return true;
     }
   }
   return false;
 }
 
 module.exports = checkForBingo;
 
 // here are some samples
 
 // this should return true with diagonal + free
 console.log(checkForBingo(
   [
     8, 29, 35, 54, 65,
     13, 24, 44, 48, 67,
     9, 21, 'FREE', 59, 63,
     7, 19, 34, 53, 61,
     1, 20, 33, 46, 72
   ],
   [
     8, 24, 53, 72
   ]
 ));
 
 // this should return true (first row)
 console.log(checkForBingo(
   [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
   ],
   [
     8, 35, 44, 34, 54, 24, 65, 29
   ]
 ));
 
 // this should return true (last column)
 console.log(checkForBingo(
   [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
   ],
   [
     65, 67, 63, 61, 72, 48
   ]
 ));
 
 // this should return false
 console.log(checkForBingo(
   [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
   ],
   [
     1, 33, 53, 65, 29, 75
   ]
 ));
 
 // this should return false
 console.log(checkForBingo(
   [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
   ],
   [
     8, 35, 44, 34, 54, 24, 65, 72, 46
   ]
 ));
 
 // this should return false
 console.log(checkForBingo(
   [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
   ],
   [
     1, 2, 3, 4, 5, 6, 7, 8
   ]
 ));