class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const n = s.length;
        let left = 0;
        let right = n-1;
        while(left<right){
            while(left<right && !this.isAlphaNumeric(s[left])){
                left++;
            }
            while(left<right && !this.isAlphaNumeric(s[right])){
                right--;
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    isAlphaNumeric(c: string){
        return (c[0] >= 'a' && c[0] <= 'z') || 
            (c[0] >= 'A' && c[0] <= 'Z') ||
            (c[0] >= '0' && c[0] <= '9')
    }
}
