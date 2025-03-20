/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.windowSize = size;
    this.nums = [];
    this.head = 0;
    this.tail = 0;
    this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if(this.nums.length === 0){
        
        this.nums.push(val);
        this.sum += val;
        
        return val;
    }
    
    if(this.nums.length + 1 <= this.windowSize){
        
        this.nums.push(val);
        this.sum += val;
        this.tail++;
        
        return this.sum / this.nums.length;
    }
    
    this.sum -= this.nums[this.head];
    this.head++;
    this.nums.push(val);
    this.sum += val;
    this.tail++;
    
    return this.sum / this.windowSize;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */