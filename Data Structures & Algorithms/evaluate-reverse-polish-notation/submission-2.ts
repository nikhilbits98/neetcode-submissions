class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];
        for(let token of tokens){
            if(token === "+"){
                const val1 = stack.pop();
                const val2 = stack.pop();
                stack.push(val1 + val2);
            } else if (token === "-"){
                const val1 = stack.pop();
                const val2 = stack.pop();
                stack.push(val2 - val1);
            } else if (token === "*"){
                const val1 = stack.pop();
                const val2 = stack.pop();
                stack.push(val1 * val2);
            } else if (token === "/"){
                const val1 = stack.pop();
                const val2 = stack.pop();
                stack.push(parseInt(String(val2 / val1)));
            } else {
                stack.push(Number(token))
            }
        }
        return stack[0];
    }
}
