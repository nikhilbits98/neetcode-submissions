class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let adjList = new Array(n).fill(0).map(element => new Array());
        for(let [to,fro] of edges){
            adjList[to].push(fro);
            adjList[fro].push(to);
        }
        let visited = new Set();

        function dfs(node, previous){
            if(visited.has(node)){
                return false;
            }
            visited.add(node);
            for(let adj of adjList[node]){
                if(adj == previous){
                    continue;
                }
                if(!dfs(adj,node)){ return false; }
            }
            return true;
        }

        let isLoop = dfs(0, null);
        return isLoop ? visited.size == n : false;
    }
}
