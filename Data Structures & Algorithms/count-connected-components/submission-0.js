class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adjList = new Array(n).fill(0).map(el => new Array());
        for(let [to,fro] of edges){
            adjList[to].push(fro);
            adjList[fro].push(to);
        }
        let visited = new Set();

        function dfs(node, prev){
            if(visited.has(node)){
                return;
            }
            visited.add(node);
            for(let next of adjList[node]){
                if(next == prev){
                    continue;
                }
                dfs(next);
            }
        }

        let count = 0;
        for(let i = 0; i<n; i++){
            if(visited.has(i)){
                continue;
            }
            dfs(i, null);
            count++;
        }
        return count;
    }
}
