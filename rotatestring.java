//Java Solution

class Solution {
    public boolean rotateString(String A, String B) {
        if (A.length() != B.length()) {
            return false;
        }
        
        if ((A + A).indexOf(B) != -1) {
            return true;
        }
        
        return false;
    }
}