class StockSpanner {
    private currDay: number;
    private prices: number[];
    private stack: number[];
    constructor() {
        this.currDay = 0;
        this.prices = [];
        this.stack = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price: number): number {
        this.currDay++;
        this.prices.push(price);
        while(this.stack.length 
            && price >= this.prices[this.stack[this.stack.length - 1]-1]){
                this.stack.pop();
        }
        const span = this.currDay - (this.stack[this.stack.length-1] || 0);
        this.stack.push(this.currDay);
        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
