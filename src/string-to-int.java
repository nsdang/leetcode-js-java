class Solution {
    public int myAtoi(String s) {
        
        // Trim leading and trailing whitespaces 
        s = s.trim();
        
        int i = 0;
        int result = 0;
        boolean isNeg = false;
        
        if (s.isEmpty())    return result;
        
        if (s.charAt(i) == '-'){
            isNeg = true;
            i++;
        }        
        else if(s.charAt(i) == '+') i++;
        
        while (i < s.length() && Character.isDigit(s.charAt(i))){
            int digit = Character.getNumericValue(s.charAt(i));
            
            if (result > Integer.MAX_VALUE / 10 ||
                    (result == Integer.MAX_VALUE / 10 && digit > Integer.MAX_VALUE % 10)) {
                return (isNeg) ? Integer.MIN_VALUE : Integer.MAX_VALUE;
            }
            
            result = result * 10 + digit; 
            i++;
        }
        
        if(isNeg)   result *= -1;
        
        return result;
    }
}