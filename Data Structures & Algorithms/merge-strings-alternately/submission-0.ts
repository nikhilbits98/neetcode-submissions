class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let p1 = 0;
        let p2 = 0;
        let n1 = word1.length;
        let n2 = word2.length;
        let ans = new Array(n1+n2);
        while(p1<n1 && p2<n2){
            ans[p1+p2] = word1[p1];
            ans[p1+p2+1] = word2[p2];
            p1++;
            p2++;
        }
        while(p1<n1){
            ans[p1+p2] = word1[p1];
            p1++;
        }
        while(p2<n2){
            ans[p1+p2] = word2[p2];
            p2++;
        }
        return ans.join("");
    }
}
