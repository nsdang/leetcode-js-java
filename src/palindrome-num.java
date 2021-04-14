class Solution {
    public boolean isPalindrome(int x) {
        
        if (x < 0)   return false;
        
        String s = String.valueOf(x);
        
        int len = s.length();
        
        int leftI = 0;
        int rightI = 0;
        
        if (len % 2 != 0){
            leftI = len / 2 - 1;
            rightI = len / 2 + 1;
        }else{
            leftI = len / 2  - 1;
            rightI = len / 2;
        }
        
        while(leftI >= 0 && rightI < len){
            if (s.charAt(leftI) != s.charAt(rightI))    return false;
            leftI--;
            rightI++;
        }
        return true;
    }
}