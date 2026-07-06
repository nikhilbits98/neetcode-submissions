class MinStack {
    private stack: {val:number, min: number}[];
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if(this.stack.length == 0){
            this.stack.push({val: val, min: val});
        } else {
            const min = this.stack[this.stack.length - 1].min;
            this.stack.push({val: val, min: Math.min(val, min)});
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length-1].val;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack[this.stack.length-1].min;
    }
}
