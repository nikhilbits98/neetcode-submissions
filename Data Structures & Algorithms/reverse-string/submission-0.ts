class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        const n = s.length;
        let left = 0;
        let right = n-1;
        while(left<right){
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
    }
}
