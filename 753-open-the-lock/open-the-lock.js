/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    if (deadends.includes("0000")) {
        return -1;
    }

    let q = [];
    q.push(["0000", 0]); //[lock, turns]

    let visit = new Set(deadends);                                      //Creates a set with the deadends so that the algo will skip them. 

    const children = (lock) => {
        let result = [];
        for (let i = 0; i < 4; i++) {
            let digit = String((Number(lock[i]) + 1) % 10);             //increments the current digit, accounting for the circular nature of the lock
            result.push(lock.slice(0, i) + digit + lock.slice(i + 1));  //correctly places the new digit in its spot in the string
            digit = String((Number(lock[i]) - 1 + 10) % 10);            //decrements the digit, account for the circular nature of the lock
            result.push(lock.slice(0, i) + digit + lock.slice(i + 1));  //correctly places teh new digit and adds the child to the result
        }

        return result;                                                  //returns the new 8 children to be used in the main function
    }

    while (q.length > 0) {
        let [lock, turns] = q.shift();                                  //using array destructing, create locks (current lock), turns(amount of turns it took to get here)
        if (lock === target) {                                          
            return turns;
        }

        for (child of children(lock)) {
            if (!visit.has(child)) {                                    //check if the current child has been visited before. 
                visit.add(child);                       
                q.push([child, turns + 1]);                             
            }
        }
    }
    return -1;
};