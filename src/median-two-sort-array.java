class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        
        int curr1 = 0;
        int curr2 = 0;
        ArrayList<Integer> mergeArr = new ArrayList<Integer>(); 
        
        while (curr1 < nums1.length && curr2 < nums2.length){
            if (nums1[curr1] <= nums2[curr2]){
                mergeArr.add(nums1[curr1]);
                curr1++;
            }    
            else{
                mergeArr.add(nums2[curr2]);
                curr2++;
            }    
        }
        
        for (int i = curr1; i < nums1.length; i++){
            mergeArr.add(nums1[i]);    
        }
        
        for (int i = curr2; i < nums2.length; i++){
            mergeArr.add(nums2[i]);
        }

        if (mergeArr.size() % 2 == 0){
            int i1 = mergeArr.size() / 2 - 1;
            int i2 = i1 + 1;
            return (double)(mergeArr.get(i1) + mergeArr.get(i2)) / 2;
        }
        return (double)mergeArr.get(mergeArr.size() / 2);
    }
}