class Solution {
    public int romanToInt(String s) {
        int len = s.length();
        List<Integer> values = new ArrayList<Integer>();
        for (int i = 0; i < len; i++){
            switch(s.charAt(i)){
                case 'M':
                    values.add(1000);
                    break;
                case 'D':
                    values.add(500);
                    break;
                case 'C':
                    values.add(100);
                    break;
                case 'L':
                    values.add(50);
                    break;
                case 'X':
                    values.add(10);
                    break;
                case 'V':
                    values.add(5);
                    break;
                case 'I':
                    values.add(1);
                    break;
            }
        }
        
        int result = 0;
        for (int i = 0; i < values.size(); i++){
            if (i != values.size() - 1 && values.get(i) < values.get(i+1)){
                result += (values.get(i+1) - values.get(i));
                i++;
                continue;
            }
            result += values.get(i);
        }
        
        return result;
    }
}