class MinStack {
    constructor() {
        this.stack = []
        this.minValueStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.minValueStack.length > 0) {
            const minVal = Math.min(val, ...this.minValueStack);
            this.minValueStack.push(minVal);
        } else {
            this.minValueStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minValueStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minValueStack[this.minValueStack.length - 1]
    }
}
