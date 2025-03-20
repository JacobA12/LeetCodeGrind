/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.queue = [];
    this.windowSize = size;
    this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.queue.push(val);
    this.sum += val;

    if(this.queue.length > this.windowSize){
        this.sum -= this.queue.shift();
    }

    return this.sum / this.queue.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */