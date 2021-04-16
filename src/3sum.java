class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> result = new ArrayList<> ();
        if (nums.length < 3 || nums.length > 3000)  return result;
        
        for (int i = 0; i < nums.length; i++){
            if (nums[i] > Integer.MAX_VALUE || nums[i] < Integer.MIN_VALUE) {
                return result;
            }
        }
        
        Arrays.sort(nums);
        
        int i2, i3;
        
        for (int i = 0; i < nums.length - 2; i++){
            if (i > 0 && nums[i] == nums[i-1])  continue;
            i2 = i + 1;
            i3 = nums.length - 1;

            while (i2 < i3){
                int sum = nums[i] + nums[i2] + nums[i3];
                if (sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[i2], nums[i3]));
                    i3--;
                    i2++;

                    // loops for negleting duplicates
                    while (nums[i3] == nums[i3+1] && i3 > i2) i3--;
                    while (nums[i2] == nums[i2-1] && i2 < i3) i2++;
                }
                else if (sum > 0)   i3--;
                else    i2++;
            }
            
        }
        return result;
    }
}