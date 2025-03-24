
var MinStack = function() {
    this.minStack = [];
    this.stack = []; 
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length === 0){
        this.minStack.push(val);
        this.stack.push(val);
    }else{
        this.stack.push(val);
        if(val <= this.minStack[this.minStack.length - 1]){
            this.minStack.push(val);
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let poppedVal = this.stack.pop();
    if(poppedVal === this.minStack[this.minStack.length - 1]){
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */