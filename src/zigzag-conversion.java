class Solution {
    public String convert(String s, int numRows) {
        
        int len = s.length();
        String result = "";

        // Edge cases
        if (len <= numRows || numRows == 1) return s;
        else if (numRows == 2){
            for (int i = 0; i < len; i+=2){
               result += s.charAt(i); 
            }
            for (int i = 1; i < len; i+=2){
                result += s.charAt(i);
            }
            return result;
        }
        
        
        // Find numCols for 2D array
        int diagnolCol = numRows - 2;
        int numZigs = len / (numRows + diagnolCol);
        if (len % (numRows + diagnolCol) != 0)  numZigs++;
        int numCols = (diagnolCol + 1) * numZigs;

       
        // Create 2D array
        char[][] p = new char[numRows][numCols];
        for (int i = 0; i < numRows; i++){
            for (int j = 0; j < numCols; j++){
                p[i][j] = ' ';
            }
        }
        
        // Loop through the String and put value in the 2D table
        int currX = 0;
        int currY = 0;
        
        for (int i = 0; i < len; i++){
            
            p[currY][currX] = s.charAt(i);
            
            if (currX % (numRows - 1) != 0){
                currY--;
                currX++;
                continue;
            }
            
            currY++;
            if (currY >= numRows)   {
                currY -= 2;
                currX++;
            }
        }
        
        // Read the table and output result        
        for (int i = 0; i < numRows; i++){
            for (int j = 0; j < numCols; j++){
                if (p[i][j] != ' ')  result += p[i][j];
            }
        }
        
        return result;
    }
}