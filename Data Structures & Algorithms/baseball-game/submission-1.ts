class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const record: number[] = [];
        for(let ops of operations){
            if(ops === "+"){
                const val1 = record[record.length-1];
                const val2 = record[record.length-2];
                record.push(val1 + val2);
            } else if(ops === "C"){
                record.pop();
            } else if(ops === "D"){
                const val = record[record.length - 1];
                record.push(val *2);
            } else {
                const val: number = Number(ops);
                record.push(val);
            }
        }
        let sum = 0
        for(let vals of record){
            sum += vals
        }
        return sum;
    }
}
