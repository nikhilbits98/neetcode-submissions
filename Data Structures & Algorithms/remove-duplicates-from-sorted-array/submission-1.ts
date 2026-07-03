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
        let fast = 0;
        while(fast < n){
            nums[k] = nums[fast];
            while(nums[fast] == nums[k] && fast<n){
                fast++;
            }
            k++;
        }
        return k;
    }
}
