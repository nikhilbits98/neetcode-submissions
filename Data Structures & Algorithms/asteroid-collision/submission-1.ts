class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids: number[]): number[] {
        const stack: number[] = [];
        for(let ast of asteroids){
            console.log('Incoming asteroid:', ast);
            while(true){
                if(stack.length === 0){
                    console.log('Lonesome asteroid :(');
                    stack.push(ast);
                    break;
                }
                const top = stack[stack.length-1];
                if((top > 0 && ast > 0) || (top<0 && ast<0) || (top<0 && ast>0)){
                    console.log('If you cant beat it, join it. Top:', top);
                    stack.push(ast);
                    break;
                } else {
                    if(Math.abs(top) === Math.abs(ast)){
                        console.log('Both Devastated. Top:', top);
                        stack.pop();
                        break;
                    } else if(Math.abs(top) > Math.abs(ast)){
                        console.log('Incoming Over. Top:', top);
                        break;
                    } else {
                        console.log('One down, more to go. Top:', top);
                        stack.pop();
                        continue;
                    }
                }
            }
        }
        return stack;
    }
}
