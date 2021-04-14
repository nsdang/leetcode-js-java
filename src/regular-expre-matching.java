class Solution {
    public boolean isMatch(String s, String p) {
        
        if (p.isEmpty()) return s.isEmpty();
        
        // Compare if first two char match
        boolean first_match = (!s.isEmpty() &&
                               (p.charAt(0) == s.charAt(0) || p.charAt(0) == '.'));
        
        // if there is upcoming *
        if (p.length() >= 2 && p.charAt(1) == '*'){
            // ignore the * part || continue compare first char in s with first char in p
            return (isMatch(s, p.substring(2)) ||
                    (first_match && isMatch(s.substring(1), p)));
        } 
        
        // else
        else  return first_match && isMatch(s.substring(1), p.substring(1));

    }
}