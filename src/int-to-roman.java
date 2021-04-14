// class Solution {
    
//     Map<Integer, String> symbols = new HashMap<Integer, String>();
    
//     public String intToRoman(int num) {
//         symbols.put(1, "I");
//         symbols.put(5, "V");
//         symbols.put(10, "X");
//         symbols.put(50, "L");
//         symbols.put(100, "C");
//         symbols.put(500, "D");
//         symbols.put(1000, "M");
        
//         String roman = "";
//         int count = 0;
//         int value = 0;
       
//         while (num > 0){
//             if (num >= 1000)        value = 1000;
//             else if (num >= 100)    value = 100;
//             else if (num >= 10)     value = 10;
//             else                    value = 1;
            
//             count = num / value;
//             num = num % value;
//             roman += constructRoman(value,count);
//         }
//         return roman;
//     }
    
//     public String constructRoman(int multi, int count){
        
//         if (symbols.containsKey(multi * count)) return symbols.get(multi * count);
        
//         else if (count == 4)    return symbols.get(multi) + symbols.get(5*multi);
        
//         else if (count == 9)    return symbols.get(multi) + symbols.get(10*multi);
        
//         String result = "";
//         String letter = symbols.get(multi);

//         if (count > 5){
//             result += symbols.get(5*multi);
//             count -= 5;
//         }
        
//         for (int i = 0; i < count; i++){
//             result += letter;
//         }
//         return result;
//     }
// }

// class Solution {
    
    
//     public String intToRoman(int num) {
//         String[] letters = new String[]{"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};
//         int[] values = new int[]{1000,900,500,400,100,90,50,40,10,9,5,4,1};
        
//         String roman = "";
//         int i = 0;
       
//         while (num > 0){
//             while (num >= values[i]){
//                 roman += letters[i];
//                 num -= values[i];
//             }
//             i++;
//         }
//         return roman;
//     }
// }

class Solution {
    public String intToRoman(int num) {
     
        String S = new String("");
        
        while(num>0) {
            if(num>=1000) {
                S =S.concat("M");
                num=num-1000;
                continue;
            }
            if(num>=900) {
                S = S.concat("CM");
                num=num-900;  
                continue;
            }
            if(num>=500) {
                S = S.concat("D");
                num=num-500;
                continue;
            }
            if(num>=400) {
                S = S.concat("CD");
                num=num-400;
                continue;                
            }
            if(num>=100) {
                S = S.concat("C");
                num=num-100;
                continue;
            }
            if(num>=90) {
                S = S.concat("XC");
                num=num-90;
                continue;
            }
            if(num>=50) {
                S = S.concat("L");
                num=num-50;
                continue;
            }
            if(num>=40) {
                S = S.concat("XL");
                num=num-40;
                continue;
            }
            if(num>=10) {
                S = S.concat("X");
                num=num-10;
                continue;
            }
            if(num==9) {
                S = S.concat("IX");
                num=num-9;
                continue;
            }
            if(num>=5) {
                S = S.concat("V");
                num=num-5;
                continue;
            }
            if(num==4) {
                S = S.concat("IV");
                num=num-4;
                continue;
            }
            else {
               S = S.concat("I");
                num=num-1;
                continue;
            }
        }
        
        return S;
    }
}