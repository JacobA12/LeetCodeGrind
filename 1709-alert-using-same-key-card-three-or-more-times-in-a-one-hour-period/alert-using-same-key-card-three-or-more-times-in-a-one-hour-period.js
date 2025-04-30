var alertNames = function (keyName, keyTime) {
    const nameMap = new Map();

    for (let i = 0; i < keyName.length; i++) {
        if (!nameMap.has(keyName[i])) {
            nameMap.set(keyName[i], []);
        }
        nameMap.get(keyName[i]).push(keyTime[i]);
    }

    const sol = [];

    for (const [name, timeStamps] of nameMap) {
        if (timeStamps.length < 3) continue;

        timeStamps.sort();  // Sort timestamps in HH:MM format

        for (let i = 0; i <= timeStamps.length - 3; i++) {
            const [h1, m1] = timeStamps[i].split(":").map(Number);
            const [h3, m3] = timeStamps[i + 2].split(":").map(Number);

            const t1 = h1 * 60 + m1;
            const t3 = h3 * 60 + m3;

            if (t3 - t1 <= 60) {
                sol.push(name);
                break;  // No need to keep checking
            }
        }
    }

    return sol.sort();  // Sort names alphabetically
};
