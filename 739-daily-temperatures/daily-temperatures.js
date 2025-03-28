var dailyTemperatures = function (temperatures) {
    const res = new Array(temperatures.length).fill(0); 
    const stack = []; 

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            res[prevIndex] = i - prevIndex; // days to wait
        }
        stack.push(i);
    }

    return res;
};
