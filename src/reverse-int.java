class Solution {
    public int reverse(int x) {
        int result = 0;
        boolean isNeg = false;
        
        if (x < 0)  {
            isNeg = true;
            x *= -1;
        }
        
        while (x >= 1){
            int pop = x % 10;
            x /= 10;
            if (result > Integer.MAX_VALUE/10 || (result == Integer.MAX_VALUE / 10 && pop > 7)) return 0;
            result = result * 10 + pop;
        }

        
        if (isNeg)  result *= -1;
        
        return result;
    }
}