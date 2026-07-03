class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        const n = nums.length;
        if(n<=1){
            return n;
        }
        let k = 0;
        let slow = 0;
        let fast = 0;
        while(fast < n){
            while(nums[fast] == nums[slow] && fast<n){
                fast++;
            }
            nums[k] = nums[slow];
            k++;
            slow = fast;
        }
        return k;
    }
}
