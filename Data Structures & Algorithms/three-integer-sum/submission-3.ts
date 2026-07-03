class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums = nums.sort((a,b) => a-b);
        const n = nums.length;
        const result = new Set<string>();
        for(let i = 0; i<n; i++){
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            const target = nums[i] * -1;
            let l = i+1;
            let r = n-1;
            while(l < r){
                if(nums[l] + nums[r] === target){
                    result.add(JSON.stringify([nums[i],nums[l], nums[r]]));
                    l++;
                    r--;
                } else if(nums[l] + nums[r] < target){
                    l++;
                } else {
                    r--;
                }
            }
        }
        return Array.from(result, element => JSON.parse(element));
    }
}
