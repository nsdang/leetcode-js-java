class Solution {
    public String longestCommonPrefix(String[] strs) {
        
        if (strs == null || strs.length < 1)    return "";
        
        String cp = strs[0];
        
        for (int i = 1; i < strs.length; i++){
            while (strs[i].indexOf(cp) != 0){
                cp = cp.substring(0, cp.length() - 1);
                if (cp.isEmpty()) return "";
            }        
        }
        return cp;
    }
}