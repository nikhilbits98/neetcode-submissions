class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const res: number[] = new Array(temperatures.length).fill(0);
        const stack: number[] = [];
        for(let i = 0; i<temperatures.length; i++){
            const temp = temperatures[i];
            while(stack.length && temp > temperatures[stack[stack.length - 1]]){
                const top = stack.pop();
                res[top] = i - top;
            }
            stack.push(i);
        }
        return res;
    }
}
