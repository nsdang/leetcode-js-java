class Solution {
    public int maxArea(int[] height) {
        if (height.length < 2)  return 0;
        
        int leftI = 0;
        int rightI = height.length - 1;
        int maxA = 0;
        
        while (leftI < rightI){
            int h = Math.min(height[leftI], height[rightI]);
            int w = rightI - leftI;
            maxA = Math.max(h * w, maxA);
            
            if (height[leftI] > height[rightI]) rightI--;
            else if (height[leftI] < height[rightI])    leftI++;
            else{
                if (height[leftI + 1] < height[rightI - 1]) rightI--;
                else    leftI++;
            }    
        }
        
        return maxA;
    }
}