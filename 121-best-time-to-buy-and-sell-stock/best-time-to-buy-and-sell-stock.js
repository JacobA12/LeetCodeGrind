/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2){
        return 0;
    }

    let maxProf = 0;
    let cheapestPrice = prices[0];

    let left = 0;
    let right = 1;

    while(right < prices.length){
        let currPrice = prices[left];
        let nextPrice = prices[right];

        maxProf = Math.max(nextPrice - currPrice, maxProf);

        if(prices[right] < prices[left]){
            left = right; 
            right++;
            continue;
        }
        right++;
    }   

    return maxProf;
};