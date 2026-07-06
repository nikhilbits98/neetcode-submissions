class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        for(let char of s){
            if(char === '(' || char === '[' || char === '{' ){
                stack.push(char);
            } else {
                const prevChar = stack.pop();
                if((char == ')' && prevChar == '(') 
                || (char == ']' && prevChar == '[')
                || (char == '}' && prevChar == '{')){
                    continue;
                }  else {
                    return false;
                }
            }
        }
        return stack.length == 0;
    }
}
