class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let p1 = m - 1;
    let p2 = n - 1;
    let res = m + n - 1;

    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] >= nums2[p2]) {
            nums1[res--] = nums1[p1--];
        } else {
            nums1[res--] = nums2[p2--];
        }
    }
    }
}
