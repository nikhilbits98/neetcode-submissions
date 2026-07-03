class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let it = 0;
        while(true){
            const nextIt = nums[it];
            if(nextIt < 0){
                return it;
            }
            nums[it] = nums[it] * -1;
            it = nextIt;
        }
    }
}
