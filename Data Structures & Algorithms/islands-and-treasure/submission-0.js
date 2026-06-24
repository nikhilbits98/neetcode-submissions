class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let directions = [[1,0],[0,1],[-1,0],[0,-1]];
        function bfs(row,col){
            let visited = new Set();
            let queue = [];
            queue.push({row:row,col:col});
            visited.add(row + "_" + col);
            while(queue.length){
                let current = queue.shift();
                for(let dir of directions){
                    let r = current.row + dir[0];
                    let c = current.col + dir[1];
                    if(r<0 || r>=rows || c<0 || c>=cols){
                        continue;
                    }
                    if(grid[r][c] == -1){continue;}
                    if(visited.has(r + "_" + c)){continue;}
                    visited.add(r+"_"+c);
                    grid[r][c] = Math.min(grid[r][c],grid[current.row][current.col] + 1);
                    queue.push({row:r,col:c});
                }
            }
        }

        for(let i = 0; i<rows; i++){
            for(let j = 0; j<cols; j++){
                if(grid[i][j] == 0){
                    bfs(i,j);
                }
            }
        }
        return grid;
    }
}
