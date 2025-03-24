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

    let visit = new Set(deadends);

    const children = (lock) => {
        let result = [];
        for (let i = 0; i < 4; i++) {
            let digit = String((Number(lock[i]) + 1) % 10);
            result.push(lock.slice(0, i) + digit + lock.slice(i + 1));
            digit = String((Number(lock[i]) - 1 + 10) % 10);
            result.push(lock.slice(0, i) + digit + lock.slice(i + 1));
        }

        return result;
    }

    while (q.length > 0) {
        let [lock, turns] = q.shift();
        if (lock === target) {
            return turns;
        }

        for (child of children(lock)) {
            if (!visit.has(child)) {
                visit.add(child);
                q.push([child, turns + 1]);
            }
        }
    }
    return -1;
};