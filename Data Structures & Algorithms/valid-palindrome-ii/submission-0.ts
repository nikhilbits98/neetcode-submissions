class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;
        while(left<right){
            if(s[left] !== s[right]){
                const isLeftRemovedPal = this.isPalindrome(s, left+1, right);
                const isRightRemovedPal = this.isPalindrome(s, left, right - 1);
                return isLeftRemovedPal || isRightRemovedPal;
            } else {
                left++;
                right--;
            }
        }
        return true;

    }

    isPalindrome(s:string, left: number = 0, right: number = s.length -1): boolean {
        const n = s.length;
        while(left<right){
            if(s[left]!==s[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
